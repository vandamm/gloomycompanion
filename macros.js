/* Macros used in card text, alphabetical order */
MACROS =
    { "%air%":                                      "<img class='element' src='images/air.svg'>"
    , "%any%":                                      "<img class='element' src='images/any_element.svg'>"
    , "%aoe-4-with-black%":                         "<img class='aoe h2' src='images/aoe-4-with-black.svg'>"
    , "%aoe-circle%":                               "<div class='collapse small'><img class='aoe h3' src='images/aoe-circle.svg'></div>"
    , "%aoe-circle-with-middle-black%":             "<div class='collapse small'><img class='aoe h3' src='images/aoe-circle-with-middle-black.svg'></div>"
    , "%aoe-circle-with-side-black%":               "<img class='aoe h3' src='images/aoe-circle-with-side-black.svg'>"
    , "%aoe-line-3-with-black%":                    "<div class='collapse'><img class='aoe h1 rotated' src='images/aoe-line-3-with-black.svg'></div>"
    , "%aoe-line-4-with-black%":                    "<div class='collapse'><img class='aoe h1 rotated' src='images/aoe-line-4-with-black.svg'></div>"
    , "%aoe-line-6-with-black%":                    "<img class='aoe h6 right-aligned' src='images/aoe-line-6-with-black.svg'></div>"
    , "%aoe-triangle-2-side%":                      "<div class='collapse'><img class='aoe h2' src='images/aoe-triangle-2-side.svg'></div>"
    , "%aoe-triangle-2-side-with-black%":           "<div class='collapse'><img class='aoe h2' src='images/aoe-triangle-2-side-with-black.svg'></div>"
    , "%aoe-triangle-3-side-with-corner-black%":    "<div class='collapse'><img class='aoe h3' src='images/aoe-triangle-3-side-with-corner-black.svg'></div>"
    , "%attack%":                                   "<span class='nobr'>Атака <img class='icon' src='images/attack.svg'></span>"
    , "%bless%":                                    "<span class='nobr'>БЛАГОСЛОВЕНИЕ <img class='icon' src='images/bless.svg'></span>"
    , "%boss-aoe-elder-drake-sp1%":                 "<div class='collapse'><img class='aoe h3' src='images/elderDrake.special1Area.svg'></div>"
    , "%boss-aoe-inox-bodyguard-sp1%":              "<div class='collapse'><img class='aoe h3' src='images/inoxBodyguard.special1Area.svg'></div>"
    , "%boss-aoe-sightless-eye-sp1%":               "<div class='collapse'><img class='aoe h3' src='images/sightlessEye.special1Area.svg'></div>"
    , "%boss-aoe-sightless-eye-sp2%":               "<div class='collapse'><img class='aoe h3' src='images/sightlessEye.special2Area.svg'></div>"
    , "%curse%":                                    "<span class='nobr'>ПРОКЛЯТЬЕ <img class='icon' src='images/curse.svg'></span>"
    , "%dark%":                                     "<img class='element' src='images/dark.svg'>"
    , "%disarm%":                                   "<span class='nobr'>РАЗОРУЖЕНИЕ <img class='icon' src='images/disarm.svg'></span>"
    , "%earth%":                                    "<img class='element' src='images/earth.svg'>"
    , "%fire%":                                     "<img class='element' src='images/fire.svg'>"
    , "%heal%":                                     "<span class='nobr'>Лечение <img class='icon' src='images/heal.svg'></span>"
    , "%ice%":                                      "<img class='element' src='images/ice.svg'>"
    , "%immobilize%":                               "<span class='nobr'>ОБЕЗДВИЖИТЬ <img class='icon' src='images/immobilize.svg'></span>"
    , "%invisible%":                                "<span class='nobr'>НЕВИДИМОСТЬ <img class='icon' src='images/invisibility.svg'></span>"
    , "%jump%":                                     "<span class='nobr'>Прыжок <img class='icon' src='images/jump.svg'></span>"
    , "%light%":                                    "<img class='element' src='images/light.svg'>"
    , "%loot%":                                     "<span class='nobr'>Добыча <img class='icon' src='images/loot.svg'></span>"
    , "%move%":                                     "<span class='nobr'>Движение <img class='icon' src='images/move.svg'></span>"
    , "%muddle%":                                   "<span class='nobr'>MUDDLE <img class='icon' src='images/muddle.svg'></span>"
    , "%pierce%":                                   "<span class='nobr'>ПРОБОЙ <img class='icon' src='images/pierce.svg'></span>"
    , "%poison%":                                   "<span class='nobr'>ОТРАВЛЕНИЕ <img class='icon' src='images/poison.svg'></span>"
    , "%pull%":                                     "<span class='nobr'>ПРИТЯНУТЬ <img class='mirrored icon' src='images/push.svg'></span>"
    , "%push%":                                     "<span class='nobr'>ОТТОЛКНУТЬ <img class='icon' src='images/push.svg'></span>"
    , "%range%":                                    "<span class='nobr'>Дальность <img class='icon' src='images/range.svg'></span>"
    , "%retaliate%":                                "<span class='nobr'>Ответный удар <img class='icon' src='images/retaliate.svg'></span>"
    , "%shield%":                                   "<span class='nobr'>Щит <img class='icon' src='images/shield.svg'></span>"
    , "%flying%":                                   "<span class='nobr'><img class='icon' src='images/fly.svg'></span>"
    , "%strengthen%":                               "<span class='nobr'>УСИЛЕНИЕ <img class='icon' src='images/strengthen.svg'></span>"
    , "%stun%":                                     "<span class='nobr'>STUN <img class='icon' src='images/stun.svg'></span>"
    , "%target%":                                   "<span class='nobr'>Цели <img class='icon' src='images/target.svg'></span>"
    , "%use_element%":                              "<img class='element overlay' src='images/use_element.svg'>"
    , "%wound%":                                    "<span class='nobr'>РАНА <img class='icon' src='images/wound.svg'></span>"
    };

