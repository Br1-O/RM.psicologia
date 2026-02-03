import MainCard from "@/components/main/mainCard";
import TextCentralContainer from "@/components/container/TextCentralContainer";
import React from "react";
import TextSeparator from "@/components/styleWrap/TextSeparator";
import {Briefcase, StarIcon} from "lucide-react";

export const metadata = {
  title: "RM · Psicología Clinica",
  description: "Acompañamiento psicológico profesional. Terapia online"
}

export default function Home() {
  return (
      <main className="w-full flex flex-col justify-center items-center">

          <section className="w-full flex flex-col justify-center items-center lg:h-dvh">
              <MainCard/>
              <TextCentralContainer showVines={true} href={'/sobre-mi'}>
                  <p className="text-base md:text-lg leading-relaxed">
                      Mi trabajo se centra en acompañar a personas adultas que atraviesan
                      situaciones difíciles como estrés, ansiedad, angustia, baja autoestima
                      o duelo, problemas interpersonales y momentos de crisis y cambio.
                  </p>
              </TextCentralContainer>
          </section>

          <TextSeparator Icon={Briefcase} title={'Mis especialidades abarcan'} bgColor={'primary'} />

          <section className="w-full flex flex-col justify-center items-center h-dvh">

          </section>

          <TextSeparator Icon={StarIcon} title={'Opiniones de pacientes'} bgColor={'primary'} />

          <section className="w-full flex flex-col justify-center items-center h-dvh">

          </section>

      </main>
  );
}