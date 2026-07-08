import { Mail, Phone } from "lucide-react";
import { supabaseAdmin } from "@/lib/supabase/admin";

export default async function AdminPage() {
  const { data: assessments } = await supabaseAdmin
    .from("assessments")
    .select(`
      id,
      contact_name,
      contact_email,
      contact_phone,
      score,
      status,
      created_at,
      organizations (
        name,
        industry
      )
    `)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            Simplify Admin
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.05em] text-slate-950">
            Assessment Leads
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            View every completed AI assessment and the organizations connected
            to them.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-violet-600/5">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-100 text-sm font-semibold text-slate-600">
              <tr>
                <th className="px-5 py-4">Company</th>
                <th className="px-5 py-4">Contact</th>
                <th className="px-5 py-4">Email</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Score</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {assessments?.map((assessment) => (
                <tr
                  key={assessment.id}
                  className="border-t border-slate-100 transition hover:bg-violet-50"
                >
                  <td className="px-5 py-4 font-bold text-slate-900">
                    {assessment.organizations?.name ?? "Unknown"}
                  </td>

                  <td className="px-5 py-4 text-slate-700">
                    {assessment.contact_name}
                  </td>

                  <td className="px-5 py-4">
                    {assessment.contact_email ? (
                      <a
                        href={`mailto:${assessment.contact_email}`}
                        className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                      >
                        <Mail size={16} />
                        {assessment.contact_email}
                      </a>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>

                  <td className="px-5 py-4">
                    {assessment.contact_phone ? (
                      <a
                        href={`tel:${assessment.contact_phone}`}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                      >
                        <Phone size={16} />
                        {assessment.contact_phone}
                      </a>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-bold text-violet-700">
                      {assessment.score}%
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                      {assessment.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {assessment.created_at
                      ? new Date(assessment.created_at).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "-"}
                  </td>
                </tr>
              ))}

              {!assessments?.length && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-12 text-center text-slate-500"
                  >
                    No assessments have been submitted yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}