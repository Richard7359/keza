import React from 'react'
import Image from 'next/image'
import bootcamp4 from "../../../images/Consultancy@2x.webp";

const page = () => {
  return (
    <div>
        <main>
    <section className="container mx-auto">
      <article className="grid md:grid-cols-2 md:gap-x-14 my-10 px-3 md:px-0">
        <div>
          <Image src={bootcamp4} alt="" className="rounded-md sticky top-0 overflow-hidden" />
        </div>
        <div className="text-paragraph">
          <h3 className="text-darkGrey font-bold text-2xl mb-4 mt-4 md:mt-0">
            Consultancy
          </h3>
          <p>
            KEFL is a specialized consultancy firm dedicated to supporting
            schools and non-governmental organizations (NGOs) in their pursuit
            of educational excellence and community development. With a wealth
            of expertise and experience, KEFL offers tailored solutions to
            enhance the effectiveness and impact of educational institutions
            and nonprofit organizations.
          </p>
          <br />
          <p>
            Our services encompass a wide range of areas, including curriculum
            development, teacher training, strategic planning, and resource
            mobilization. We work closely with schools to design innovative
            teaching approaches and programs that promote student engagement
            and achievement. For NGOs, we offer guidance on program design,
            and impact assessment to ensure their initiatives make a
            meaningful difference in the communities they serve.
          </p>
          <br />
          <p>
            At KEFL, we are committed to fostering sustainable growth and
            positive change in the education sector and the wider community.
            Our mission is to empower schools and NGOs with the knowledge,
            tools, and strategies needed to create lasting, positive impacts
            on the lives of individuals and the betterment of society as a
            whole
          </p>
          <p className="mt-10">
            For more details
            <a href="mailto:?to=keza.info@gmail.com&subject=Subject Here&body=Body text here"
              className="font-bold text-burgundy hover:underline hover:underline-offset-4">Contact Us</a>
          </p>
        </div>
      </article>
    </section>
  </main>
    </div>
  )
}

export default page