function expand_macro(macro)
{
    var key = macro.toLowerCase();
    if (key in MACROS)
    {
        return MACROS[key];
    }
    else
    {
        return macro;
    }
}

function expand_stat(s, stat, value)
{
    var re = new RegExp("%" + stat + "% (\\+|-)(\\d*)", "g");
    var line_parsed = re.exec(s);

    var has_elite_value = (value.length == 2);
    var normal_attack = value[0];
    //Check in case of bosses with text in the attack (C+1)
    re = new RegExp("(\\d*)(\\+|-)?([a-zA-Z]+)", "i");
    var extra_text_for_particular_bosses = "";
    var value_parsed = re.exec(String(normal_attack));
    if (value_parsed && value_parsed[3])
    {
        var symbol = (value_parsed[2] == "-") ? "-" : "+";
        extra_text_for_particular_bosses = value_parsed[3] + symbol;
        normal_attack = (value_parsed[1] !== "") ? parseInt(value_parsed[1]) : 0;
    }

    if (line_parsed) {
        if (line_parsed[1] === "+")
        {
            var value_normal = normal_attack + parseInt(line_parsed[2]);
            if (has_elite_value)
            {
                var value_elite = value[1] + parseInt(line_parsed[2]);
                return ("%" + stat + "% " + value_normal + " / <span class='elite-color'>" + value_elite + "</span>");
            } else
            {
                 return ("%" + stat + "% " + extra_text_for_particular_bosses + value_normal);
            }
        } else if (line_parsed[1] === "-")
        {
            var value_normal = normal_attack - parseInt(line_parsed[2]);
            if (has_elite_value)
            {
                var value_elite = value[1] - parseInt(line_parsed[2]);
                return ("%" + stat + "% " + value_normal + " / <span class='elite-color'>" + value_elite + "</span>");
            } else
            {
                 return ("%" + stat + "% " + extra_text_for_particular_bosses + value_normal);
            }
        }
    }

    return s;
}

function attributes_to_lines(attributes)
{
    if (!attributes || (attributes[0].length == 0 && attributes[1].length == 0))
    {
        return [];
    } else
    {
        // To make it more readable, group 3 elements in the same row abd naje them small
        var attributes_lines = ["* Характеристики"];

        // Write common attributes in white
        var normal_attributes_lines = [];
        var line = 0;
        for (var i=0; i<attributes[0].length; i++)
        {
            normal_attributes_lines[line] = normal_attributes_lines[line] ? normal_attributes_lines[line] + attributes[0][i] + ", " : attributes[0][i] + ", ";
            if ((i+1) % 3 == 0 )
            {
                line++;
            }
        }
        attributes_lines = attributes_lines.concat(normal_attributes_lines.map(function(line) { return line ? "**" + line.replace(/(,\s$)/g, "") : "";}));

        // Write elite attributes in Gold
        var elite_attributes_lines = [];
        // TODO
        // In case we want to show Common and Elite only attributes
        // var elite_attributes = attributes[1].map(function(elite_attribute){
        //     return ((attributes[0].indexOf(elite_attribute) == -1) ? elite_attribute: "")
        // });
        line = 0;
        for (var i=0; i<attributes[1].length; i++)
        {
            elite_attributes_lines[line] = elite_attributes_lines[line] ? elite_attributes_lines[line] + attributes[1][i] + ", " : attributes[1][i] + ", ";
            if ((i+1) % 3 == 0 )
            {
                line++;
            }
        }

        return attributes_lines.concat(elite_attributes_lines.map(function(line) { return line ? "** <span class='elite-color'>" + line.replace(/(,\s$)/g, "") + "</span>" : "";}));
    }
}

function immunities_to_lines(immunities)
{
    if (!immunities)
    {
        return [];
    } else
    {
        // To make it more readable, group 3 elements in the same row abd naje them small
        var immunities_lines = [];
        var line = 0;
        for (var i=0; i<immunities.length; i++)
        {
            immunities_lines[line] = immunities_lines[line] ? immunities_lines[line] + immunities[i] + ", " : immunities[i] + ", ";
            if ((i+1) % 3 == 0 )
            {
                line++;
            }
        }
        return ["* Иммунитет"].concat(immunities_lines.map(function(line) { return "** <span class='small'>" + line.replace(/(,\s$)/g, "") + "</span>"}));
    }
}

function notes_to_lines(notes)
{
    return ["* <span class='small'> Примечания: " + notes + "</span>"];
}

function expand_special(s, special_value)
{
    var value = "";

    return special_value.map(function(line){
        return ("* " + line);
    });
}

function special_to_lines(s, special1, special2)
{
    if (special1 && s.indexOf("Special 1") !== -1)
    {
        s = expand_special(s, special1);
    }
    if (special1 && s.indexOf("Special 2") !== -1)
    {
        s = expand_special(s, special2);
    }

    return s;
}

function expand_string(s, attack, move, range)
{
    var re = new RegExp("%(attack|move|range)% (\\+|-)(\\d*)", "g");

    while (found = re.exec(s))
    {
        if (found[1] === "attack")
        {
            s = s.replace(found[0], expand_stat(found[0], "attack", attack));
        } else if  (found[1] === "move")
        {
            s = s.replace(found[0], expand_stat(found[0], "move", move));
        } else if (found[1] === "range")
        {
            s = s.replace(found[0], expand_stat(found[0], "range", range));
        }
    }

    return s.replace(/%[^%]*%/gi, expand_macro);
}
