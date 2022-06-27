import { View } from "react-native";

export const DesafioAula1 = () => {
    return (

        <>
            <View style={{ flexDirection: 'column', flex: 1 }} >
                <View style={{ backgroundColor: "#50E3C2", height: 25 }} />
            </View>

            <View style={{ flex: 2, justifyContent: "space-around", alignItems: "center", flexDirection: 'column' }} >
                <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                <View style={{ width: 140, height: 30, backgroundColor: "#F5A623" }} />
            </View>


            <View style={{ flex: 1, flexDirection: 'column' }} >
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ flex: 2, height: 78, backgroundColor: "#9013FE" }} />
                    <View style={{ flex: 2, height: 78, backgroundColor: "#4A90E2" }} />
                </View>
                <View style={{ backgroundColor: "#50E3C2", height: 25 }} />
            </View>

            <View style={{ flex: 2, justifyContent: "space-evenly" }}>
                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: 'row' }} >
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                </View>

                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: 'row' }} >
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: "flex-end" }} >
                <View style={{ flex: 1, height: 78, backgroundColor: "#4A90E2", justifyContent: "flex-start" }} />
            </View>
        </>

    )
}

export const Ex1 = () => {
    return (

        <View style={{ flexDirection: 'row', flex: 1 }} >
            <View style={{ flex: 2 }} />
            <View style={{ flex: 1.5, backgroundColor: "red" }} />
            <View style={{ flex: 2 }} />
        </View>

    );
}
export const Ex2 = () => {
    return (

        <View style={{ flexDirection: 'column', flex: 1 }} >
            <View style={{ flex: 2 }} />
            <View style={{ flex: 1, backgroundColor: "red" }} />
            <View style={{ flex: 2 }} />
        </View>

    );
}
export const Ex3 = () => {
    return (

        <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }} >
            <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
            <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
            <View style={{ width: 70, height: 70, backgroundColor: "blue" }} />
        </View>

    );
}
export const Ex4 = () => {
    return (

        <View style={{ flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "center" }} >
            <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
            <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
            <View style={{ width: 70, height: 70, backgroundColor: "blue" }} />
        </View>

    );
}
export const Ex5 = () => {
    return (

        <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "column-reverse" }} >
            <View style={{ width: 70, height: 70, backgroundColor: "green" }} />
            <View style={{ width: 70, height: 70, backgroundColor: "red" }} />
            <View style={{ width: 70, height: 70, backgroundColor: "blue" }} />
        </View>

    );
}
export const Ex6 = () => {
    return (
        <View style={{ flex: 2, justifyContent: "space-evenly" }}>
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: 'row' }} >
                <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
                <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
                <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
            </View>

            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: 'row' }} >
                <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
                <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
                <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
            </View>

            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: 'row' }} >
                <View style={{ width: 100, height: 100, backgroundColor: "purple" }} />
                <View style={{ width: 100, height: 100, backgroundColor: "purple" }} />
                <View style={{ width: 100, height: 100, backgroundColor: "purple" }} />
            </View>

            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: 'row' }} >
                <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
            </View>

        </View>
    );
}
