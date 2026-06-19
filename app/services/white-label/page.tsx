"use client";
import ServiceLayout from "@/components/services/ServiceLayout";
import {
  SectionLabel, SectionHeading, PainGrid, Checklist,
  FAQ, ProcessSteps, OutcomeCards, TwoCol,
} from "@/components/services/ServiceComponents";

const COLOR = "#0284C7";
const BG = "#f0f9ff";


export default function WhiteLabelPage() {
  return (
    <ServiceLayout
      badge="Agency Partners"
      badgeColor={COLOR}
      badgeBg={BG}
      platformSymbol="WL"
      platformColor={COLOR}
      heroTitle="White-Label Development"
      heroHighlight="For Agencies."
      heroSub="Add a certified ecommerce engineering team to your agency — invisibly. We deliver Adobe Commerce, Magento, and Shopify work under your brand, to your clients, on your timelines. You present. We build."
      ctaText="Start a Partnership"
      secondaryCta="How It Works"
      breadcrumb="White-Label Partnerships"
    >
      {/* Problems we solve */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Agency Problems We Solve" />
          <SectionHeading sub="Every problem below is one we hear from agency partners in the first conversation. If any of these sound familiar, we should talk.">
            The situations that bring agencies to us
          </SectionHeading>
          <PainGrid color={COLOR} items={[
            { icon: "🚫", title: "Turning away profitable work", body: "A client asks for a Magento build or Shopify Plus project and you have to pass because your team doesn't have the platform depth. That revenue goes to a competitor." },
            { icon: "🎲", title: "Freelancer quality lottery", body: "You've used freelancers for overflow before. Sometimes great, often unreliable, always risky when there's a deadline or a difficult client. The inconsistency is the problem." },
            { icon: "📅", title: "Missing deadlines under pressure", body: "Your internal dev team is stretched. A project slips. The client relationship suffers. You need capacity that's actually reliable when you book it." },
            { icon: "💰", title: "Cost of full-time specialist hires", body: "A senior Adobe Commerce engineer costs £70K–£90K per year. You don't have enough specialist work to justify the hire, but you keep losing projects without one." },
            { icon: "🔍", title: "No senior technical review", body: "Your developers are capable but haven't worked at the scale or complexity the client needs. You want a senior layer that can QA the work and give you confidence before it goes live." },
            { icon: "📢", title: "Clients asking questions you can't answer", body: "A client asks about Shopify Plus Checkout Extensibility, or Adobe Commerce headless, or SAP integration. You need someone who can actually answer — not someone googling it." },
          ]} />
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <>
                <SectionLabel text="How It Works" />
                <SectionHeading sub="The model is designed to be invisible to your client. They deal with you. We work in the background and you present the output.">
                  Four steps from intro to delivery
                </SectionHeading>
                <ProcessSteps color={COLOR} steps={[
                  { num: "1", title: "Intro & NDA", body: "We sign an NDA before any client information is shared. All our partner agreements include strict confidentiality covering client names, project details, and all work produced." },
                  { num: "2", title: "Scope handover", body: "You share the client brief. We review it and come back to you — not the client — with technical questions, a scoped effort estimate, and a delivery timeline. You stay in control of the client relationship throughout." },
                  { num: "3", title: "Silent development delivery", body: "We build. All commits, files, documentation, and communications use your branding or no branding at all — our name never appears. You can white-label everything we produce." },
                  { num: "4", title: "You present & sign off", body: "We deliver to you. You review, present to the client, handle feedback, and manage the relationship. If there are revisions, you brief us. The client never knows we exist." },
                ]} />
              </>
            }
            right={
              <>
                <SectionLabel text="Operational Models" />
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>
                    Three ways to work with us
                  </h3>
                </div>
                {[
                  {
                    icon: "🏷️",
                    title: "Full White-Label",
                    body: "We build everything under your brand. All code, documentation, and deliverables carry your agency name. Invisible to your client.",
                    color: COLOR,
                  },
                  {
                    icon: "🤝",
                    title: "Technical Sub-Contractor",
                    body: "You brief us, we deliver. Your client knows a specialist partner is involved but not who. Common for larger projects where specialist credentials matter.",
                    color: "#6366F1",
                  },
                  {
                    icon: "🎓",
                    title: "Technical Consulting",
                    body: "We join your team on calls, review architecture decisions, answer hard client questions, and give your team the senior technical layer they need without a full project handoff.",
                    color: "#ec7323",
                  },
                ].map((m) => (
                  <div key={m.title} style={{
                    display: "flex", gap: 16,
                    padding: "18px 20px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: `4px solid ${m.color}`,
                    borderRadius: 10, marginBottom: 12,
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = "translateX(0)"}
                  >
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{m.icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{m.title}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.65, color: "#64748b" }}>{m.body}</div>
                    </div>
                  </div>
                ))}
              </>
            }
          />
        </div>
      </section>

      {/* What you get */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <>
                <SectionLabel text="What's Included" />
                <SectionHeading sub="Everything your agency needs to deliver ecommerce projects you couldn't otherwise take on.">
                  Full white-label capability
                </SectionHeading>
                <Checklist color={COLOR} items={[
                  "NDA-first engagement on every project",
                  "White-label code, docs, and deliverables",
                  "Adobe Commerce, Magento 2, Shopify, Shopify Plus",
                  "ERP and CRM integration work",
                  "Senior-only engineer allocation — no juniors",
                  "Your SLA commitments honoured from our side",
                  "Pre-sales technical support (scoping, estimation)",
                  "Client pitch support (technical slides, answers)",
                  "Post-launch support handover to your team",
                  "Fixed-price and retainer models available",
                ]} />
              </>
            }
            right={
              <div style={{ background: "#0f172a", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 11, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
                  Active partner projects
                </div>
                {[
                  { agency: "Digital Agency, London", project: "Adobe Commerce Rebuild", platform: "Ac", color: "#FF0000", status: "In Sprint 3", progress: 72 },
                  { agency: "Creative Studio, Manchester", project: "Shopify Plus Launch", platform: "Sh", color: "#96BF48", status: "UAT Phase", progress: 88 },
                  { agency: "Marketing Agency, Leeds", project: "Magento → Shopify", platform: "→", color: "#F46F25", status: "Data Migration", progress: 55 },
                  { agency: "Web Agency, Birmingham", project: "SAP Integration", platform: "⚙", color: "#6366F1", status: "Live", progress: 100 },
                ].map((p) => (
                  <div key={p.agency} style={{ marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 6,
                        background: p.color,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, fontWeight: 800, color: "#fff", flexShrink: 0,
                      }}>{p.platform}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.project}</div>
                        <div style={{ fontSize: 10, color: "#64748b" }}>{p.agency}</div>
                      </div>
                      <span style={{
                        fontSize: 9, fontWeight: 600, color: p.color,
                        background: p.color + "20", padding: "2px 8px", borderRadius: 100, whiteSpace: "nowrap",
                      }}>{p.status}</span>
                    </div>
                    <div style={{ height: 4, background: "#1e293b", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${p.progress}%`, background: p.color, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
                <div style={{ paddingTop: 16, borderTop: "1px solid #1e293b", fontSize: 11, color: "#475569", textAlign: "center" }}>
                  All client names anonymised · NDA protected
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel text="Partnership Results" />
          <SectionHeading sub="What agencies gain when they add our team to their roster.">
            Numbers from our agency partnerships
          </SectionHeading>
          <OutcomeCards color={COLOR} items={[
            { metric: "25+", label: "Agency partners", desc: "Active white-label and sub-contractor relationships across the UK" },
            { metric: "£0", label: "Specialist hire cost", desc: "Add Adobe Commerce and Shopify Plus capability without a full-time hire" },
            { metric: "100%", label: "NDA compliance", desc: "Every project protected. No exceptions, no grey areas." },
            { metric: "48h", label: "Scoping turnaround", desc: "Technical scope and estimate back to you within 48 hours of brief" },
          ]} />
        </div>
      </section>

      {/* Partner enquiry box */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionLabel text="Start a Partnership" />
            <SectionHeading sub="Tell us about your agency and the type of work you'd like to refer or sub-contract. We'll come back to you within 24 hours.">
              Partnership enquiry
            </SectionHeading>
          </div>
          <div style={{
            background: "#fff", border: "1.5px solid #e2e8f0",
            borderRadius: 16, padding: 36,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-grid">
              {[
                { label: "Agency Name", type: "text", placeholder: "Your agency name" },
                { label: "Your Name", type: "text", placeholder: "Your full name" },
                { label: "Email Address", type: "email", placeholder: "you@agency.com" },
                { label: "Website", type: "url", placeholder: "https://youragency.com" },
              ].map((f) => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#0f172a", marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{
                    width: "100%", padding: "11px 14px",
                    border: "1.5px solid #e2e8f0", borderRadius: 8,
                    fontSize: 13, color: "#0f172a", background: "#f8fafc",
                    outline: "none", transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = COLOR)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")} />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#0f172a", marginBottom: 6 }}>
                What type of work do you want to refer?
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Adobe Commerce / Magento", "Shopify / Shopify Plus", "Platform Migration", "Systems Integration", "Technical Audits"].map((opt) => (
                  <label key={opt} style={{
                    display: "flex", alignItems: "center", gap: 6,
                    padding: "8px 14px",
                    background: "#f8fafc", border: "1.5px solid #e2e8f0",
                    borderRadius: 8, cursor: "pointer", fontSize: 13,
                    color: "#475569", fontWeight: 500,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = COLOR;
                    (e.currentTarget as HTMLElement).style.color = COLOR;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    (e.currentTarget as HTMLElement).style.color = "#475569";
                  }}>
                    <input type="checkbox" style={{ accentColor: COLOR }} /> {opt}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#0f172a", marginBottom: 6 }}>
                Monthly capacity needed (rough estimate)
              </label>
              <select style={{
                width: "100%", padding: "11px 14px",
                border: "1.5px solid #e2e8f0", borderRadius: 8,
                fontSize: 13, color: "#475569", background: "#f8fafc",
                outline: "none",
              }}>
                <option>1–2 projects per month</option>
                <option>3–5 projects per month</option>
                <option>5–10 projects per month</option>
                <option>10+ projects per month</option>
                <option>Ad-hoc overflow only</option>
              </select>
            </div>
            <button style={{
              width: "100%", padding: "14px 0",
              background: COLOR, color: "#fff",
              border: "none", borderRadius: 9,
              fontSize: 15, fontWeight: 600, cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0369a1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = COLOR;
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}>
              Submit Partnership Enquiry →
            </button>
            <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", marginTop: 12 }}>
              We respond within 24 hours · NDA sent before any project details shared
            </p>
          </div>
          <style jsx>{`@media(max-width:600px){.form-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionLabel text="FAQ" />
            <SectionHeading>Partnership questions answered</SectionHeading>
          </div>
          <FAQ items={[
            { q: "Will you ever contact our clients directly?", a: "Never, without your explicit written permission. Every engagement is structured so all communication flows through you. We don't know your client's name unless you choose to share it, and we never reach out to them independently." },
            { q: "Can we use your team for pre-sales technical support?", a: "Yes — this is one of the most popular ways agencies use us. We can review a brief, help you scope it accurately, write technical sections of proposals, and answer hard platform questions before you're in the room with the client." },
            { q: "What platforms does your team cover?", a: "Adobe Commerce (Magento 2), Shopify, Shopify Plus, and the full integration ecosystem around them: SAP, Dynamics 365, Salesforce, HubSpot, Algolia, Klaviyo, and more. We don't do WooCommerce, Wix, or general web development." },
            { q: "How do you handle IP and code ownership?", a: "All code produced under a white-label agreement belongs to your agency and your client. Our NDA covers this explicitly. We retain no rights to use, repurpose, or reference the work we do for your clients." },
            { q: "What's the minimum project size you'll take as a partner referral?", a: "We don't have a formal minimum, but projects under £2,000 are generally not economical to run through a white-label structure. The sweet spot is £5,000+ projects or ongoing retainer referrals." },
          ]} />
        </div>
      </section>
    </ServiceLayout>
  );
}
