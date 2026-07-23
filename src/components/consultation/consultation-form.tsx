"use client";

import { useState } from "react";
import { LuxuryButton } from "@/components/brand/luxury-button";
import { LuxuryInput, LuxurySelect, LuxuryTextarea } from "@/components/consultation/luxury-field";
import { budgetOptions, eventTypeOptions } from "@/data/consultation-options";

import type { PortfolioItem } from "@/data/portfolio-items";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

type ConsultationFormProps = {
  selectedItems?: PortfolioItem[];
};

export function ConsultationForm({ selectedItems = [] }: ConsultationFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");

  const eventTypeLabel = eventTypeOptions.find((o) => o.value === eventType)?.label ?? "";
  const budgetLabel = budgetOptions.find((o) => o.value === budget)?.label ?? "";

  const inspirationsLines =
    selectedItems.length > 0
      ? [
          `Inspirations sélectionnées :`,
          ...selectedItems.map(
            (item) =>
              `- ${item.title} : ${typeof window !== "undefined" ? window.location.origin : ""}/portfolio/${item.id}`,
          ),
        ].join("\n")
      : "";

  const message = [
    `Bonjour Reda Fawaz, je souhaite obtenir des informations.`,
    ``,
    fullName && `Nom : ${fullName}`,
    phone && `Téléphone : ${phone}`,
    email && `Email : ${email}`,
    eventTypeLabel && `Type d'événement : ${eventTypeLabel}`,
    eventDate && `Date souhaitée : ${eventDate}`,
    budgetLabel && `Budget estimé : ${budgetLabel}`,
    notes && `Notes : ${notes}`,
    inspirationsLines,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="grid gap-6 px-4 sm:gap-8 sm:px-6 md:px-12">
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <LuxuryInput
          label="01. Nom complet"
          name="fullName"
          placeholder="Aya Konan"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <LuxuryInput
          label="02. Téléphone"
          name="phone"
          placeholder="+225 07 00 00 00 00"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <LuxuryInput
        label="03. Adresse email"
        name="email"
        placeholder="aya.konan@exemple.ci"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <LuxurySelect
          label="04. Type d'événement"
          name="eventType"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="" disabled>
            Sélectionner le type
          </option>
          {eventTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </LuxurySelect>
        <LuxuryInput
          label="05. Date de l'événement"
          name="eventDate"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <LuxurySelect
        label="06. Budget estimé"
        name="budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      >
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
        placeholder="Décrivez l'atmosphère que vous souhaitez créer pour votre réception à Cocody, Abidjan..."
        rows={4}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="mt-4 text-center">
        {WHATSAPP_NUMBER ? (
          <LuxuryButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Envoyer la demande
          </LuxuryButton>
        ) : (
          <p className="text-sm text-muted-foreground">
            La demande sera bientôt transmissible directement — configuration en cours.
          </p>
        )}
      </div>
    </div>
  );
}