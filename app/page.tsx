import MainCard from "@/components/main/mainCard";
import TextCentralContainer from "@/components/styleWrap/TextCentralContainer";
import React from "react";

export const metadata = {
  title: "RM · Psicología Clinica",
  description: "Acompañamiento psicológico profesional. Terapia online"
}


export default function Home() {
  return (
      <main className="w-full flex flex-col justify-center px-4 md:px-10">
            <MainCard/>
            <TextCentralContainer showVines={true} href={'/sobre-mi'}>
              <p className="text-base md:text-lg leading-relaxed">
                  Mi trabajo se centra en acompañar a personas adultas que atraviesan
                  situaciones difíciles como estrés, ansiedad, angustia, baja autoestima
                  o duelo, problemas interpersonales y momentos de crisis y cambio.
              </p>
            </TextCentralContainer>
      </main>
  );
}