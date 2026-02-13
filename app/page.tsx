import MainCard from "@/components/main/mainCard";
import HTextCentralContainer from "@/components/container/HTextCentralContainer";
import VTextCentralContainer from "@/components/container/VTextCentralContainer";
import React from "react";
import TextSeparator from "@/components/styleWrap/TextSeparator";
import {Briefcase, StarIcon} from "lucide-react";
import TestimonialCard from "@/components/main/testimonialCard";
import {testimonials} from "@/public/data/es/testimonials";

export const metadata = {
  title: "RM · Psicología Clinica",
  description: "Acompañamiento psicológico profesional. Terapia online"
}

export default function Home() {
  return (
      <main className="w-full flex flex-col justify-center items-center">

          <section className="w-full flex flex-col justify-center items-center">
              <MainCard/>
              <HTextCentralContainer
                  decorationImg={'/vines-small2.png'}
                  showDecoration={true}
                  decorationDirection={"horizontal"}
                  href={'/sobre-mi'}>
                  <p className="text-base md:text-lg leading-relaxed">
                      Mi trabajo se centra en acompañar a personas adultas que atraviesan
                      situaciones difíciles como estrés, ansiedad, angustia, baja autoestima
                      o duelo, problemas interpersonales y momentos de crisis y cambio.
                  </p>
              </HTextCentralContainer>
          </section>

          <TextSeparator Icon={Briefcase} title={'Mis especialidades abarcan'} bgColor={'primary'} />

          <section className="w-full flex flex-col justify-center items-center">

          </section>

          <TextSeparator Icon={StarIcon} title={'Opiniones de pacientes'} bgColor={'primary'} />

          <section className="w-auto grid grid-cols-1 gap-x-8 gap-y-14 p-8
          sm:gap-y-8
          md:grid-cols-2 md:gap-y-18
          lg:grid-cols-3 lg:gap-x-8
          xl:grid-cols-4 xl:gap-y-18
          justify-center items-center">

              {testimonials.map((testimonial, i) => (
                  <VTextCentralContainer key={i}>
                      <TestimonialCard
                          name={testimonial.name}
                          punctuation={testimonial.punctuation}
                          opinion={testimonial.opinion}
                          href={testimonial.href}
                          date={testimonial.date}
                      />
                  </VTextCentralContainer>
              ))}

          </section>

      </main>
  );
}