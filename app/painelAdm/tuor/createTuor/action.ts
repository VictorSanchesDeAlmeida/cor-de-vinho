import { supabase } from "@/lib/supabase/browser";
import { FormDataTuor } from "./formCreateTuor";

async function uploadImage(file: File): Promise<string | null> {
  const fileName = await sanitizeFileName(file.name);

  console.log("Nome do arquivo sanitizado:", fileName);

  const filePath = `tours/${fileName}`;

  const { data, error } = await supabase.storage
    .from("image-tuor")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.error("Erro ao fazer upload da imagem:", error.message);
    return null;
  }

  return data?.path ?? null;
}

interface UploadResponse {
  data: any;
  error: any;
}

export async function saveTour(
  formData: FormDataTuor
): Promise<UploadResponse> {
  const uploadedImagePaths: string[] = [];
  for (const file of formData.imagem) {
    const path = await uploadImage(file);
    if (path) uploadedImagePaths.push(path);
  }

  const { data, error } = await supabase.from("tb_tours").insert([
    {
      name: formData.name,
      description: formData.description,
      comission: formData.comission,
      publish: formData.publish,
      link_tour: formData.linkTuor,
      selected_days: formData.selectedDays,
      hours: formData.hours,
      high_season: formData.highSeason,
      ange_range: formData.angeRange,
      imagem: uploadedImagePaths,
    },
  ]);

  return { data, error };
}

function sanitizeFileName(filename: string): string {
  const ext = filename.split(".").pop();
  const base = filename.replace(/\.[^/.]+$/, ""); // Remove a extensão

  const withoutAccents = base.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const cleaned = withoutAccents
    .replace(/[^a-zA-Z0-9.\-_]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  return `${cleaned}.${ext}`;
}
