import { supabase } from "@/lib/supabase/browser";
import { FormDataTour } from "./formCreateTour";

interface UploadImageParams {
  file: File;
  idFile: number;
  name: string;
  index: number;
}

async function uploadImage({
  file,
  idFile,
  name,
  index,
}: UploadImageParams): Promise<void> {
  const filePath = `/${idFile}/${name}-${index}.${file.type.split("/")[1]}`;

  const { error } = await supabase.storage
    .from("tours")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.error("Erro ao fazer upload da imagem:", error.message);
  }
}

interface UploadResponse {
  error: Error | null;
}

export async function saveTour(
  formData: FormDataTour
): Promise<UploadResponse> {
  const { data, error } = await supabase
    .from("tb_tours")
    .insert([
      {
        name: formData.name,
        description: formData.description,
        comission: formData.comission,
        publish: formData.publish,
        link_tour: formData.linkTour,
        selected_days: formData.selectedDays,
        hours: formData.hours,
        high_season: formData.highSeason,
        ange_range: formData.angeRange,
      },
    ])
    .select("id, name");

  if (data) {
    let index = 0;
    for (const file of formData.imagem) {
      await uploadImage({
        file: file,
        idFile: data[0].id,
        name: data[0].name,
        index: index,
      });
      index++;
    }
  }

  return { error };
}
