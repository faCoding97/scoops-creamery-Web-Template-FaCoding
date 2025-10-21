"use client";
import * as React from "react";
export default function ContactForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className="card p-6" onSubmit={onSubmit} aria-describedby="form-note">
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
          />
        </div>
        <button className="btn-pill">Send (demo)</button>
      </div>
      <p id="form-note" className="sr-only">
        Demo only; no messages are sent.
      </p>
    </form>
  );
}
