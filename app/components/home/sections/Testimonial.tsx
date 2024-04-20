import React from "react";
import Image from "next/image";
import avatar1 from "../../../images/avatar1.png";
import avatar2 from "../../../images/avatar2.png";
import avatar3 from "../../../images/avatar3.png";
import avatar4 from "../../../images/avatar4.png";
import avatar5 from "../../../images/avatar5.png";
import avatar6 from "../../../images/avatar6.png";
import avatar7 from "../../../images/avatar7.png";
import avatar8 from "../../../images/avatar8.png";
import avatar9 from "../../../images/avatar9.png";

const Testimonial = () => {
  return (
    <div className="flex justify-center">
      <section
        className="de md:og w-[80%]"
        id="testimonials"
        x-data="{ testimonials }"
      >
        <div className="gc sm:ge">
          <span className="x sc uc yc bd qd.5 vd.5 ne pe se df">
            Testimonials
          </span>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            This is why parents love us
          </h2>
        </div>
        <div className="f o y qb xb lc md:gg md:ig[48rem] md:jg lg:qg">
          <template x-for="(column, columnIndex) in testimonials:key=columnIndex">
            <div className="w rb dc">
              <template x-for="(testimonial, testimonialIndex) in column:key='testimonial-' + testimonialIndex">
                <div className="pc uc _c dd pd df">
                  <p className="we" x-text="testimonial.text"></p>

                  <div className="t w ub _b">
                    <div className="ec.5">
                      <p className="oe" x-text="testimonial.author.name"></p>
                      <p className="le we" x-text="testimonial.author.role"></p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </template>
          <div className="w rb dc">
            <template x-for="(testimonial, testimonialIndex) in column:key='testimonial-' + testimonialIndex">
              <div className="pc uc _c dd pd df">
                <p className="we" x-text="testimonial.text"></p>

                <div className="t w ub _b">
                  <div className="ec.5">
                    <p className="oe" x-text="testimonial.author.name"></p>
                    <p className="le we" x-text="testimonial.author.role"></p>
                  </div>
                </div>
              </div>
            </template>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                Choosing KEZA for my child&apos;s robotics education was the
                best decision I made. Their personalized approach and expert
                guidance have helped my child thrive and develop essential
                skills for the future.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar1}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Sarah Johnson
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Lawyer
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                KEZA exceeded our expectations! The engaging curriculum and
                supportive instructors have ignited a passion for robotics in
                our child.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar2}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Jessica White
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Operations Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                I&apos;m incredibly impressed with the level of professionalism
                and care that KEZA provides. My child looks forward to every
                session, and I can see the confidence and enthusiasm growing
                with each lesson.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar3}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Emily Rodriguez
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Project Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w rb dc">
            <template x-for="(testimonial, testimonialIndex) in column:key='testimonial-' + testimonialIndex">
              <div className="pc uc _c dd pd df">
                <p className="we" x-text="testimonial.text"></p>

                <div className="t w ub _b">
                  <div className="ec.5">
                    <p className="oe" x-text="testimonial.author.name"></p>
                    <p className="le we" x-text="testimonial.author.role"></p>
                  </div>
                </div>
              </div>
            </template>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                As a parent, I appreciate KEZA&apos;s commitment to safety and
                learning. Their attention to detail and supportive environment
                give me peace of mind knowing my child is in good hands.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar4}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Sarah Johnson
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                KEZA has transformed my child&apos;s perspective on learning.
                The interactive classes and hands-on projects have sparked a
                curiosity and creativity that extends beyond the classroom.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar5}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Jessica White
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Operations Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                I&apos;m amazed at the progress my child has made since joining
                KEZA. The innovative curriculum and dedicated instructors have
                made learning robotics and programming both fun and rewarding.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar6}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Emily Rodriguez
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Nurse
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w rb dc">
            <template x-for="(testimonial, testimonialIndex) in column:key='testimonial-' + testimonialIndex">
              <div className="pc uc _c dd pd df">
                <p className="we" x-text="testimonial.text"></p>

                <div className="t w ub _b">
                  <div className="ec.5">
                    <p className="oe" x-text="testimonial.author.name"></p>
                    <p className="le we" x-text="testimonial.author.role"></p>
                  </div>
                </div>
              </div>
            </template>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
              KEZA&apos;s commitment to safety and learning gives me peace of mind.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar7}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Sarah Johnson
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Managing Director
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                KEZA has instilled a love for learning in my child that I never
                thought possible. The engaging lessons and encouragement from
                instructors have made learning robotics and programming a
                highlight of our week.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar8}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Jessica White
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Chef
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                I&apos;m grateful for the positive impact KEZA has had on my
                child&apos;s education. Their emphasis on problem-solving and
                critical thinking has equipped my child with invaluable skills
                for the future.
              </p>

              <div className="t w ub _b">
                <Image
                  src={avatar9}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Emily Rodriguez
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Project Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="c e h i ia hd id"></div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
