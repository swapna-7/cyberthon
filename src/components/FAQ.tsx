import React, { useState } from 'react';

const FAQ = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const faqs = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            question: "What is Tailwind CSS?",
            answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development."
        },
        {
            question: "What is a hackathon?",
            answer: "A hackathon is an event where programmers, designers, and others collaborate intensively on software projects."
        },
        {
            question: "How long do hackathons typically last?",
            answer: "Hackathons typically last between 24 to 48 hours."
        },
        {
            question: "What should I bring to a hackathon?",
            answer: "You should bring your laptop, chargers, and any other development tools you might need."
        },
        {
            question: "Do I need to have a team to participate in a hackathon?",
            answer: "No, you can participate individually or form a team with other participants at the event."
        }
    ];

    const toggleQuestion = (index) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    return (
        <div className="container text-white bg-cover bg-center" style={{ backgroundImage: `url('faq-bg.svg')` }}>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full">
                    <div className='ps-16'>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <h2 className="text-xl font-bold cursor-pointer" onClick={() => toggleQuestion(index)}>
                                    {faq.question}
                                </h2>
                                {selectedQuestion === index && <p>{faq.answer}</p>}
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block ">
                    <h2 className="text-9xl font-bold">FAQ</h2>
                </div>
            </div>
        </div>
    );
};

export default FAQ;