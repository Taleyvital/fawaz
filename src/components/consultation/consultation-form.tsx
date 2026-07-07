"use client";

import { LuxuryInput, LuxurySelect, LuxuryTextarea } from "@/components/consultation/luxury-field";
import { budgetOptions, eventTypeOptions } from "@/data/consultation-options";

export function ConsultationForm() {
  return (
    <form className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <LuxuryInput label="01. Full Name" name="fullName" placeholder="Jane Doe" />
        <LuxuryInput label="02. Phone" name="phone" placeholder="+1 (555) 000-0000" />
      </div>
      <LuxuryInput label="03. Email Address" name="email" placeholder="jane@example.com" />
      <div className="grid gap-8 md:grid-cols-2">
        <LuxurySelect label="04. Event Type" name="eventType" defaultValue="">
          <option value="" disabled>
            Select Type
          </option>
          {eventTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </LuxurySelect>
        <LuxuryInput label="05. Event Date" name="eventDate" type="date" />
      </div>
      <LuxurySelect label="06. Estimated Budget" name="budget" defaultValue="">
        <option value="" disabled>
          Select Range
        </option>
        {budgetOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </LuxurySelect>
      <LuxuryTextarea
        label="07. Additional Notes"
        name="notes"
        placeholder="Describe the atmosphere you wish to create..."
        rows={4}
      />
    </form>
  );
}
