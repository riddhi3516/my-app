"use client";
import React from "react";

const Modal = ({ setIsOpen, isOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`${
        isOpen ? "block" : "hidden"
      } bg-black/30 w-full h-screen fixed top-0 left-0 z-50 `}
    >
      <div className="bg-white p-6 max-w-[500px] w-full h-full">
        <h1>dsfsdf</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          deserunt, illo officiis recusandae est repellat voluptatem nihil
          architecto veniam optio vero facilis doloribus culpa! Itaque quod
          facilis similique, a eaque earum quo reiciendis vitae dolore animi
          quasi exercitationem, accusantium impedit, beatae autem! Nam libero
          vitae nesciunt qui? Neque corrupti laboriosam iure aut, impedit
          assumenda quaerat ea? Alias omnis, officia fugit tempora dicta sit
          eveniet voluptatem consequuntur inventore deserunt impedit quae
          accusantium. Qui inventore vel incidunt perferendis sit ipsam
          reprehenderit, modi sequi ad amet dolorum laboriosam soluta, error
          distinctio iste eveniet blanditiis rerum. Animi, accusamus eius
          officia delectus ad cumque adipisci aspernatur omnis amet similique
          totam tenetur facilis accusantium sequi, aperiam deserunt aliquid?
          Itaque voluptatem, non libero quisquam quae omnis nulla tempora
          blanditiis obcaecati eum. Porro eos ipsa dolorem, doloremque neque
          nemo possimus cumque aut totam reiciendis! Odio hic, cumque quas
          repudiandae, nemo ipsa amet quae beatae vero unde excepturi alias
          fugit nisi numquam! Harum laborum laboriosam corrupti commodi odio
          perspiciatis ratione aut dignissimos veritatis suscipit itaque placeat
          incidunt odit, numquam asperiores possimus consequuntur beatae illo ad
          vitae facere. Quaerat soluta quis illo adipisci, harum, accusamus
          voluptatum similique dignissimos, voluptas obcaecati odio neque ipsam
          deleniti qui amet? Necessitatibus, deleniti architecto! Dignissimos?
        </p>
      </div>
    </div>
  );
};

export default Modal;
