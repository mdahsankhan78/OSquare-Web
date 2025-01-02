import React, { useState } from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react';

const ProductsTabs = ({ tabsData }) => {
    const [id, setId] = useState();

    const handleTabChange = (id) => {
        setId(id);
    }

    const displayApps = tabsData
        .flatMap((tab) => tab.apps) // Flatten the apps array for easier lookup
        .find((app) => app.id === id) || {};

    return (
        <div className="shadow-lg rounded-lg p-4">
            <Tabs defaultValue="default" className='grid grid-cols-2'>
                <TabsList className="bg-transparent overflow-y-auto">
                    {tabsData.map((tab, index) => (
                        <React.Fragment key={index}>
                            {tab.apps.map((app, appIndex) => (
                                <div key={appIndex}>
                                    <TabsTrigger
                                        value={app.id}
                                        onClick={() => handleTabChange(app.id)}
                                        className='flex flex-col gap-y-2'
                                    >
                                        <img
                                            className="h-20"
                                            src={app.icon}
                                            alt={app.name || "App Image"}
                                        />
                                        <h3 className="text-xl xl:text-2xl font-semibold text-gray-900 mb-2">{app.name}</h3>

                                    </TabsTrigger>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </TabsList>

                <div className=''>
                    {id && displayApps ? (
                        <TabsContent value={id} className='sticky top-0 z-10 flex flex-col justify-center min-h-[80vh]'>
                            <h3 className="text-xl md:text-3xl xl:text-4xl font-semibold text-gray-900 mb-2">{displayApps.name}</h3>
                            <p className="text-gray-600">{displayApps.description}</p>
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-semibold text-[#0F1B4C] hover:underline group"
                            >
                                Learn more
                                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                        </TabsContent>
                    ) :
                        <TabsContent value='default' className='sticky top-0 z-10 flex flex-col justify-center min-h-[80vh]'>
                            <h3 className="text-xl md:text-3xl xl:text-4xl font-semibold text-gray-900 mb-2">Lorem ipsum dolor sit amet.</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ab earum nemo accusantium cum dolor vero, in ad praesentium perspiciatis.</p>
                        </TabsContent>
                    }
                </div>
            </Tabs>
        </div>
    )
}

export default ProductsTabs
