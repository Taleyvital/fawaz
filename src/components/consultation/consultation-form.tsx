"use client";

import { LuxuryInput, LuxurySelect, LuxuryTextarea } from "@/components/consultation/luxury-field";
import { budgetOptions, eventTypeOptions } from "@/data/consultation-options";

export function ConsultationForm() {
  return (
    <form className="grid gap-6 px-4 sm:gap-8 sm:px-6 md:px-12">
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <LuxuryInput label="01. Nom complet" name="fullName" placeholder="Jean Dupont" />
        <LuxuryInput label="02. Téléphone" name="phone" placeholder="+33 6 00 00 00 00" />
      </div>
      <LuxuryInput label="03. Adresse email" name="email" placeholder="jean@exemple.com" />
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <LuxurySelect label="04. Type d'événement" name="eventType" defaultValue="">
          <option value="" disabled>
            Sélectionner le type
          </option>
          {eventTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </LuxurySelect>
        <LuxuryInput label="05. Date de l'événement" name="eventDate" type="date" />
      </div>
      <LuxurySelect label="06. Budget estimé" name="budget" defaultValue="">
        <option value="" disabled>
          Sélectionner la fourchette
        </option>
        {budgetOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </LuxurySelect>
      <LuxuryTextarea
        label="07. Notes supplémentaires"
        name="notes"
        placeholder="Décrivez l'atmosphère que vous souhaitez créer..."
        rows={4}
      />
    </form>
  );
}
