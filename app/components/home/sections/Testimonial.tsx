import React from "react";
import Image from "next/image";
import Antoine from "../../../images/Antoine-MUTSINZI.png";

const Testimonial = () => {
  return (
    <div className="flex justify-center">
      <section className="de md:og w-[80%]" id="testimonials" x-data="{ testimonials }">
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
                Amiso has completely revolutionized the way we manage projects
      
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Sarah Johnson
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    CEO, XYZ Innovations
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                Amiso&apos;s automation tools have simplified our workflow and
                reduced errors. We can focus on strategic tasks, knowing that
                routine processes are being handled efficiently.
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
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
                Amiso has been a game-changer for our project management. The
                smart automation and customizable user roles have made our
                workflow incredibly smooth. It&apos;s a must-have tool for any
                growing business.
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Emily Rodriguez
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Project Manager, ABC Tech Solutions
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
                Amiso has completely revolutionized the way we manage projects
                and collaborate as a team. The automation features alone saved
                us countless hours, and the real-time analytics give us insights
                we never had before.
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Sarah Johnson
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    CEO, XYZ Innovations
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                Amiso&apos;s automation tools have simplified our workflow and
                reduced errors. We can focus on strategic tasks, knowing that
                routine processes are being handled efficiently.
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
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
                Amiso has been a game-changer for our project management. The
                smart automation and customizable user roles have made our
                workflow incredibly smooth. It&apos;s a must-have tool for any
                growing business.
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Emily Rodriguez
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Project Manager, ABC Tech Solutions
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
                Amiso has completely revolutionized the way we manage projects
                and collaborate as a team. The automation features alone saved
                us countless hours, and the real-time analytics give us insights
                we never had before.
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Sarah Johnson
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    CEO, XYZ Innovations
                  </p>
                </div>
              </div>
            </div>
            <div className="pc uc _c dd pd df">
              <p className="we" x-text="testimonial.text">
                Amiso&apos;s automation tools have simplified our workflow and
                reduced errors. We can focus on strategic tasks, knowing that
                routine processes are being handled efficiently.
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
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
                Amiso has been a game-changer for our project management. The
                smart automation and customizable user roles have made our
                workflow incredibly smooth. It&apos;s a must-have tool for any
                growing business.
              </p>

              <div className="t w ub _b">
                <Image
                  src={Antoine}
                  alt="Antoine image"
                  className="aa oa qc df ff jf"
                />
                <div className="ec.5">
                  <p className="oe" x-text="testimonial.author.name">
                    Emily Rodriguez
                  </p>
                  <p className="le we" x-text="testimonial.author.role">
                    Project Manager, ABC Tech Solutions
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
