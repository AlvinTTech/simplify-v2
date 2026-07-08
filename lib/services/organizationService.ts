import { supabaseAdmin } from "@/lib/supabase/admin";

export async function findOrCreateOrganization({
  name,
  industry,
  employees,
}: {
  name: string;
  industry?: string | string[];
  employees?: string | string[];
}) {
  const cleanName = name.trim();

  const { data: existingOrganization } = await supabaseAdmin
    .from("organizations")
    .select("*")
    .ilike("name", cleanName)
    .maybeSingle();

  if (existingOrganization) {
    return existingOrganization;
  }

  const { data: organization, error } = await supabaseAdmin
    .from("organizations")
    .insert({
      name: cleanName,
      industry: Array.isArray(industry) ? industry.join(", ") : industry || null,
      employees: Array.isArray(employees)
        ? employees.join(", ")
        : employees || null,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return organization;
}