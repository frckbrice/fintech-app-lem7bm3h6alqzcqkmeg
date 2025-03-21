import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MARGIN } from "./config";
import Tile from "./tile";
import SortableList from "./sortable-list";

const tiles = [
    {
        id: "spent",
    },
    {
        id: "cashback",
    },
    {
        id: "recent",
    },
    {
        id: "cards",
    }
];

const WidgetList = () => {
    return (
        <SafeAreaView
            style={{ paddingHorizontal: MARGIN, marginBottom: 80 }}
        >
            <SortableList
                editing={true}
                onDragEnd={(positions) =>
                    console.log(JSON.stringify(positions, null, 2))
                }
            >
                {[...tiles].map((tile, index) => (
                    <Tile
                        onLongPress={() => true}
                        key={tile.id + "-" + index}
                        id={tile.id}
                    />
                ))}
            </SortableList>
        </SafeAreaView>
    );
};

export default WidgetList;