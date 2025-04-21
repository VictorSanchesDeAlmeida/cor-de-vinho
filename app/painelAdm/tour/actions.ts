"use server";

import { CreateServerClient } from "@/lib/supabase/server";

const supabase = await CreateServerClient();

export interface Tour {
  id: number;
  created_at: string;
  name: string;
  description: string;
  comission: string;
  publish: boolean;
  link_tour: string;
  selected_days: string[];
  hours: string[];
  high_season: boolean;
  ange_range: { descricao: string; preco: number }[];
}

interface TourParams {
  start: number;
  pageSize: number;
}

interface TourResponse {
  error: Error | null;
  data: Tour[];
  count: number;
  status: number;
  statusText: string;
}

export async function FindTours({
  start,
  pageSize,
}: TourParams): Promise<TourResponse> {
  "use cache";
  const res = await supabase
    .from("tb_tours")
    .select("*", { count: "exact" })
    .range(start, start + pageSize - 1)
    .order("created_at", { ascending: false });

  return res as TourResponse;
}
