import React, { useState } from 'react';
import '../styles/Tabs.css'
import { useQuery } from '@tanstack/react-query';
import fetchTabContent from '../api/fetchTabContent';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['tabContent', activeTab],
        queryFn: fetchTabContent,
        staleTime: 1000 * 60 * 10, // cache data for 5 minutes
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className="container">
            <div className="tab-header">
                {[1, 2, 3, 4].map((tab) => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        Tab {tab}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <h2>Title {activeTab}</h2>
                <div className="justified" dangerouslySetInnerHTML={{ __html: data }} />
            </div>
        </div>
    );
};

export default Tabs;
