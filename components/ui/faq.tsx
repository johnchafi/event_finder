import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can i create an Event?",
    answer:
      "Creating an event is simple with EventHub. Click the Get create menu and follow our intuitive event creation process.",
  },
  {
    question: "How can i find Events?",
    answer:
      "You can browse events through our explore page, use search filters, or check out featured events on our platform.",
  },
  {
    question: "What if i have a problem?",
    answer: "Consult our AI chat or reach out to us via email: johnchafi@gmail.com",
  },
  {
    question: "How can i create my advertizing webpage?",
    answer: "Click on you Icon and follow the steps to create your advertizing page.",
  },
  
]

export function FaqSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block px-4 py-2 rounded-full bg-[#F5A524]/10 text-primary-800 ">FAQs</div>
        <h2 className="text-2xl font-semibold">
          Frequest <span className="text-primary-800">Asked</span>
          <br />
          Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-zinc-800 bg-zinc-900/50 rounded-2xl px-6 py-2 data-[state=open]:bg-zinc-900/50"
            >
              <AccordionTrigger className="text-lg text-gray-200 hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

