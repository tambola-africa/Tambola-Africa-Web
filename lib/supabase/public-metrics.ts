import { createSupabaseServerClient } from "@/lib/supabase/server";

export type PublicMetrics = {
  participants_count: number;
  projects_helped_count: number;
  amount_redistributed: number;
  currency: string;
};

export async function getPublicMetricsCurrent(): Promise<PublicMetrics | null> {
  const supabase = createSupabaseServerClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("public_metrics_current")
    .select("participants_count, projects_helped_count, amount_redistributed, currency")
    .single();

  if (error || !data) return null;

  return {
    participants_count: Number(data.participants_count ?? 0),
    projects_helped_count: Number(data.projects_helped_count ?? 0),
    amount_redistributed: Number(data.amount_redistributed ?? 0),
    currency: String(data.currency ?? "XAF"),
  };
}
