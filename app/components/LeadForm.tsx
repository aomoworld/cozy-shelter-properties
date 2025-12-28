"use client";

export default function LeadForm() {
  return (
    <section
      id="form"
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <div className="rounded-2xl bg-white border border-zinc-200 shadow-sm p-10">
        <h2 className="text-3xl font-semibold text-zinc-900 mb-2">
          Get a Cash Offer
        </h2>

        <p className="text-zinc-500 mb-8">
          Tell us a little about the property and we’ll reach out quickly.
        </p>

        <form
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          action="https://formspree.io/f/mlgegbee"
          method="POST"
        >
          {/* hidden metadata */}
          <input type="hidden" name="source" value="Website Lead Form" />
          <input type="hidden" name="template" value="REI Onepager" />

          {/* Name */}
          <input
            name="name"
            required
            placeholder="Name"
            className="h-12 rounded-md border border-zinc-300 bg-white px-4 text-zinc-900 placeholder:text-zinc-500 outline-none shadow-sm focus:border-red-600 focus:ring-4 focus:ring-red-600/15"
          />

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            required
            placeholder="Phone"
            className="h-12 rounded-md border border-zinc-300 bg-white px-4 text-zinc-900 placeholder:text-zinc-500 outline-none shadow-sm focus:border-red-600 focus:ring-4 focus:ring-red-600/15"
          />

          {/* Address */}
          <input
            name="address"
            required
            placeholder="Property Address"
            className="md:col-span-2 h-12 rounded-md border border-zinc-300 bg-white px-4 text-zinc-900 placeholder:text-zinc-500 outline-none shadow-sm focus:border-red-600 focus:ring-4 focus:ring-red-600/15"
          />

          {/* Details */}
          <textarea
            name="details"
            rows={5}
            placeholder="Anything we should know? (repairs, timeline, tenants, etc.)"
            className="md:col-span-2 rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-500 outline-none shadow-sm focus:border-red-600 focus:ring-4 focus:ring-red-600/15"
          />

          {/* Submit */}
          <button
            type="submit"
            className="md:col-span-2 h-12 rounded-md bg-[#0EA5A4] text-white font-semibold shadow-sm hover:bg-[#0B8C8A] active:bg-[#08706F] transition"
          >
            Submit
          </button>

          {/* Legal */}
          <p className="md:col-span-2 text-sm text-zinc-500">
            By submitting, you agree we may contact you by phone or text.
            Message and data rates may apply.
          </p>
        </form>
      </div>
    </section>
  );
}
