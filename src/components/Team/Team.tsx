import React from "react";

const Team = () => {
  return (
    <div className=" px-3 mx-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ld:min-h-[40rem] md:min-h-[30rem] relative min-h-[15rem] max-h-max">
      <div className="pointer-events-none">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700 uppercase text-[8rem] md:text-[10rem] lg:text-[20rem] font-extrabold opacity-15 text-nowrap md:rotate-0 rotate-90">
          OUR TEAM
        </p>
      </div>

      <div className=" container mx-auto flex flex-col justify-center items-center  min-h-96 py-12">
        <div className=" flex flex-col justify-center items-center text-white">
          <h2 className="md:text-4xl text-3xl uppercase font-bold mb-6">
            Our Team
          </h2>
          <h3 className="text-xl mb-6 primary_text font-bold">
            Food First Staff
          </h3>
          <p className="max-w-screen-xl">
            Food First prides itself on assembling a dedicated and diverse team
            of professionals who are passionate about creating a positive impact
            in the fight for the food sovereignty. Our staff members are a
            vibrant tapestry of talents, experiences, and expertise, united by a
            shared commitment. From marketing wizards to logistics maestros, our
            business-minded professionals work tirelessly to ensure seamless
            operations for the organization. View our Staff Members.
          </p>
          <section className="grid md:grid-cols-3 gap-5  grid-cols-1 mt-12 max-w-screen-xl">
            <div className="*:leading-7">
              <h1 className="text-xl mb-4 primary_text">BOARD OF DIRECTORS</h1>
              <p>
                Food First’s Board of Directors is composed primarily of
                community-based activists who ensure that the organization’s
                work remains focused on the issues that matter most to people’s
                daily lives. View
              </p>
            </div>
            <div className="*:leading-7">
              <h1 className="text-xl mb-4 primary_text">FELLOWS</h1>
              <p>
                A talented group of early career thought leaders dedicating
                their careers to supporting grassroots struggles and advancing
                the global movement for food sovereignty, meet the
              </p>
            </div>
            <div className="*:leading-7">
              <h1 className="text-xl mb-4 primary_text">CONSULTANTS</h1>
              <p>
                Our consultants are talented and highly qualified professionals
                that support Food First with the coordination of fundraising,
                social media, and administrative duties. V
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Team;
