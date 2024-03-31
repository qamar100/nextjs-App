"use client";
import * as Accordion from '@radix-ui/react-accordion';

const items = [
    {
        questions: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    } ,
    {
        questions: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    } ,
    {
        questions: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    } ,
    {
        questions: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        questions: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    } ,
    
    
    
]



export function faq() {
    return (
        <div className="flex flex-col w-full py-[48px] ">
            <div>
                <h3 className="text-[#EB2891] text-[14px] font-medium">Frequently asked questions</h3>
                <h1 className="py-4 text-2xl font-medium text-[#172026]"> Lets clarify some of your questions</h1>
                <p className="text-[#36485c] pb-[24px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
            </div>


            <div>
                <Accordion.Root
                type='single'
                defaultValue='item-1'
                collapsible
                className='flex flex-col gap-y-4'
                >
                    {items.map((item, index) => (
                        <div key={index}>

                        <Accordion.Item
                                value={'item-${index + 1}'}
                                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
                            >
                                 <Accordion.Header>
                                    <Accordion.Trigger>
                                        <p className='text-left font-medium text-[#17826]'> {item.questions}</p>  
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                    <p> { item.Answer}</p> 
                                </Accordion.Content>
                            </Accordion.Item>
                        </div>
                    
                    )) }
            </Accordion.Root>
            </div>

        </div>
    );
}