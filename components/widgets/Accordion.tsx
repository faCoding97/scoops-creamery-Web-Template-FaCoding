type Props = { question: string; answer: string };
export default function Accordion({ question, answer }: Props) {
  return (
    <details className="group p-4 bg-white/70">
      <summary className="cursor-pointer font-medium list-none flex items-center justify-between">
        {question}
        <span className="ml-4 text-rose-700 group-open:rotate-180 transition-transform">⌄</span>
      </summary>
      <div className="mt-2 text-gray-700">{answer}</div>
    </details>
  );
}
