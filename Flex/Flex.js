import { View } from "react-native";

export const DesafioAula1 = () => {
    return (

        <View>
            <View style={{ flexDirection: 'column', flex: 1 }} >
                <View style={{ backgroundColor: "#50E3C2", height: 25 }} />
            </View>

            <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", flexDirection: 'column', marginBottom: 70, marginTop: 65 }} >
                <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: 'column', marginBottom: 70, marginTop: 65 }} >
                <View style={{ width: 140, height: 30, backgroundColor: "#F5A623" }} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }} >
                <View style={{ flex: 2, height: 78, backgroundColor: "#9013FE" }} />
                <View style={{ flex: 2, height: 78, backgroundColor: "#4A90E2" }} />
            </View>

            <View style={{ flexDirection: 'column', flex: 1 }} >
                <View style={{ backgroundColor: "#50E3C2", height: 13, marginTop: 70 }} />
            </View>

            <View style={{marginTop:-30, marginBottom:20}}>
                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: 'row', marginBottom: 180, marginTop: 200 }} >
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                </View>

                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: 'row', marginBottom: 70 }} >
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                    <View style={{ width: 100, height: 100, backgroundColor: "#F5A623" }} />
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }} >
                <View style={{ flex: 2, height: 78, backgroundColor: "#4A90E2" }} />
            </View>
        </View>

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

