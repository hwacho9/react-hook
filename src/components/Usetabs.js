import { useState } from "react";

const Usetabs = () => {
    const content = [
        {
            tab: "Sections 1",
            info: "I'm the content of the Section 1",
        },
        {
            tab: "Sections 2",
            info: "I'm the content of the Section 2",
        },
        {
            tab: "Sections 3",
            info: "I'm the content of the Section 3",
        },
    ];

    const useTabs = (initialTab, allTabs) => {
        const [currentIndex, setCurrentIndex] = useState(initialTab);
        if (!allTabs || !Array.isArray(allTabs)) {
            return;
        }
        return {
            currentItem: allTabs[currentIndex],
            changeItem: setCurrentIndex, //state update
        };
    };

    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.info}</div>
        </div>
    );
};
export default Usetabs;
