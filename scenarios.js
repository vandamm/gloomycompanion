//special_rules should be treated with some kind of macro that recognises them and applies them when loading
SPECIAL_RULES =
{
    living_corpse_two_levels_extra:
        {   "description": "All living corpses are two levels higher than the scenario level, up to a max of 7",
            "affected_deck": "Оживший труп",
            "extra_levels": 2
        }
};


SCENARIO_DEFINITIONS =
    [   { name: "#1 Black Barrow"
        , decks:
            [   {"name": "Бандит-страж", "deck_name": "Guard"}
            ,   {"name": "Бандит-лучник", "deck_name": "Archer"}
            ,   {"name": "Ожившие кости", "deck_name": "Ожившие кости"}
            ]
        },
        { name: "#2 Barrow Lair"
        , decks:
            [   {"name": "Бандит-лучник"}
            ,   {"name": "Босс: Главарь бандитов"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Оживший труп"}
            ]
        },
        { name: "#3 Inox Encampment"
        , decks:
            [   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#4 Crypt of the Damned"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Бандит-лучник"}
            ,   {"name": "Cultist"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ]
        },
        { name: "#5 Ruinous Crypt"
        , decks:
            [   {"name": "Cultist"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ]
        },
        { name: "#6 Decaying Crypt"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#7 Vibrant Grotto"
        , decks:
            [   {"name": "Forest Imp"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Inox Shaman"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#8 Gloomhaven Warehouse"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Босс: Inox Bodyguard"}
            ]
        },
        { name: "#9 Diamond Mine"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Босс: Merciless Overseer"}
            ]
        },
        { name: "#10 Plane of Elemental Power"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Sun Demon"}
            ]
        },
        { name: "#11 Gloomhaven Square A"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Босс: Captain of the Guard"}
            ]
        },
        { name: "#12 Gloomhaven Square B"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Cultist"}
            ,   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Босс: Jekserah"}
            ]
        },
        { name: "#13 Temple of the Seer"
        , decks:
            [   {"name": "Stone Golem"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#14 Frozen Hollow"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Frost Demon"}
            ]
        },
        { name: "#15 Shrine of Strength"
        , decks:
            [   {"name": "Stone Golem"}
            ,   {"name": "Savvas Icestorm"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Harrower Infester"}
            ]
        },
        { name: "#16 Mountain Pass"
        , decks:
            [   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ]
        },
        { name: "#17 Lost Island"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Cave Bear"}
            ]
        },
        { name: "#18 Abandoned Sewers"
        , decks:
            [   {"name": "Giant Viper"}
            ,   {"name": "Ooze"}
            ,   {"name": "Vermling Scout"}
            ]
        },
        { name: "#19 Forgotten Crypt"
        , decks:
            [   {"name": "Cultist"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Оживший труп"}
            ]
        },
        { name: "#20 Necromancer's Sanctum"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Cultist"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Босс: Jekserah"}
            ]
        },
        { name: "#21 Infernal Throne"
        , decks:
            [   {"name": "Sun Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Босс: Prime Demon"}
            ]
        },
        { name: "#22 Temple of the Elements"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Cultist"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Wind Demon"}
            ]
        },
        { name: "#23 Deep Ruins"
        , decks:
            [   {"name": "Stone Golem"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#24 Echo Chamber"
        , decks:
            [   {"name": "Rending Drake"}
            ,   {"name": "Ooze"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#25 Icecrag Ascent"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#26 Ancient Cistern"
        , decks:
            [   {"name": "Оживший труп"}
            ,   {"name": "Ooze"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#27 Ruinous Rift"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Sun Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ]
        },
        { name: "#28 Outer Ritual Chamber"
        , decks:
            [   {"name": "Оживший труп"}
            ,   {"name": "Cultist"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Sun Demon"}
            ]
        , special_rules:
            [ SPECIAL_RULES.living_corpse_two_levels_extra
            ]
        },
        { name: "#29 Sanctuary of Gloom"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#30 Shrine of the Depths"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ]
        },
        { name: "#31 Plane of the Night"
        , decks:
            [   {"name": "Deep Terror"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#32 Decrepit Wood"
        , decks:
            [   {"name": "Harrower Infester"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Deep Terror"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#33 Savvas Armory"
        , decks:
            [   {"name": "Savvas Icestorm"}
            ,   {"name": "Savvas Lavaflow"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#34 Scorched Summit"
        , decks:
            [   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ,   {"name": "Босс: Elder Drake"}
            ]
        },
        { name: "#35 Gloomhaven Battlements A"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "City Archer"}
            ,   {"name": "City Guard"}
            ,   {"name": "Босс: Captain of the Guard"}
            ]
        },
        { name: "#36 Gloomhaven Battlements B"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "City Archer"}
            ,   {"name": "Босс: Prime Demon"}
            ]
        },
        { name: "#37 Doom Trench"
        , decks:
            [   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ,   {"name": "Harrower Infester"}
            ]
        },
        { name: "#38 Slave Pens"
        , decks:
            [   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Inox Shaman"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#39 Treacherous Divide"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Spitting Drake"}
            ,   {"name": "Cultist"}
            ,   {"name": "Ожившие кости"}
            ]
        },
        { name: "#40 Ancient Defense Network"
        , decks:
            [   {"name": "Оживший труп"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Forest Imp"}
            ]
        },
        { name: "#41 Timeworn Tomb"
        , decks:
            [   {"name": "Ancient Artillery"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#42 Realm of the Voice"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#43 - Drake Nest"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#44 Tribal Assault"
        , decks:
            [   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Hound"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#45 Rebel Swamp"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Hound"}
            ]
        },
        { name: "#46 Nightmare Peak"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Savvas Icestorm"}
            ,   {"name": "Босс: Winged Horror"}
            ]
        },
        { name: "#47 Lair of the Unseeing Eye"
        , decks:
            [   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ,   {"name": "Harrower Infester"}
            ,   {"name": "Босс: The Sightless Eye"}
            ]
        },
        { name: "#48 - Shadow Weald"
        , decks:
            [   {"name": "Forest Imp"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Harrower Infester"}
            ,   {"name": "Босс: Dark Rider"}
            ]
        },
        { name: "#49 Rebel's Stand"
        , decks:
            [   {"name": "Giant Viper"}
            ,   {"name": "City Archer"}
            ,   {"name": "City Guard"}
            ,   {"name": "Ancient Artillery"}
            ]
        },
        { name: "#50 Ghost Fortress"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Sun Demon"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#51 The Void"
        , decks:
            [   {"name": "Босс: The Gloom"}
            ]
        },
        { name: "#52 Noxious Cellar"
        , decks:
            [   {"name": "Spitting Drake"}
            ,   {"name": "Ooze"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Vermling Shaman"}
            ]
        },
        { name: "#53 Crypt Basement"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Giant Viper"}
            ]
        },
        { name: "#54 Palace of Ice"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Harrower Infester"}
            ]
        },
        //TODO Show message that this is random, use deck tab instead
        { name: "#55 Foggy Thicket"
        , decks:
            [ ]
        },
        { name: "#56 Bandit's Wood"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Бандит-лучник"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Бандит-страж"}
            ]
        },
        { name: "#57 Investigation"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Hound"}
            ]
        },
        { name: "#58 Bloody Shack"
        , decks:
            [   {"name": "Earth Demon"}
            ,   {"name": "Harrower Infester"}
            ,   {"name": "Black Imp"}
            ,   {"name": "City Guard"}
            ]
        },
        { name: "#59 Forgotten Grove"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Hound"}
            ,   {"name": "Forest Imp"}
            ]
        },
        { name: "#60 Alchemy Lab"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Hound"}
            ,   {"name": "Rending Drake"}
            ,   {"name": "Spitting Drake"}
            ]
        },
        { name: "#61 Fading Lighthouse"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Flame Demon"}
            ]
        },
        { name: "#62 Pit of Souls"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#63 Magma Pit"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Flame Demon"}
            ]
        },
        { name: "#64 Underwater Lagoon"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Forest Imp"}
            ,   {"name": "Rending Drake"}
            ]
        },
        { name: "#65 Sulfur Mine"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Hound"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#66 Clockwork Cove"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#67 Arcane Library"
        , decks:
            [   {"name": "Forest Imp"}
            ,   {"name": "Cave Bear"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#68 Toxic Moor"
        , decks:
            [   {"name": "Rending Drake"}
            ,   {"name": "Black Imp"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Оживший труп"}
            ]
        },
        { name: "#69 Well of the Unfortunate"
        , decks:
            [   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Forest Imp"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#70 Chained Isle"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#71 Windswept Highlands"
        , decks:
            [   {"name": "Spitting Drake"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Sun Demon"}
            ]
        },
        { name: "#72 Oozing Grove"
        , decks:
            [   {"name": "Ooze"}
            ,   {"name": "Forest Imp"}
            ,   {"name": "Giant Viper"}
            ]
        },
        { name: "#73 Rockslide Ridge"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Inox Archer"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Inox Shaman"}
            ]
        },
        { name: "#74 Merchant Ship"
        , decks:
            [   {"name": "Бандит-страж"}
            ,   {"name": "Бандит-лучник"}
            ,   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ]
        },
        { name: "#75 Overgrown Graveyard"
        , decks:
            [   {"name": "Ожившие кости"}
            ,   {"name": "Оживший труп"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#76 Harrower Hive"
        , decks:
            [   {"name": "Giant Viper"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Harrower Infester"}
            ]
        },
        { name: "#77 Vault of Secrets"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Hound"}
            ]
        },
        { name: "#78 Sacrifice Pit"
        , decks:
            [   {"name": "Бандит-страж"}
            ,   {"name": "Бандит-лучник"}
            ,   {"name": "Cultist"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#79 Lost Temple"
        , decks:
            [   {"name": "Stone Golem"}
            ,   {"name": "Giant Viper"}
            ,   {"name": "Босс: The Betrayer"}
            ]
        },
        { name: "#80 Vigil Keep"
        , decks:
            [   {"name": "City Guard"}
            ,   {"name": "City Archer"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Hound"}
            ]
        },
        { name: "#81 Temple of the Eclipse"
        , decks:
            [   {"name": "Night Demon"}
            ,   {"name": "Sun Demon"}
            ,   {"name": "Stone Golem"}
            ,   {"name": "Ancient Artillery"}
            ,   {"name": "Босс: The Colorless"}
            ]
        },
        { name: "#82 Burning Mountain"
        , decks:
            [   {"name": "Earth Demon"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Stone Golem"}
            ]
        },
        { name: "#83 Shadows Within"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Cultist"}
            ,   {"name": "Ожившие кости"}
            ,   {"name": "Living Spirit"}
            ,   {"name": "Flame Demon"}
            ]
        },
        { name: "#84 Crystalline Cave"
        , decks:
            [   {"name": "Flame Demon"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#85 Sun Temple"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Black Imp"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Sun Demon"}
            ]
        },
        { name: "#86 Harried Village"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Lurker"}
            ]
        },
        { name: "#87 Corrupted Cove"
        , decks:
            [   {"name": "Lurker"}
            ,   {"name": "Deep Terror"}
            ,   {"name": "Ooze"}
            ,   {"name": "Black Imp"}
            ]
        },
        { name: "#88 Plane of Water"
        , decks:
            [   {"name": "Frost Demon"}
            ,   {"name": "Ooze"}
            ,   {"name": "Lurker"}
            ]
        },
        { name: "#89 Syndicate Hideout"
        , decks:
            [   {"name": "Бандит-лучник"}
            ,   {"name": "Бандит-страж"}
            ,   {"name": "Cultist"}
            ,   {"name": "Giant Viper"}
            ]
        },
        { name: "#90 Demonic Rift"
        , decks:
            [   {"name": "Earth Demon"}
            ,   {"name": "Wind Demon"}
            ,   {"name": "Night Demon"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#91 Wild Melee"
        , decks:
            [   {"name": "Cave Bear"}
            ,   {"name": "Hound"}
            ,   {"name": "Бандит-страж"}
            ,   {"name": "Бандит-лучник"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#92 Back Alley Brawl"
        , decks:
            [   {"name": "Бандит-страж"}
            ,   {"name": "City Guard"}
            ,   {"name": "Inox Guard"}
            ,   {"name": "Бандит-лучник"}
            ,   {"name": "City Archer"}
            ,   {"name": "Savvas Lavaflow"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Earth Demon"}
            ]
        },
        { name: "#93 Sunken Vessel"
        , decks:
            [   {"name": "Lurker"}
            ,   {"name": "Frost Demon"}
            ,   {"name": "Living Spirit"}
            ]
        },
        { name: "#94 Vermling Nest"
        , decks:
            [   {"name": "Hound"}
            ,   {"name": "Vermling Scout"}
            ,   {"name": "Vermling Shaman"}
            ,   {"name": "Cave Bear"}
            ]
        },
        { name: "#95 Payment Due"
        , decks:
            [   {"name": "Deep Terror"}
            ,   {"name": "Flame Demon"}
            ,   {"name": "Earth Demon"}
            ,   {"name": "Savvas Lavaflow"}
            ]
        }

    ];
