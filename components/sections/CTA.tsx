import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import MapEmbed from "../widgets/MapEmbed.client";
import QrCode from "../widgets/QrCode.client";

type Contact = { phone: string; whatsapp?: string; email: string; address: string; mapQuery: string; mapEmbedSrc: string };

export default function CTA({ title, id, contact }: { title: string; id: string; contact: Contact }) {
  return (
    <>
      <SectionTitle title={title} id={id} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-gray-700">Call, WhatsApp or email us with your order. For party tubs, please order 24 hours in advance.</p>
          <ul className="space-y-1 text-gray-800">
            <li><strong>Phone:</strong> <a className="underline" href={`tel:${contact.phone}`}>{contact.phone}</a></li>
            {contact.whatsapp ? <li><strong>WhatsApp:</strong> <a className="underline" href={`https://wa.me/${contact.whatsapp.replace(/\D/g,'')}`} target="_blank">Chat on WhatsApp</a></li> : null}
            <li><strong>Email:</strong> <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><strong>Address:</strong> {contact.address}</li>
          </ul>
          <div className="flex items-center gap-3 pt-2">
            <a href="/menu"><Button>Browse full menu</Button></a>
            <div className="ml-2">
              <p className="text-xs text-gray-600 mb-1">Scan for menu</p>
              <QrCode value="/menu" size={96} />
            </div>
          </div>
        </div>
        <MapEmbed embedSrc={contact.mapEmbedSrc} query={contact.mapQuery} title="Scoops Creamery Location" className="" />
      </div>
    </>
  );
}
