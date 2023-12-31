import { hexToRgb } from "./colorConverters"

const colors = [
  {
    Name: "Absolute Zero",
    Hex: "#0048BA"
  },
  {
    Name: "Acid green",
    Hex: "#B0BF1A"
  },
  {
    Name: "Aero",
    Hex: "#7CB9E8"
  },
  {
    Name: "African violet",
    Hex: "#B284BE"
  },
  {
    Name: "Air superiority blue",
    Hex: "#72A0C1"
  },
  {
    Name: "Alice blue",
    Hex: "#F0F8FF"
  },
  {
    Name: "Alizarin",
    Hex: "#DB2D43"
  },
  {
    Name: "Alloy orange",
    Hex: "#C46210"
  },
  {
    Name: "Almond",
    Hex: "#EED9C4"
  },
  {
    Name: "Amaranth deep purple",
    Hex: "#9F2B68"
  },
  {
    Name: "Amaranth pink",
    Hex: "#F19CBB"
  },
  {
    Name: "Amaranth purple",
    Hex: "#AB274F"
  },
  {
    Name: "Amazon",
    Hex: "#3B7A57"
  },
  {
    Name: "Amber",
    Hex: "#FFBF00"
  },
  {
    Name: "Amethyst",
    Hex: "#9966CC"
  },
  {
    Name: "Android green",
    Hex: "#3DDC84"
  },
  {
    Name: "Antique brass",
    Hex: "#C88A65"
  },
  {
    Name: "Antique bronze",
    Hex: "#665D1E"
  },
  {
    Name: "Antique fuchsia",
    Hex: "#915C83"
  },
  {
    Name: "Antique ruby",
    Hex: "#841B2D"
  },
  {
    Name: "Antique white",
    Hex: "#FAEBD7"
  },
  {
    Name: "Apricot",
    Hex: "#FBCEB1"
  },
  {
    Name: "Aqua",
    Hex: "#00FFFF"
  },
  {
    Name: "Aquamarine",
    Hex: "#7FFFD4"
  },
  {
    Name: "Arctic lime",
    Hex: "#D0FF14"
  },
  {
    Name: "Artichoke green",
    Hex: "#4B6F44"
  },
  {
    Name: "Arylide yellow",
    Hex: "#E9D66B"
  },
  {
    Name: "Ash gray",
    Hex: "#B2BEB5"
  },
  {
    Name: "Atomic tangerine",
    Hex: "#FF9966"
  },
  {
    Name: "Aureolin",
    Hex: "#FDEE00"
  },
  {
    Name: "Azure",
    Hex: "#007FFF"
  },
  {
    Name: "Azure (X11/web color)",
    Hex: "#F0FFFF"
  },
  {
    Name: "Baby blue",
    Hex: "#89CFF0"
  },
  {
    Name: "Baby blue eyes",
    Hex: "#A1CAF1"
  },
  {
    Name: "Baby pink",
    Hex: "#F4C2C2"
  },
  {
    Name: "Baby powder",
    Hex: "#FEFEFA"
  },
  {
    Name: "Baker-Miller pink",
    Hex: "#FF91AF"
  },
  {
    Name: "Banana Mania",
    Hex: "#FAE7B5"
  },
  {
    Name: "Barbie Pink",
    Hex: "#DA1884"
  },
  {
    Name: "Barn red",
    Hex: "#7C0A02"
  },
  {
    Name: "Battleship grey",
    Hex: "#848482"
  },
  {
    Name: "Beau blue",
    Hex: "#BCD4E6"
  },
  {
    Name: "Beaver",
    Hex: "#9F8170"
  },
  {
    Name: "Beige",
    Hex: "#F5F5DC"
  },
  {
    Name: "B'dazzled blue",
    Hex: "#2E5894"
  },
  {
    Name: "Big dip o’ruby",
    Hex: "#9C2542"
  },
  {
    Name: "Bisque",
    Hex: "#FFE4C4"
  },
  {
    Name: "Bistre",
    Hex: "#3D2B1F"
  },
  {
    Name: "Bistre brown",
    Hex: "#967117"
  },
  {
    Name: "Bitter lemon",
    Hex: "#CAE00D"
  },
  {
    Name: "Black",
    Hex: "#000000"
  },
  {
    Name: "Black bean",
    Hex: "#3D0C02"
  },
  {
    Name: "Black coral",
    Hex: "#54626F"
  },
  {
    Name: "Black olive",
    Hex: "#3B3C36"
  },
  {
    Name: "Black Shadows",
    Hex: "#BFAFB2"
  },
  {
    Name: "Blanched almond",
    Hex: "#FFEBCD"
  },
  {
    Name: "Blast-off bronze",
    Hex: "#A57164"
  },
  {
    Name: "Bleu de France",
    Hex: "#318CE7"
  },
  {
    Name: "Blizzard blue",
    Hex: "#ACE5EE"
  },
  {
    Name: "Blood red",
    Hex: "#660000"
  },
  {
    Name: "Blue",
    Hex: "#0000FF"
  },
  {
    Name: "Blue (Crayola)",
    Hex: "#1F75FE"
  },
  {
    Name: "Blue (Munsell)",
    Hex: "#0093AF"
  },
  {
    Name: "Blue (NCS)",
    Hex: "#0087BD"
  },
  {
    Name: "Blue (Pantone)",
    Hex: "#0018A8"
  },
  {
    Name: "Blue (pigment)",
    Hex: "#333399"
  },
  {
    Name: "Blue bell",
    Hex: "#A2A2D0"
  },
  {
    Name: "Blue-gray (Crayola)",
    Hex: "#6699CC"
  },
  {
    Name: "Blue jeans",
    Hex: "#5DADEC"
  },
  {
    Name: "Blue sapphire",
    Hex: "#126180"
  },
  {
    Name: "Blue-violet",
    Hex: "#8A2BE2"
  },
  {
    Name: "Blue yonder",
    Hex: "#5072A7"
  },
  {
    Name: "Bluetiful",
    Hex: "#3C69E7"
  },
  {
    Name: "Blush",
    Hex: "#DE5D83"
  },
  {
    Name: "Bole",
    Hex: "#79443B"
  },
  {
    Name: "Bone",
    Hex: "#E3DAC9"
  },
  {
    Name: "Brick red",
    Hex: "#CB4154"
  },
  {
    Name: "Bright lilac",
    Hex: "#D891EF"
  },
  {
    Name: "Bright yellow (Crayola)",
    Hex: "#FFAA1D"
  },
  {
    Name: "British racing green",
    Hex: "#004225"
  },
  {
    Name: "Bronze",
    Hex: "#CD7F32"
  },
  {
    Name: "Brown",
    Hex: "#964B00"
  },
  {
    Name: "Brown sugar",
    Hex: "#AF6E4D"
  },
  {
    Name: "Bud green",
    Hex: "#7BB661"
  },
  {
    Name: "Buff",
    Hex: "#FFC680"
  },
  {
    Name: "Burgundy",
    Hex: "#800020"
  },
  {
    Name: "Burlywood",
    Hex: "#DEB887"
  },
  {
    Name: "Burnished brown",
    Hex: "#A17A74"
  },
  {
    Name: "Burnt orange",
    Hex: "#CC5500"
  },
  {
    Name: "Burnt sienna",
    Hex: "#E97451"
  },
  {
    Name: "Burnt umber",
    Hex: "#8A3324"
  },
  {
    Name: "Byzantine",
    Hex: "#BD33A4"
  },
  {
    Name: "Byzantium",
    Hex: "#702963"
  },
  {
    Name: "Cadet blue",
    Hex: "#5F9EA0"
  },
  {
    Name: "Cadet grey",
    Hex: "#91A3B0"
  },
  {
    Name: "Cadmium green",
    Hex: "#006B3C"
  },
  {
    Name: "Cadmium orange",
    Hex: "#ED872D"
  },
  {
    Name: "Café au lait",
    Hex: "#A67B5B"
  },
  {
    Name: "Café noir",
    Hex: "#4B3621"
  },
  {
    Name: "Cambridge blue",
    Hex: "#A3C1AD"
  },
  {
    Name: "Camel",
    Hex: "#C19A6B"
  },
  {
    Name: "Cameo pink",
    Hex: "#EFBBCC"
  },
  {
    Name: "Canary",
    Hex: "#FFFF99"
  },
  {
    Name: "Canary yellow",
    Hex: "#FFEF00"
  },
  {
    Name: "Candy pink",
    Hex: "#E4717A"
  },
  {
    Name: "Cardinal",
    Hex: "#C41E3A"
  },
  {
    Name: "Caribbean green",
    Hex: "#00CC99"
  },
  {
    Name: "Carmine",
    Hex: "#960018"
  },
  {
    Name: "Carmine (M&P)",
    Hex: "#D70040"
  },
  {
    Name: "Carnation pink",
    Hex: "#FFA6C9"
  },
  {
    Name: "Carnelian",
    Hex: "#B31B1B"
  },
  {
    Name: "Carolina blue",
    Hex: "#56A0D3"
  },
  {
    Name: "Carrot orange",
    Hex: "#ED9121"
  },
  {
    Name: "Catawba",
    Hex: "#703642"
  },
  {
    Name: "Cedar Chest",
    Hex: "#C95A49"
  },
  {
    Name: "Celadon",
    Hex: "#ACE1AF"
  },
  {
    Name: "Celeste",
    Hex: "#B2FFFF"
  },
  {
    Name: "Cerise",
    Hex: "#DE3163"
  },
  {
    Name: "Cerulean",
    Hex: "#007BA7"
  },
  {
    Name: "Cerulean blue",
    Hex: "#2A52BE"
  },
  {
    Name: "Cerulean frost",
    Hex: "#6D9BC3"
  },
  {
    Name: "Cerulean (Crayola)",
    Hex: "#1DACD6"
  },
  {
    Name: "Cerulean (RGB)",
    Hex: "#0040FF"
  },
  {
    Name: "Champagne",
    Hex: "#F7E7CE"
  },
  {
    Name: "Champagne pink",
    Hex: "#F1DDCF"
  },
  {
    Name: "Charcoal",
    Hex: "#36454F"
  },
  {
    Name: "Charm pink",
    Hex: "#E68FAC"
  },
  {
    Name: "Chartreuse (web)",
    Hex: "#80FF00"
  },
  {
    Name: "Cherry blossom pink",
    Hex: "#FFB7C5"
  },
  {
    Name: "Chestnut",
    Hex: "#954535"
  },
  {
    Name: "Chili red",
    Hex: "#E23D28"
  },
  {
    Name: "China pink",
    Hex: "#DE6FA1"
  },
  {
    Name: "Chinese red",
    Hex: "#AA381E"
  },
  {
    Name: "Chinese violet",
    Hex: "#856088"
  },
  {
    Name: "Chinese yellow",
    Hex: "#FFB200"
  },
  {
    Name: "Chocolate (traditional)",
    Hex: "#7B3F00"
  },
  {
    Name: "Chocolate (web)",
    Hex: "#D2691E"
  },
  {
    Name: "Cinereous",
    Hex: "#98817B"
  },
  {
    Name: "Cinnabar",
    Hex: "#E34234"
  },
  {
    Name: "Cinnamon Satin",
    Hex: "#CD607E"
  },
  {
    Name: "Citrine",
    Hex: "#E4D00A"
  },
  {
    Name: "Citron",
    Hex: "#9FA91F"
  },
  {
    Name: "Claret",
    Hex: "#7F1734"
  },
  {
    Name: "Coffee",
    Hex: "#6F4E37"
  },
  {
    Name: "Columbia Blue",
    Hex: "#B9D9EB"
  },
  {
    Name: "Congo pink",
    Hex: "#F88379"
  },
  {
    Name: "Cool grey",
    Hex: "#8C92AC"
  },
  {
    Name: "Copper",
    Hex: "#B87333"
  },
  {
    Name: "Copper (Crayola)",
    Hex: "#DA8A67"
  },
  {
    Name: "Copper penny",
    Hex: "#AD6F69"
  },
  {
    Name: "Copper red",
    Hex: "#CB6D51"
  },
  {
    Name: "Copper rose",
    Hex: "#996666"
  },
  {
    Name: "Coquelicot",
    Hex: "#FF3800"
  },
  {
    Name: "Coral",
    Hex: "#FF7F50"
  },
  {
    Name: "Cordovan",
    Hex: "#893F45"
  },
  {
    Name: "Corn",
    Hex: "#FBEC5D"
  },
  {
    Name: "Cornflower blue",
    Hex: "#6495ED"
  },
  {
    Name: "Cornsilk",
    Hex: "#FFF8DC"
  },
  {
    Name: "Cosmic cobalt",
    Hex: "#2E2D88"
  },
  {
    Name: "Cosmic latte",
    Hex: "#FFF8E7"
  },
  {
    Name: "Coyote brown",
    Hex: "#81613C"
  },
  {
    Name: "Cotton candy",
    Hex: "#FFBCD9"
  },
  {
    Name: "Cream",
    Hex: "#FFFDD0"
  },
  {
    Name: "Crimson",
    Hex: "#DC143C"
  },
  {
    Name: "Crimson (UA)",
    Hex: "#9E1B32"
  },
  {
    Name: "Cultured Pearl",
    Hex: "#F5F5F5"
  },
  {
    Name: "Cyan (process)",
    Hex: "#00B7EB"
  },
  {
    Name: "Cyber grape",
    Hex: "#58427C"
  },
  {
    Name: "Cyber yellow",
    Hex: "#FFD300"
  },
  {
    Name: "Cyclamen",
    Hex: "#F56FA1"
  },
  {
    Name: "Dandelion",
    Hex: "#FED85D"
  },
  {
    Name: "Dark brown",
    Hex: "#654321"
  },
  {
    Name: "Dark byzantium",
    Hex: "#5D3954"
  },
  {
    Name: "Dark cyan",
    Hex: "#008B8B"
  },
  {
    Name: "Dark electric blue",
    Hex: "#536878"
  },
  {
    Name: "Dark goldenrod",
    Hex: "#B8860B"
  },
  {
    Name: "Dark green (X11)",
    Hex: "#006400"
  },
  {
    Name: "Dark jungle green",
    Hex: "#1A2421"
  },
  {
    Name: "Dark khaki",
    Hex: "#BDB76B"
  },
  {
    Name: "Dark lava",
    Hex: "#483C32"
  },
  {
    Name: "Dark liver (horses)",
    Hex: "#543D37"
  },
  {
    Name: "Dark magenta",
    Hex: "#8B008B"
  },
  {
    Name: "Dark olive green",
    Hex: "#556B2F"
  },
  {
    Name: "Dark orange",
    Hex: "#FF8C00"
  },
  {
    Name: "Dark orchid",
    Hex: "#9932CC"
  },
  {
    Name: "Dark purple",
    Hex: "#301934"
  },
  {
    Name: "Dark red",
    Hex: "#8B0000"
  },
  {
    Name: "Dark salmon",
    Hex: "#E9967A"
  },
  {
    Name: "Dark sea green",
    Hex: "#8FBC8F"
  },
  {
    Name: "Dark sienna",
    Hex: "#3C1414"
  },
  {
    Name: "Dark sky blue",
    Hex: "#8CBED6"
  },
  {
    Name: "Dark slate blue",
    Hex: "#483D8B"
  },
  {
    Name: "Dark slate gray",
    Hex: "#2F4F4F"
  },
  {
    Name: "Dark spring green",
    Hex: "#177245"
  },
  {
    Name: "Dark turquoise",
    Hex: "#00CED1"
  },
  {
    Name: "Dark violet",
    Hex: "#9400D3"
  },
  {
    Name: "Davy's grey",
    Hex: "#555555"
  },
  {
    Name: "Deep cerise",
    Hex: "#DA3287"
  },
  {
    Name: "Deep champagne",
    Hex: "#FAD6A5"
  },
  {
    Name: "Deep chestnut",
    Hex: "#B94E48"
  },
  {
    Name: "Deep jungle green",
    Hex: "#004B49"
  },
  {
    Name: "Deep pink",
    Hex: "#FF1493"
  },
  {
    Name: "Deep saffron",
    Hex: "#FF9933"
  },
  {
    Name: "Deep sky blue",
    Hex: "#00BFFF"
  },
  {
    Name: "Deep Space Sparkle",
    Hex: "#4A646C"
  },
  {
    Name: "Deep taupe",
    Hex: "#7E5E60"
  },
  {
    Name: "Denim",
    Hex: "#1560BD"
  },
  {
    Name: "Denim blue",
    Hex: "#2243B6"
  },
  {
    Name: "Desert sand",
    Hex: "#EDC9AF"
  },
  {
    Name: "Dim gray",
    Hex: "#696969"
  },
  {
    Name: "Dodger blue",
    Hex: "#1E90FF"
  },
  {
    Name: "Drab dark brown",
    Hex: "#4A412A"
  },
  {
    Name: "Duke blue",
    Hex: "#00009C"
  },
  {
    Name: "Dutch white",
    Hex: "#EFDFBB"
  },
  {
    Name: "Ebony",
    Hex: "#555D50"
  },
  {
    Name: "Ecru",
    Hex: "#C2B280"
  },
  {
    Name: "Eerie black",
    Hex: "#1B1B1B"
  },
  {
    Name: "Eggplant",
    Hex: "#614051"
  },
  {
    Name: "Eggshell",
    Hex: "#F0EAD6"
  },
  {
    Name: "Electric lime",
    Hex: "#CCFF00"
  },
  {
    Name: "Electric purple",
    Hex: "#BF00FF"
  },
  {
    Name: "Electric violet",
    Hex: "#8F00FF"
  },
  {
    Name: "Emerald",
    Hex: "#50C878"
  },
  {
    Name: "Eminence",
    Hex: "#6C3082"
  },
  {
    Name: "English lavender",
    Hex: "#B48395"
  },
  {
    Name: "English red",
    Hex: "#AB4B52"
  },
  {
    Name: "English vermillion",
    Hex: "#CC474B"
  },
  {
    Name: "English violet",
    Hex: "#563C5C"
  },
  {
    Name: "Erin",
    Hex: "#00FF40"
  },
  {
    Name: "Eton blue",
    Hex: "#96C8A2"
  },
  {
    Name: "Falu red",
    Hex: "#801818"
  },
  {
    Name: "Fandango",
    Hex: "#B53389"
  },
  {
    Name: "Fandango pink",
    Hex: "#DE5285"
  },
  {
    Name: "Fawn",
    Hex: "#E5AA70"
  },
  {
    Name: "Fern green",
    Hex: "#4F7942"
  },
  {
    Name: "Field drab",
    Hex: "#6C541E"
  },
  {
    Name: "Fiery rose",
    Hex: "#FF5470"
  },
  {
    Name: "Finn",
    Hex: "#683068"
  },
  {
    Name: "Firebrick",
    Hex: "#B22222"
  },
  {
    Name: "Fire engine red",
    Hex: "#CE2029"
  },
  {
    Name: "Flame",
    Hex: "#E25822"
  },
  {
    Name: "Flax",
    Hex: "#EEDC82"
  },
  {
    Name: "Flirt",
    Hex: "#A2006D"
  },
  {
    Name: "Floral white",
    Hex: "#FFFAF0"
  },
  {
    Name: "Forest green (web)",
    Hex: "#228B22"
  },
  {
    Name: "French bistre",
    Hex: "#856D4D"
  },
  {
    Name: "French blue",
    Hex: "#0072BB"
  },
  {
    Name: "French fuchsia",
    Hex: "#FD3F92"
  },
  {
    Name: "French lilac",
    Hex: "#86608E"
  },
  {
    Name: "French lime",
    Hex: "#9EFD38"
  },
  {
    Name: "French mauve",
    Hex: "#D473D4"
  },
  {
    Name: "French pink",
    Hex: "#FD6C9E"
  },
  {
    Name: "French raspberry",
    Hex: "#C72C48"
  },
  {
    Name: "French sky blue",
    Hex: "#77B5FE"
  },
  {
    Name: "French violet",
    Hex: "#8806CE"
  },
  {
    Name: "Frostbite",
    Hex: "#E936A7"
  },
  {
    Name: "Fuchsia",
    Hex: "#FF00FF"
  },
  {
    Name: "Fuchsia (Crayola)",
    Hex: "#C154C1"
  },
  {
    Name: "Fulvous",
    Hex: "#E48400"
  },
  {
    Name: "Fuzzy Wuzzy",
    Hex: "#87421F"
  },
  {
    Name: "Gainsboro",
    Hex: "#DCDCDC"
  },
  {
    Name: "Gamboge",
    Hex: "#E49B0F"
  },
  {
    Name: "Generic viridian",
    Hex: "#007F66"
  },
  {
    Name: "Ghost white",
    Hex: "#F8F8FF"
  },
  {
    Name: "Glaucous",
    Hex: "#6082B6"
  },
  {
    Name: "Glossy grape",
    Hex: "#AB92B3"
  },
  {
    Name: "GO green",
    Hex: "#00AB66"
  },
  {
    Name: "Gold (metallic)",
    Hex: "#D4AF37"
  },
  {
    Name: "Gold (web) (Golden)",
    Hex: "#FFD700"
  },
  {
    Name: "Gold (Crayola)",
    Hex: "#E6BE8A"
  },
  {
    Name: "Gold Fusion",
    Hex: "#85754E"
  },
  {
    Name: "Golden brown",
    Hex: "#996515"
  },
  {
    Name: "Golden poppy",
    Hex: "#FCC200"
  },
  {
    Name: "Golden yellow",
    Hex: "#FFDF00"
  },
  {
    Name: "Goldenrod",
    Hex: "#DAA520"
  },
  {
    Name: "Gotham green",
    Hex: "#00573F"
  },
  {
    Name: "Granite gray",
    Hex: "#676767"
  },
  {
    Name: "Granny Smith apple",
    Hex: "#A8E4A0"
  },
  {
    Name: "Gray (web)",
    Hex: "#808080"
  },
  {
    Name: "Gray (X11 gray)",
    Hex: "#BEBEBE"
  },
  {
    Name: "Green",
    Hex: "#00FF00"
  },
  {
    Name: "Green (Crayola)",
    Hex: "#1CAC78"
  },
  {
    Name: "Green (web)",
    Hex: "#008000"
  },
  {
    Name: "Green (Munsell)",
    Hex: "#00A877"
  },
  {
    Name: "Green (NCS)",
    Hex: "#009F6B"
  },
  {
    Name: "Green (Pantone)",
    Hex: "#00AD43"
  },
  {
    Name: "Green (pigment)",
    Hex: "#00A550"
  },
  {
    Name: "Green-blue",
    Hex: "#1164B4"
  },
  {
    Name: "Green Lizard",
    Hex: "#A7F432"
  },
  {
    Name: "Green Sheen",
    Hex: "#6EAEA1"
  },
  {
    Name: "Gunmetal",
    Hex: "#2a3439"
  },
  {
    Name: "Harlequin",
    Hex: "#3FFF00"
  },
  {
    Name: "Harvest gold",
    Hex: "#DA9100"
  },
  {
    Name: "Heat Wave",
    Hex: "#FF7A00"
  },
  {
    Name: "Heliotrope",
    Hex: "#DF73FF"
  },
  {
    Name: "Heliotrope gray",
    Hex: "#AA98A9"
  },
  {
    Name: "Hollywood cerise",
    Hex: "#F400A1"
  },
  {
    Name: "Honolulu blue",
    Hex: "#006DB0"
  },
  {
    Name: "Hooker's green",
    Hex: "#49796B"
  },
  {
    Name: "Hot magenta",
    Hex: "#FF1DCE"
  },
  {
    Name: "Hot pink",
    Hex: "#FF69B4"
  },
  {
    Name: "Hunter green",
    Hex: "#355E3B"
  },
  {
    Name: "Iceberg",
    Hex: "#71A6D2"
  },
  {
    Name: "Illuminating emerald",
    Hex: "#319177"
  },
  {
    Name: "Imperial red",
    Hex: "#ED2939"
  },
  {
    Name: "Inchworm",
    Hex: "#B2EC5D"
  },
  {
    Name: "Independence",
    Hex: "#4C516D"
  },
  {
    Name: "India green",
    Hex: "#138808"
  },
  {
    Name: "Indian red",
    Hex: "#CD5C5C"
  },
  {
    Name: "Indian yellow",
    Hex: "#E3A857"
  },
  {
    Name: "Indigo",
    Hex: "#4B0082"
  },
  {
    Name: "Indigo dye",
    Hex: "#00416A"
  },
  {
    Name: "International Klein Blue",
    Hex: "#130a8f"
  },
  {
    Name: "International orange (engineering)",
    Hex: "#BA160C"
  },
  {
    Name: "International orange (Golden Gate Bridge)",
    Hex: "#C0362C"
  },
  {
    Name: "Irresistible",
    Hex: "#B3446C"
  },
  {
    Name: "Isabelline",
    Hex: "#F4F0EC"
  },
  {
    Name: "Ivory",
    Hex: "#FFFFF0"
  },
  {
    Name: "Japanese carmine",
    Hex: "#9D2933"
  },
  {
    Name: "Japanese violet",
    Hex: "#5B3256"
  },
  {
    Name: "Jasmine",
    Hex: "#F8DE7E"
  },
  {
    Name: "Jazzberry jam",
    Hex: "#A50B5E"
  },
  {
    Name: "Jet",
    Hex: "#343434"
  },
  {
    Name: "Jonquil",
    Hex: "#F4CA16"
  },
  {
    Name: "June bud",
    Hex: "#BDDA57"
  },
  {
    Name: "Jungle green",
    Hex: "#29AB87"
  },
  {
    Name: "Kelly green",
    Hex: "#4CBB17"
  },
  {
    Name: "Keppel",
    Hex: "#3AB09E"
  },
  {
    Name: "Key lime",
    Hex: "#E8F48C"
  },
  {
    Name: "Khaki (web)",
    Hex: "#C3B091"
  },
  {
    Name: "Khaki (X11)",
    Hex: "#F0E68C"
  },
  {
    Name: "Kobe",
    Hex: "#882D17"
  },
  {
    Name: "Kobi",
    Hex: "#E79FC4"
  },
  {
    Name: "Kobicha",
    Hex: "#6B4423"
  },
  {
    Name: "KSU purple",
    Hex: "#512888"
  },
  {
    Name: "Languid lavender",
    Hex: "#D6CADD"
  },
  {
    Name: "Lapis lazuli",
    Hex: "#26619C"
  },
  {
    Name: "Laser lemon",
    Hex: "#FFFF66"
  },
  {
    Name: "Laurel green",
    Hex: "#A9BA9D"
  },
  {
    Name: "Lava",
    Hex: "#CF1020"
  },
  {
    Name: "Lavender (floral)",
    Hex: "#B57EDC"
  },
  {
    Name: "Lavender (web)",
    Hex: "#E6E6FA"
  },
  {
    Name: "Lavender blue",
    Hex: "#CCCCFF"
  },
  {
    Name: "Lavender blush",
    Hex: "#FFF0F5"
  },
  {
    Name: "Lavender gray",
    Hex: "#C4C3D0"
  },
  {
    Name: "Lawn green",
    Hex: "#7CFC00"
  },
  {
    Name: "Lemon",
    Hex: "#FFF700"
  },
  {
    Name: "Lemon chiffon",
    Hex: "#FFFACD"
  },
  {
    Name: "Lemon curry",
    Hex: "#CCA01D"
  },
  {
    Name: "Lemon glacier",
    Hex: "#FDFF00"
  },
  {
    Name: "Lemon meringue",
    Hex: "#F6EABE"
  },
  {
    Name: "Lemon yellow",
    Hex: "#FFF44F"
  },
  {
    Name: "Lemon yellow (Crayola)",
    Hex: "#FFFF9F"
  },
  {
    Name: "Liberty",
    Hex: "#545AA7"
  },
  {
    Name: "Light blue",
    Hex: "#ADD8E6"
  },
  {
    Name: "Light coral",
    Hex: "#F08080"
  },
  {
    Name: "Light cornflower blue",
    Hex: "#93CCEA"
  },
  {
    Name: "Light cyan",
    Hex: "#E0FFFF"
  },
  {
    Name: "Light French beige",
    Hex: "#C8AD7F"
  },
  {
    Name: "Light goldenrod yellow",
    Hex: "#FAFAD2"
  },
  {
    Name: "Light gray",
    Hex: "#D3D3D3"
  },
  {
    Name: "Light green",
    Hex: "#90EE90"
  },
  {
    Name: "Light orange",
    Hex: "#FED8B1"
  },
  {
    Name: "Light periwinkle",
    Hex: "#C5CBE1"
  },
  {
    Name: "Light pink",
    Hex: "#FFB6C1"
  },
  {
    Name: "Light salmon",
    Hex: "#FFA07A"
  },
  {
    Name: "Light sea green",
    Hex: "#20B2AA"
  },
  {
    Name: "Light sky blue",
    Hex: "#87CEFA"
  },
  {
    Name: "Light slate gray",
    Hex: "#778899"
  },
  {
    Name: "Light steel blue",
    Hex: "#B0C4DE"
  },
  {
    Name: "Light yellow",
    Hex: "#FFFFE0"
  },
  {
    Name: "Lilac",
    Hex: "#C8A2C8"
  },
  {
    Name: "Lilac Luster",
    Hex: "#AE98AA"
  },
  {
    Name: "Lime (color wheel)",
    Hex: "#BFFF00"
  },
  {
    Name: "Lime green",
    Hex: "#32CD32"
  },
  {
    Name: "Lincoln green",
    Hex: "#195905"
  },
  {
    Name: "Linen",
    Hex: "#FAF0E6"
  },
  {
    Name: "Lion",
    Hex: "#DECC9C"
  },
  {
    Name: "Little boy blue",
    Hex: "#6CA0DC"
  },
  {
    Name: "Liver",
    Hex: "#674C47"
  },
  {
    Name: "Liver (dogs)",
    Hex: "#B86D29"
  },
  {
    Name: "Liver (organ)",
    Hex: "#6C2E1F"
  },
  {
    Name: "Liver chestnut",
    Hex: "#987456"
  },
  {
    Name: "Macaroni and Cheese",
    Hex: "#FFBD88"
  },
  {
    Name: "Madder Lake",
    Hex: "#CC3336"
  },
  {
    Name: "Magenta (Crayola)",
    Hex: "#F653A6"
  },
  {
    Name: "Magenta (dye)",
    Hex: "#CA1F7B"
  },
  {
    Name: "Magenta (Pantone)",
    Hex: "#D0417E"
  },
  {
    Name: "Magenta (process)",
    Hex: "#FF0090"
  },
  {
    Name: "Magenta haze",
    Hex: "#9F4576"
  },
  {
    Name: "Magic mint",
    Hex: "#AAF0D1"
  },
  {
    Name: "Magnolia",
    Hex: "#F2E8D7"
  },
  {
    Name: "Mahogany",
    Hex: "#C04000"
  },
  {
    Name: "Maize (Crayola)",
    Hex: "#F2C649"
  },
  {
    Name: "Majorelle blue",
    Hex: "#6050DC"
  },
  {
    Name: "Malachite",
    Hex: "#0BDA51"
  },
  {
    Name: "Manatee",
    Hex: "#979AAA"
  },
  {
    Name: "Mandarin",
    Hex: "#F37A48"
  },
  {
    Name: "Mango",
    Hex: "#FDBE02"
  },
  {
    Name: "Mango Tango",
    Hex: "#FF8243"
  },
  {
    Name: "Mantis",
    Hex: "#74C365"
  },
  {
    Name: "Mardi Gras",
    Hex: "#880085"
  },
  {
    Name: "Marigold",
    Hex: "#EAA221"
  },
  {
    Name: "Maroon (Crayola)",
    Hex: "#C32148"
  },
  {
    Name: "Maroon (web)",
    Hex: "#800000"
  },
  {
    Name: "Maroon (X11)",
    Hex: "#B03060"
  },
  {
    Name: "Mauve",
    Hex: "#E0B0FF"
  },
  {
    Name: "Mauve taupe",
    Hex: "#915F6D"
  },
  {
    Name: "Mauvelous",
    Hex: "#EF98AA"
  },
  {
    Name: "Maximum blue",
    Hex: "#47ABCC"
  },
  {
    Name: "Maximum blue green",
    Hex: "#30BFBF"
  },
  {
    Name: "Maximum blue purple",
    Hex: "#ACACE6"
  },
  {
    Name: "Maximum green",
    Hex: "#5E8C31"
  },
  {
    Name: "Maximum green yellow",
    Hex: "#D9E650"
  },
  {
    Name: "Maximum purple",
    Hex: "#733380"
  },
  {
    Name: "Maximum red",
    Hex: "#D92121"
  },
  {
    Name: "Maximum red purple",
    Hex: "#A63A79"
  },
  {
    Name: "Maximum yellow",
    Hex: "#FAFA37"
  },
  {
    Name: "Maximum yellow red",
    Hex: "#F2BA49"
  },
  {
    Name: "May green",
    Hex: "#4C9141"
  },
  {
    Name: "Maya blue",
    Hex: "#73C2FB"
  },
  {
    Name: "Medium aquamarine",
    Hex: "#66DDAA"
  },
  {
    Name: "Medium blue",
    Hex: "#0000CD"
  },
  {
    Name: "Medium candy apple red",
    Hex: "#E2062C"
  },
  {
    Name: "Medium carmine",
    Hex: "#AF4035"
  },
  {
    Name: "Medium champagne",
    Hex: "#F3E5AB"
  },
  {
    Name: "Medium orchid",
    Hex: "#BA55D3"
  },
  {
    Name: "Medium purple",
    Hex: "#9370DB"
  },
  {
    Name: "Medium sea green",
    Hex: "#3CB371"
  },
  {
    Name: "Medium slate blue",
    Hex: "#7B68EE"
  },
  {
    Name: "Medium spring green",
    Hex: "#00FA9A"
  },
  {
    Name: "Medium turquoise",
    Hex: "#48D1CC"
  },
  {
    Name: "Medium violet-red",
    Hex: "#C71585"
  },
  {
    Name: "Mellow apricot",
    Hex: "#F8B878"
  },
  {
    Name: "Melon",
    Hex: "#FEBAAD"
  },
  {
    Name: "Metallic gold",
    Hex: "#D3AF37"
  },
  {
    Name: "Metallic Seaweed",
    Hex: "#0A7E8C"
  },
  {
    Name: "Metallic Sunburst",
    Hex: "#9C7C38"
  },
  {
    Name: "Mexican pink",
    Hex: "#E4007C"
  },
  {
    Name: "Middle blue",
    Hex: "#7ED4E6"
  },
  {
    Name: "Middle blue green",
    Hex: "#8DD9CC"
  },
  {
    Name: "Middle blue purple",
    Hex: "#8B72BE"
  },
  {
    Name: "Middle grey",
    Hex: "#8B8680"
  },
  {
    Name: "Middle green",
    Hex: "#4D8C57"
  },
  {
    Name: "Middle green yellow",
    Hex: "#ACBF60"
  },
  {
    Name: "Middle purple",
    Hex: "#D982B5"
  },
  {
    Name: "Middle red",
    Hex: "#E58E73"
  },
  {
    Name: "Middle red purple",
    Hex: "#A55353"
  },
  {
    Name: "Middle yellow",
    Hex: "#FFEB00"
  },
  {
    Name: "Middle yellow red",
    Hex: "#ECB176"
  },
  {
    Name: "Midnight",
    Hex: "#702670"
  },
  {
    Name: "Midnight blue",
    Hex: "#191970"
  },
  {
    Name: "Midnight green (eagle green)",
    Hex: "#004953"
  },
  {
    Name: "Mikado yellow",
    Hex: "#FFC40C"
  },
  {
    Name: "Mimi pink",
    Hex: "#FFDAE9"
  },
  {
    Name: "Mindaro",
    Hex: "#E3F988"
  },
  {
    Name: "Ming",
    Hex: "#36747D"
  },
  {
    Name: "Minion yellow",
    Hex: "#F5E050"
  },
  {
    Name: "Mint",
    Hex: "#3EB489"
  },
  {
    Name: "Mint cream",
    Hex: "#F5FFFA"
  },
  {
    Name: "Mint green",
    Hex: "#98FF98"
  },
  {
    Name: "Misty moss",
    Hex: "#BBB477"
  },
  {
    Name: "Misty rose",
    Hex: "#FFE4E1"
  },
  {
    Name: "Mona Lisa",
    Hex: "#FF948E"
  },
  {
    Name: "Morning blue",
    Hex: "#8DA399"
  },
  {
    Name: "Moss green",
    Hex: "#8A9A5B"
  },
  {
    Name: "Mountain Meadow",
    Hex: "#30BA8F"
  },
  {
    Name: "Mountbatten pink",
    Hex: "#997A8D"
  },
  {
    Name: "MSU green",
    Hex: "#18453B"
  },
  {
    Name: "Mulberry",
    Hex: "#C54B8C"
  },
  {
    Name: "Mulberry (Crayola)",
    Hex: "#C8509B"
  },
  {
    Name: "Mustard",
    Hex: "#FFDB58"
  },
  {
    Name: "Myrtle green",
    Hex: "#317873"
  },
  {
    Name: "Mystic",
    Hex: "#D65282"
  },
  {
    Name: "Mystic maroon",
    Hex: "#AD4379"
  },
  {
    Name: "Nadeshiko pink",
    Hex: "#F6ADC6"
  },
  {
    Name: "Naples yellow",
    Hex: "#FADA5E"
  },
  {
    Name: "Navajo white",
    Hex: "#FFDEAD"
  },
  {
    Name: "Navy blue",
    Hex: "#000080"
  },
  {
    Name: "Navy blue (Crayola)",
    Hex: "#1974D2"
  },
  {
    Name: "Neon blue",
    Hex: "#4666FF"
  },
  {
    Name: "Neon green",
    Hex: "#39FF14"
  },
  {
    Name: "Neon fuchsia",
    Hex: "#FE4164"
  },
  {
    Name: "New Car",
    Hex: "#214FC6"
  },
  {
    Name: "New York pink",
    Hex: "#D7837F"
  },
  {
    Name: "Nickel",
    Hex: "#727472"
  },
  {
    Name: "Non-photo blue",
    Hex: "#A4DDED"
  },
  {
    Name: "Nyanza",
    Hex: "#E9FFDB"
  },
  {
    Name: "Ochre",
    Hex: "#CC7722"
  },
  {
    Name: "Old burgundy",
    Hex: "#43302E"
  },
  {
    Name: "Old gold",
    Hex: "#CFB53B"
  },
  {
    Name: "Old lace",
    Hex: "#FDF5E6"
  },
  {
    Name: "Old lavender",
    Hex: "#796878"
  },
  {
    Name: "Old mauve",
    Hex: "#673147"
  },
  {
    Name: "Old rose",
    Hex: "#C08081"
  },
  {
    Name: "Olive",
    Hex: "#808000"
  },
  {
    Name: "Olive Drab (#3)",
    Hex: "#6B8E23"
  },
  {
    Name: "Olive Drab #7",
    Hex: "#3C341F"
  },
  {
    Name: "Olive green",
    Hex: "#B5B35C"
  },
  {
    Name: "Olivine",
    Hex: "#9AB973"
  },
  {
    Name: "Onyx",
    Hex: "#353839"
  },
  {
    Name: "Opal",
    Hex: "#A8C3BC"
  },
  {
    Name: "Opera mauve",
    Hex: "#B784A7"
  },
  {
    Name: "Orange",
    Hex: "#FF7F00"
  },
  {
    Name: "Orange (Crayola)",
    Hex: "#FF7538"
  },
  {
    Name: "Orange (Pantone)",
    Hex: "#FF5800"
  },
  {
    Name: "Orange (web)",
    Hex: "#FFA500"
  },
  {
    Name: "Orange peel",
    Hex: "#FF9F00"
  },
  {
    Name: "Orange-red",
    Hex: "#FF681F"
  },
  {
    Name: "Orange-red (Crayola)",
    Hex: "#FF5349"
  },
  {
    Name: "Orange soda",
    Hex: "#FA5B3D"
  },
  {
    Name: "Orange-yellow",
    Hex: "#F5BD1F"
  },
  {
    Name: "Orange-yellow (Crayola)",
    Hex: "#F8D568"
  },
  {
    Name: "Orchid",
    Hex: "#DA70D6"
  },
  {
    Name: "Orchid pink",
    Hex: "#F2BDCD"
  },
  {
    Name: "Orchid (Crayola)",
    Hex: "#E29CD2"
  },
  {
    Name: "Outer space (Crayola)",
    Hex: "#2D383A"
  },
  {
    Name: "Outrageous Orange",
    Hex: "#FF6E4A"
  },
  {
    Name: "Oxblood",
    Hex: "#4A0000"
  },
  {
    Name: "Oxford blue",
    Hex: "#002147"
  },
  {
    Name: "OU Crimson red",
    Hex: "#841617"
  },
  {
    Name: "Pacific blue",
    Hex: "#1CA9C9"
  },
  {
    Name: "Pakistan green",
    Hex: "#006600"
  },
  {
    Name: "Palatinate purple",
    Hex: "#682860"
  },
  {
    Name: "Pale aqua",
    Hex: "#BED3E5"
  },
  {
    Name: "Pale cerulean",
    Hex: "#9BC4E2"
  },
  {
    Name: "Pale Dogwood",
    Hex: "#ED7A9B"
  },
  {
    Name: "Pale pink",
    Hex: "#FADADD"
  },
  {
    Name: "Pale purple (Pantone)",
    Hex: "#FAE6FA"
  },
  {
    Name: "Pale spring bud",
    Hex: "#ECEBBD"
  },
  {
    Name: "Pansy purple",
    Hex: "#78184A"
  },
  {
    Name: "Paolo Veronese green",
    Hex: "#009B7D"
  },
  {
    Name: "Papaya whip",
    Hex: "#FFEFD5"
  },
  {
    Name: "Paradise pink",
    Hex: "#E63E62"
  },
  {
    Name: "Parchment",
    Hex: "#F1E9D2"
  },
  {
    Name: "Pastel pink",
    Hex: "#DEA5A4"
  },
  {
    Name: "Patriarch",
    Hex: "#800080"
  },
  {
    Name: "Paua",
    Hex: "#1F005E"
  },
  {
    Name: "Peach",
    Hex: "#FFE5B4"
  },
  {
    Name: "Peach (Crayola)",
    Hex: "#FFCBA4"
  },
  {
    Name: "Peach puff",
    Hex: "#FFDAB9"
  },
  {
    Name: "Pear",
    Hex: "#D1E231"
  },
  {
    Name: "Pearly purple",
    Hex: "#B768A2"
  },
  {
    Name: "Periwinkle (Crayola)",
    Hex: "#C3CDE6"
  },
  {
    Name: "Permanent Geranium Lake",
    Hex: "#E12C2C"
  },
  {
    Name: "Persian blue",
    Hex: "#1C39BB"
  },
  {
    Name: "Persian green",
    Hex: "#00A693"
  },
  {
    Name: "Persian indigo",
    Hex: "#32127A"
  },
  {
    Name: "Persian orange",
    Hex: "#D99058"
  },
  {
    Name: "Persian pink",
    Hex: "#F77FBE"
  },
  {
    Name: "Persian plum",
    Hex: "#701C1C"
  },
  {
    Name: "Persian red",
    Hex: "#CC3333"
  },
  {
    Name: "Persian rose",
    Hex: "#FE28A2"
  },
  {
    Name: "Persimmon",
    Hex: "#EC5800"
  },
  {
    Name: "Pewter Blue",
    Hex: "#8BA8B7"
  },
  {
    Name: "Phlox",
    Hex: "#DF00FF"
  },
  {
    Name: "Phthalo blue",
    Hex: "#000F89"
  },
  {
    Name: "Phthalo green",
    Hex: "#123524"
  },
  {
    Name: "Picotee blue",
    Hex: "#2E2787"
  },
  {
    Name: "Pictorial carmine",
    Hex: "#C30B4E"
  },
  {
    Name: "Piggy pink",
    Hex: "#FDDDE6"
  },
  {
    Name: "Pine green",
    Hex: "#01796F"
  },
  {
    Name: "Pine tree",
    Hex: "#2A2F23"
  },
  {
    Name: "Pink",
    Hex: "#FFC0CB"
  },
  {
    Name: "Pink (Pantone)",
    Hex: "#D74894"
  },
  {
    Name: "Pink lace",
    Hex: "#FFDDF4"
  },
  {
    Name: "Pink lavender",
    Hex: "#D8B2D1"
  },
  {
    Name: "Pink Sherbet",
    Hex: "#F78FA7"
  },
  {
    Name: "Pistachio",
    Hex: "#93C572"
  },
  {
    Name: "Platinum",
    Hex: "#E5E4E2"
  },
  {
    Name: "Plum",
    Hex: "#8E4585"
  },
  {
    Name: "Plum (web)",
    Hex: "#DDA0DD"
  },
  {
    Name: "Plump Purple",
    Hex: "#5946B2"
  },
  {
    Name: "Polished Pine",
    Hex: "#5DA493"
  },
  {
    Name: "Popstar",
    Hex: "#BE4F62"
  },
  {
    Name: "Portland Orange",
    Hex: "#FF5A36"
  },
  {
    Name: "Powder blue",
    Hex: "#B0E0E6"
  },
  {
    Name: "Prairie gold",
    Hex: "#E1CA7A"
  },
  {
    Name: "Princeton orange",
    Hex: "#F58025"
  },
  {
    Name: "Prussian blue",
    Hex: "#003153"
  },
  {
    Name: "Puce",
    Hex: "#CC8899"
  },
  {
    Name: "Pullman Brown (UPS Brown)",
    Hex: "#644117"
  },
  {
    Name: "Pumpkin",
    Hex: "#FF7518"
  },
  {
    Name: "Purple",
    Hex: "#6A0DAD"
  },
  {
    Name: "Purple (Munsell)",
    Hex: "#9F00C5"
  },
  {
    Name: "Purple (X11)",
    Hex: "#A020F0"
  },
  {
    Name: "Purple mountain majesty",
    Hex: "#9678B6"
  },
  {
    Name: "Purple navy",
    Hex: "#4E5180"
  },
  {
    Name: "Purple pizzazz",
    Hex: "#FE4EDA"
  },
  {
    Name: "Purple Plum",
    Hex: "#9C51B6"
  },
  {
    Name: "Purpureus",
    Hex: "#9A4EAE"
  },
  {
    Name: "Queen blue",
    Hex: "#436B95"
  },
  {
    Name: "Queen pink",
    Hex: "#E8CCD7"
  },
  {
    Name: "Quick Silver",
    Hex: "#A6A6A6"
  },
  {
    Name: "Quinacridone magenta",
    Hex: "#8E3A59"
  },
  {
    Name: "Radical Red",
    Hex: "#FF355E"
  },
  {
    Name: "Raisin black",
    Hex: "#242124"
  },
  {
    Name: "Rajah",
    Hex: "#FBAB60"
  },
  {
    Name: "Raspberry",
    Hex: "#E30B5D"
  },
  {
    Name: "Raw sienna",
    Hex: "#D68A59"
  },
  {
    Name: "Raw umber",
    Hex: "#826644"
  },
  {
    Name: "Razzle dazzle rose",
    Hex: "#FF33CC"
  },
  {
    Name: "Razzmatazz",
    Hex: "#E3256B"
  },
  {
    Name: "Razzmic Berry",
    Hex: "#8D4E85"
  },
  {
    Name: "Rebecca Purple",
    Hex: "#663399"
  },
  {
    Name: "Red",
    Hex: "#FF0000"
  },
  {
    Name: "Red (Crayola)",
    Hex: "#EE204D"
  },
  {
    Name: "Red (Munsell)",
    Hex: "#F2003C"
  },
  {
    Name: "Red (NCS)",
    Hex: "#C40233"
  },
  {
    Name: "Red (pigment)",
    Hex: "#ED1C24"
  },
  {
    Name: "Red (RYB)",
    Hex: "#FE2712"
  },
  {
    Name: "Red-orange (Color wheel)",
    Hex: "#FF4500"
  },
  {
    Name: "Red-purple",
    Hex: "#E40078"
  },
  {
    Name: "Red Salsa",
    Hex: "#FD3A4A"
  },
  {
    Name: "Red-violet (Crayola)",
    Hex: "#C0448F"
  },
  {
    Name: "Red-violet (Color wheel)",
    Hex: "#922B3E"
  },
  {
    Name: "Redwood",
    Hex: "#A45A52"
  },
  {
    Name: "Resolution blue",
    Hex: "#002387"
  },
  {
    Name: "Rhythm",
    Hex: "#777696"
  },
  {
    Name: "Rich black",
    Hex: "#004040"
  },
  {
    Name: "Rich black (FOGRA29)",
    Hex: "#010B13"
  },
  {
    Name: "Rich black (FOGRA39)",
    Hex: "#010203"
  },
  {
    Name: "Rifle green",
    Hex: "#444C38"
  },
  {
    Name: "Robin egg blue",
    Hex: "#00CCCC"
  },
  {
    Name: "Rocket metallic",
    Hex: "#8A7F80"
  },
  {
    Name: "Rojo Spanish red",
    Hex: "#A91101"
  },
  {
    Name: "Roman silver",
    Hex: "#838996"
  },
  {
    Name: "Rose",
    Hex: "#FF007F"
  },
  {
    Name: "Rose bonbon",
    Hex: "#F9429E"
  },
  {
    Name: "Rose Dust",
    Hex: "#9E5E6F"
  },
  {
    Name: "Rose ebony",
    Hex: "#674846"
  },
  {
    Name: "Rose madder",
    Hex: "#E32636"
  },
  {
    Name: "Rose pink",
    Hex: "#FF66CC"
  },
  {
    Name: "Rose red",
    Hex: "#C21E56"
  },
  {
    Name: "Rose taupe",
    Hex: "#905D5D"
  },
  {
    Name: "Rose vale",
    Hex: "#AB4E52"
  },
  {
    Name: "Rosewood",
    Hex: "#65000B"
  },
  {
    Name: "Rosso corsa",
    Hex: "#D40000"
  },
  {
    Name: "Rosy brown",
    Hex: "#BC8F8F"
  },
  {
    Name: "Royal blue (dark)",
    Hex: "#002366"
  },
  {
    Name: "Royal blue (light)",
    Hex: "#4169E1"
  },
  {
    Name: "Royal purple",
    Hex: "#7851A9"
  },
  {
    Name: "Ruber",
    Hex: "#CE4676"
  },
  {
    Name: "Rubine red",
    Hex: "#D10056"
  },
  {
    Name: "Ruby",
    Hex: "#E0115F"
  },
  {
    Name: "Ruby red",
    Hex: "#9B111E"
  },
  {
    Name: "Rufous",
    Hex: "#A81C07"
  },
  {
    Name: "Russet",
    Hex: "#80461B"
  },
  {
    Name: "Russian green",
    Hex: "#679267"
  },
  {
    Name: "Russian violet",
    Hex: "#32174D"
  },
  {
    Name: "Rust",
    Hex: "#B7410E"
  },
  {
    Name: "Rusty red",
    Hex: "#DA2C43"
  },
  {
    Name: "Sacramento State green",
    Hex: "#043927"
  },
  {
    Name: "Saddle brown",
    Hex: "#8B4513"
  },
  {
    Name: "Safety orange",
    Hex: "#FF7800"
  },
  {
    Name: "Safety orange (blaze orange)",
    Hex: "#FF6700"
  },
  {
    Name: "Safety yellow",
    Hex: "#EED202"
  },
  {
    Name: "Saffron",
    Hex: "#F4C430"
  },
  {
    Name: "Sage",
    Hex: "#BCB88A"
  },
  {
    Name: "St. Patrick's blue",
    Hex: "#23297A"
  },
  {
    Name: "Salmon",
    Hex: "#FA8072"
  },
  {
    Name: "Salmon pink",
    Hex: "#FF91A4"
  },
  {
    Name: "Sandy brown",
    Hex: "#F4A460"
  },
  {
    Name: "Sap green",
    Hex: "#507D2A"
  },
  {
    Name: "Sapphire",
    Hex: "#0F52BA"
  },
  {
    Name: "Sapphire blue",
    Hex: "#0067A5"
  },
  {
    Name: "Sapphire (Crayola)",
    Hex: "#2D5DA1"
  },
  {
    Name: "Satin sheen gold",
    Hex: "#CBA135"
  },
  {
    Name: "Scarlet",
    Hex: "#FF2400"
  },
  {
    Name: "School bus yellow",
    Hex: "#FFD800"
  },
  {
    Name: "Screamin' Green",
    Hex: "#66FF66"
  },
  {
    Name: "Sea green",
    Hex: "#2E8B57"
  },
  {
    Name: "Sea green (Crayola)",
    Hex: "#00FFCD"
  },
  {
    Name: "Seance",
    Hex: "#612086"
  },
  {
    Name: "Seal brown",
    Hex: "#59260B"
  },
  {
    Name: "Seashell",
    Hex: "#FFF5EE"
  },
  {
    Name: "Secret",
    Hex: "#764374"
  },
  {
    Name: "Selective yellow",
    Hex: "#FFBA00"
  },
  {
    Name: "Sepia",
    Hex: "#704214"
  },
  {
    Name: "Shadow",
    Hex: "#8A795D"
  },
  {
    Name: "Shadow blue",
    Hex: "#778BA5"
  },
  {
    Name: "Shamrock green",
    Hex: "#009E60"
  },
  {
    Name: "Sheen green",
    Hex: "#8FD400"
  },
  {
    Name: "Shimmering Blush",
    Hex: "#D98695"
  },
  {
    Name: "Shiny Shamrock",
    Hex: "#5FA778"
  },
  {
    Name: "Shocking pink",
    Hex: "#FC0FC0"
  },
  {
    Name: "Shocking pink (Crayola)",
    Hex: "#FF6FFF"
  },
  {
    Name: "Silver",
    Hex: "#C0C0C0"
  },
  {
    Name: "Silver (Crayola)",
    Hex: "#C9C0BB"
  },
  {
    Name: "Silver (Metallic)",
    Hex: "#AAA9AD"
  },
  {
    Name: "Silver chalice",
    Hex: "#ACACAC"
  },
  {
    Name: "Silver pink",
    Hex: "#C4AEAD"
  },
  {
    Name: "Silver sand",
    Hex: "#BFC1C2"
  },
  {
    Name: "Sinopia",
    Hex: "#CB410B"
  },
  {
    Name: "Sizzling Red",
    Hex: "#FF3855"
  },
  {
    Name: "Sizzling Sunrise",
    Hex: "#FFDB00"
  },
  {
    Name: "Skobeloff",
    Hex: "#007474"
  },
  {
    Name: "Sky blue",
    Hex: "#87CEEB"
  },
  {
    Name: "Sky blue (Crayola)",
    Hex: "#76D7EA"
  },
  {
    Name: "Sky magenta",
    Hex: "#CF71AF"
  },
  {
    Name: "Slate blue",
    Hex: "#6A5ACD"
  },
  {
    Name: "Slate gray",
    Hex: "#708090"
  },
  {
    Name: "Slimy green",
    Hex: "#299617"
  },
  {
    Name: "Smitten",
    Hex: "#C84186"
  },
  {
    Name: "Smoky black",
    Hex: "#100C08"
  },
  {
    Name: "Snow",
    Hex: "#FFFAFA"
  },
  {
    Name: "Solid pink",
    Hex: "#893843"
  },
  {
    Name: "Sonic silver",
    Hex: "#757575"
  },
  {
    Name: "Space cadet",
    Hex: "#1D2951"
  },
  {
    Name: "Spanish bistre",
    Hex: "#807532"
  },
  {
    Name: "Spanish blue",
    Hex: "#0070B8"
  },
  {
    Name: "Spanish carmine",
    Hex: "#D10047"
  },
  {
    Name: "Spanish gray",
    Hex: "#989898"
  },
  {
    Name: "Spanish green",
    Hex: "#009150"
  },
  {
    Name: "Spanish orange",
    Hex: "#E86100"
  },
  {
    Name: "Spanish pink",
    Hex: "#F7BFBE"
  },
  {
    Name: "Spanish red",
    Hex: "#E60026"
  },
  {
    Name: "Spanish sky blue",
    Hex: "#00FFFE"
  },
  {
    Name: "Spanish violet",
    Hex: "#4C2882"
  },
  {
    Name: "Spanish viridian",
    Hex: "#007F5C"
  },
  {
    Name: "Spring bud",
    Hex: "#A7FC00"
  },
  {
    Name: "Spring Frost",
    Hex: "#87FF2A"
  },
  {
    Name: "Spring green",
    Hex: "#00FF7F"
  },
  {
    Name: "Star command blue",
    Hex: "#007BB8"
  },
  {
    Name: "Steel blue",
    Hex: "#4682B4"
  },
  {
    Name: "Steel pink",
    Hex: "#CC33CC"
  },
  {
    Name: "Straw",
    Hex: "#E4D96F"
  },
  {
    Name: "Strawberry",
    Hex: "#FA5053"
  },
  {
    Name: "Strawberry Blonde",
    Hex: "#FF9361"
  },
  {
    Name: "Strong Lime Green",
    Hex: "#33CC33"
  },
  {
    Name: "Sugar Plum",
    Hex: "#914E75"
  },
  {
    Name: "Sunglow",
    Hex: "#FFCC33"
  },
  {
    Name: "Sunray",
    Hex: "#E3AB57"
  },
  {
    Name: "Super pink",
    Hex: "#CF6BA9"
  },
  {
    Name: "Sweet Brown",
    Hex: "#A83731"
  },
  {
    Name: "Syracuse Orange",
    Hex: "#D44500"
  },
  {
    Name: "Tan",
    Hex: "#D2B48C"
  },
  {
    Name: "Tan (Crayola)",
    Hex: "#D99A6C"
  },
  {
    Name: "Tangerine",
    Hex: "#F28500"
  },
  {
    Name: "Tart Orange",
    Hex: "#FB4D46"
  },
  {
    Name: "Taupe gray",
    Hex: "#8B8589"
  },
  {
    Name: "Tea green",
    Hex: "#D0F0C0"
  },
  {
    Name: "Teal",
    Hex: "#008080"
  },
  {
    Name: "Teal blue",
    Hex: "#367588"
  },
  {
    Name: "Technobotanica",
    Hex: "#00FFBF"
  },
  {
    Name: "Telemagenta",
    Hex: "#CF3476"
  },
  {
    Name: "Tenné (tawny)",
    Hex: "#CD5700"
  },
  {
    Name: "Terra cotta",
    Hex: "#E2725B"
  },
  {
    Name: "Thistle",
    Hex: "#D8BFD8"
  },
  {
    Name: "Tickle Me Pink",
    Hex: "#FC89AC"
  },
  {
    Name: "Tiffany Blue",
    Hex: "#0ABAB5"
  },
  {
    Name: "Timberwolf",
    Hex: "#DBD7D2"
  },
  {
    Name: "Titanium yellow",
    Hex: "#EEE600"
  },
  {
    Name: "Tomato",
    Hex: "#FF6347"
  },
  {
    Name: "Tourmaline",
    Hex: "#86A1A9"
  },
  {
    Name: "Tropical rainforest",
    Hex: "#00755E"
  },
  {
    Name: "True Blue",
    Hex: "#2D68C4"
  },
  {
    Name: "Trypan Blue",
    Hex: "#1C05B3"
  },
  {
    Name: "Tufts blue",
    Hex: "#3E8EDE"
  },
  {
    Name: "Tumbleweed",
    Hex: "#DEAA88"
  },
  {
    Name: "Turquoise",
    Hex: "#40E0D0"
  },
  {
    Name: "Turquoise blue",
    Hex: "#00FFEF"
  },
  {
    Name: "Turquoise green",
    Hex: "#A0D6B4"
  },
  {
    Name: "Tuscan red",
    Hex: "#7C4848"
  },
  {
    Name: "Tuscany",
    Hex: "#C09999"
  },
  {
    Name: "Twilight lavender",
    Hex: "#8A496B"
  },
  {
    Name: "Tyrian purple",
    Hex: "#66023C"
  },
  {
    Name: "UA blue",
    Hex: "#0033AA"
  },
  {
    Name: "UA red",
    Hex: "#D9004C"
  },
  {
    Name: "Ultramarine",
    Hex: "#3F00FF"
  },
  {
    Name: "Ultramarine blue",
    Hex: "#4166F5"
  },
  {
    Name: "Ultra red",
    Hex: "#FC6C85"
  },
  {
    Name: "Umber",
    Hex: "#635147"
  },
  {
    Name: "Unbleached silk",
    Hex: "#FFDDCA"
  },
  {
    Name: "United Nations blue",
    Hex: "#009EDB"
  },
  {
    Name: "University of Pennsylvania red",
    Hex: "#A50021"
  },
  {
    Name: "UP Forest green",
    Hex: "#014421"
  },
  {
    Name: "UP maroon",
    Hex: "#7B1113"
  },
  {
    Name: "Upsdell red",
    Hex: "#AE2029"
  },
  {
    Name: "Uranian blue",
    Hex: "#AFDBF5"
  },
  {
    Name: "USAFA blue",
    Hex: "#004F98"
  },
  {
    Name: "Van Dyke brown",
    Hex: "#664228"
  },
  {
    Name: "Vanilla ice",
    Hex: "#F38FA9"
  },
  {
    Name: "Vegas gold",
    Hex: "#C5B358"
  },
  {
    Name: "Venetian red",
    Hex: "#C80815"
  },
  {
    Name: "Verdigris",
    Hex: "#43B3AE"
  },
  {
    Name: "Vermilion",
    Hex: "#D9381E"
  },
  {
    Name: "Violet (color wheel)",
    Hex: "#7F00FF"
  },
  {
    Name: "Violet (crayola)",
    Hex: "#963D7F"
  },
  {
    Name: "Violet (RYB)",
    Hex: "#8601AF"
  },
  {
    Name: "Violet (web)",
    Hex: "#EE82EE"
  },
  {
    Name: "Violet-blue",
    Hex: "#324AB2"
  },
  {
    Name: "Violet-blue (Crayola)",
    Hex: "#766EC8"
  },
  {
    Name: "Violet-red",
    Hex: "#F75394"
  },
  {
    Name: "Violet-red(PerBang)",
    Hex: "#F0599C"
  },
  {
    Name: "Viridian",
    Hex: "#40826D"
  },
  {
    Name: "Viridian green",
    Hex: "#009698"
  },
  {
    Name: "Vivid burgundy",
    Hex: "#9F1D35"
  },
  {
    Name: "Vivid sky blue",
    Hex: "#00CCFF"
  },
  {
    Name: "Vivid tangerine",
    Hex: "#FFA089"
  },
  {
    Name: "Vivid violet",
    Hex: "#9F00FF"
  },
  {
    Name: "Volt",
    Hex: "#CEFF00"
  },
  {
    Name: "Warm black",
    Hex: "#004242"
  },
  {
    Name: "Weezy Blue",
    Hex: "#189BCC"
  },
  {
    Name: "Wheat",
    Hex: "#F5DEB3"
  },
  {
    Name: "White",
    Hex: "#FFFFFF"
  },
  {
    Name: "Wild blue yonder",
    Hex: "#A2ADD0"
  },
  {
    Name: "Wild orchid",
    Hex: "#D470A2"
  },
  {
    Name: "Wild Strawberry",
    Hex: "#FF43A4"
  },
  {
    Name: "Windsor tan",
    Hex: "#A75502"
  },
  {
    Name: "Wine",
    Hex: "#722F37"
  },
  {
    Name: "Winter Sky",
    Hex: "#FF007C"
  },
  {
    Name: "Wintergreen Dream",
    Hex: "#56887D"
  },
  {
    Name: "Wisteria",
    Hex: "#C9A0DC"
  },
  {
    Name: "Xanadu",
    Hex: "#738678"
  },
  {
    Name: "Xanthic",
    Hex: "#EEED09"
  },
  {
    Name: "Xanthous",
    Hex: "#F1B42F"
  },
  {
    Name: "Yale Blue",
    Hex: "#00356B"
  },
  {
    Name: "Yellow",
    Hex: "#FFFF00"
  },
  {
    Name: "Yellow (Crayola)",
    Hex: "#FCE883"
  },
  {
    Name: "Yellow (Munsell)",
    Hex: "#EFCC00"
  },
  {
    Name: "Yellow (Pantone)",
    Hex: "#FEDF00"
  },
  {
    Name: "Yellow (RYB)",
    Hex: "#FEFE33"
  },
  {
    Name: "Yellow-green",
    Hex: "#9ACD32"
  },
  {
    Name: "Yellow-green (Crayola)",
    Hex: "#C5E384"
  },
  {
    Name: "Yellow-green (Color Wheel)",
    Hex: "#30B21A"
  },
  {
    Name: "Yellow Orange",
    Hex: "#FFAE42"
  },
  {
    Name: "Yellow Orange (Color Wheel)",
    Hex: "#FF9505"
  },
  {
    Name: "YInMn Blue",
    Hex: "#2E5090"
  },
  {
    Name: "Zaffre",
    Hex: "#0014A8"
  },
  {
    Name: "Zinnwaldite brown",
    Hex: "#2C1608"
  },
  {
    Name: "Zomp",
    Hex: "#39A78E"
  }
]
