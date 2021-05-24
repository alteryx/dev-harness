const address = [
  [
    {
      connectionName:"",
      fieldsByName: {
        streetName: {
          "name":"Street Name","type":"V_String","size":"21","source":"Formula: [_CurrentField_]"
        },
        city: {
          "name":"City","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
        },
        state: {
          "name":"State","type":"String","size":"16","source":"Formula: [_CurrentField_]"
        },
        country: {
          "name":"Country","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
        },
        zipCode: {
          "name":"Zip Code","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
        },
      },
      fields:[
        {"name":"Street Name","type":"V_String","size":"21","source":"Formula: [_CurrentField_]"},
        {"name":"City","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"},
        {"name":"State","type":"String","size":"16","source":"Formula: [_CurrentField_]"},
        {"name":"Country","type":"String","size":"16","source":"Formula: [_CurrentField_]"},
        {"name":"Zip Code","type":"String","size":"16","source":"Formula: [_CurrentField_]"}
      ]
    }
  ]
]

const mtg = [
  [
    {
      connectionName:"",
      fieldsByName: {
        name: {
          "name":"Name","type":"V_String","size":"21","source":"Formula: [_CurrentField_]"
        },
        colors: {
          "name":"Color","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
        },
        power: {
          "name":"Power","type":"String","size":"16","source":"Formula: [_CurrentField_]"
        },
        manaCost: {
          "name":"Mana Cost","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
        },
        toughness: {
          "name":"Toughness","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
        },
        loyalty: {
          "name":"Loyalty","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
        },
        flavorText: {
          "name":"Flavor Text","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
        },
      },
      fields:[
        {"name":"Name","type":"V_String","size":"21","source":"Formula: [_CurrentField_]"},
        {"name":"Color","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"},
        {"name":"Power","type":"String","size":"16","source":"Formula: [_CurrentField_]"},
        {"name":"Mana Cost","type":"String","size":"16","source":"Formula: [_CurrentField_]"},
        {"name":"Toughness","type":"String","size":"16","source":"Formula: [_CurrentField_]"},
        {"name":"Loyalty","type":"String","size":"16","source":"Formula: [_CurrentField_]"},
        {"name":"Flavor Text","type":"String","size":"16","source":"Formula: [_CurrentField_]"}
      ]
    }
  ]
]

export { address, mtg };
  