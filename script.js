// Define all converters with their categories, units, and conversion functions
const converterData = {
    general: {
        length: {
            name: "Length Converter",
            units: [
                { id: "m", name: "Meter (m)" },
                { id: "km", name: "Kilometer (km)" },
                { id: "cm", name: "Centimeter (cm)" },
                { id: "mm", name: "Millimeter (mm)" },
                { id: "in", name: "Inch (in)" },
                { id: "ft", name: "Foot (ft)" },
                { id: "yd", name: "Yard (yd)" },
                { id: "mi", name: "Mile (mi)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to meters first (base unit)
                let meters = 0;
                
                switch (fromUnit) {
                    case "m": meters = value; break;
                    case "km": meters = value * 1000; break;
                    case "cm": meters = value * 0.01; break;
                    case "mm": meters = value * 0.001; break;
                    case "in": meters = value * 0.0254; break;
                    case "ft": meters = value * 0.3048; break;
                    case "yd": meters = value * 0.9144; break;
                    case "mi": meters = value * 1609.344; break;
                }
                
                // Convert from meters to target unit
                switch (toUnit) {
                    case "m": return meters;
                    case "km": return meters / 1000;
                    case "cm": return meters * 100;
                    case "mm": return meters * 1000;
                    case "in": return meters / 0.0254;
                    case "ft": return meters / 0.3048;
                    case "yd": return meters / 0.9144;
                    case "mi": return meters / 1609.344;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                const formulas = {
                    "m_km": "value ÷ 1000",
                    "m_cm": "value × 100",
                    "m_mm": "value × 1000",
                    "m_in": "value ÷ 0.0254",
                    "m_ft": "value ÷ 0.3048",
                    "m_yd": "value ÷ 0.9144",
                    "m_mi": "value ÷ 1609.344",
                    
                    "km_m": "value × 1000",
                    "km_cm": "value × 100000",
                    "km_mm": "value × 1000000",
                    "km_in": "value × 39370.1",
                    "km_ft": "value × 3280.84",
                    "km_yd": "value × 1093.61",
                    "km_mi": "value × 0.621371",
                    
                    "cm_m": "value ÷ 100",
                    "cm_km": "value ÷ 100000",
                    "cm_mm": "value × 10",
                    "cm_in": "value ÷ 2.54",
                    "cm_ft": "value ÷ 30.48",
                    "cm_yd": "value ÷ 91.44",
                    "cm_mi": "value ÷ 160934",
                    
                    "mm_m": "value ÷ 1000",
                    "mm_km": "value ÷ 1000000",
                    "mm_cm": "value ÷ 10",
                    "mm_in": "value ÷ 25.4",
                    "mm_ft": "value ÷ 304.8",
                    "mm_yd": "value ÷ 914.4",
                    "mm_mi": "value ÷ 1609344",
                    
                    "in_m": "value × 0.0254",
                    "in_km": "value × 0.0000254",
                    "in_cm": "value × 2.54",
                    "in_mm": "value × 25.4",
                    "in_ft": "value ÷ 12",
                    "in_yd": "value ÷ 36",
                    "in_mi": "value ÷ 63360",
                    
                    "ft_m": "value × 0.3048",
                    "ft_km": "value × 0.0003048",
                    "ft_cm": "value × 30.48",
                    "ft_mm": "value × 304.8",
                    "ft_in": "value × 12",
                    "ft_yd": "value ÷ 3",
                    "ft_mi": "value ÷ 5280",
                    
                    "yd_m": "value × 0.9144",
                    "yd_km": "value × 0.0009144",
                    "yd_cm": "value × 91.44",
                    "yd_mm": "value × 914.4",
                    "yd_in": "value × 36",
                    "yd_ft": "value × 3",
                    "yd_mi": "value ÷ 1760",
                    
                    "mi_m": "value × 1609.344",
                    "mi_km": "value × 1.609344",
                    "mi_cm": "value × 160934.4",
                    "mi_mm": "value × 1609344",
                    "mi_in": "value × 63360",
                    "mi_ft": "value × 5280",
                    "mi_yd": "value × 1760"
                };
                
                const key = `${fromUnit}_${toUnit}`;
                return formulas[key] || "Custom conversion";
            }
        },
        weight: {
            name: "Weight Converter",
            units: [
                { id: "kg", name: "Kilogram (kg)" },
                { id: "g", name: "Gram (g)" },
                { id: "mg", name: "Milligram (mg)" },
                { id: "lb", name: "Pound (lb)" },
                { id: "oz", name: "Ounce (oz)" },
                { id: "ton", name: "Metric Ton (t)" },
                { id: "st", name: "Stone (st)" },
                { id: "uston", name: "US Ton" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to kg first (base unit)
                let kg = 0;
                
                switch (fromUnit) {
                    case "kg": kg = value; break;
                    case "g": kg = value / 1000; break;
                    case "mg": kg = value / 1000000; break;
                    case "lb": kg = value * 0.453592; break;
                    case "oz": kg = value * 0.0283495; break;
                    case "ton": kg = value * 1000; break;
                    case "st": kg = value * 6.35029; break;
                    case "uston": kg = value * 907.185; break;
                }
                
                // Convert from kg to target unit
                switch (toUnit) {
                    case "kg": return kg;
                    case "g": return kg * 1000;
                    case "mg": return kg * 1000000;
                    case "lb": return kg / 0.453592;
                    case "oz": return kg / 0.0283495;
                    case "ton": return kg / 1000;
                    case "st": return kg / 6.35029;
                    case "uston": return kg / 907.185;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Weight conversion formula applied";
            }
        },
        temperature: {
            name: "Temperature Converter",
            units: [
                { id: "c", name: "Celsius (°C)" },
                { id: "f", name: "Fahrenheit (°F)" },
                { id: "k", name: "Kelvin (K)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Temperature conversions
                if (fromUnit === "c" && toUnit === "f") {
                    return (value * 9/5) + 32;
                } else if (fromUnit === "c" && toUnit === "k") {
                    return value + 273.15;
                } else if (fromUnit === "f" && toUnit === "c") {
                    return (value - 32) * 5/9;
                } else if (fromUnit === "f" && toUnit === "k") {
                    return (value - 32) * 5/9 + 273.15;
                } else if (fromUnit === "k" && toUnit === "c") {
                    return value - 273.15;
                } else if (fromUnit === "k" && toUnit === "f") {
                    return (value - 273.15) * 9/5 + 32;
                } else {
                    return value; // Same unit
                }
            },
            getFormula: function(fromUnit, toUnit) {
                if (fromUnit === "c" && toUnit === "f") {
                    return "(value × 9/5) + 32";
                } else if (fromUnit === "c" && toUnit === "k") {
                    return "value + 273.15";
                } else if (fromUnit === "f" && toUnit === "c") {
                    return "(value - 32) × 5/9";
                } else if (fromUnit === "f" && toUnit === "k") {
                    return "(value - 32) × 5/9 + 273.15";
                } else if (fromUnit === "k" && toUnit === "c") {
                    return "value - 273.15";
                } else if (fromUnit === "k" && toUnit === "f") {
                    return "(value - 273.15) × 9/5 + 32";
                } else {
                    return "No conversion needed";
                }
            }
        },
        time: {
            name: "Time Converter",
            units: [
                { id: "s", name: "Second (s)" },
                { id: "min", name: "Minute (min)" },
                { id: "h", name: "Hour (h)" },
                { id: "day", name: "Day" },
                { id: "week", name: "Week" },
                { id: "month", name: "Month (30 days)" },
                { id: "year", name: "Year (365 days)" },
                { id: "ms", name: "Millisecond (ms)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to seconds first (base unit)
                let seconds = 0;
                
                switch (fromUnit) {
                    case "s": seconds = value; break;
                    case "min": seconds = value * 60; break;
                    case "h": seconds = value * 3600; break;
                    case "day": seconds = value * 86400; break;
                    case "week": seconds = value * 604800; break;
                    case "month": seconds = value * 2592000; break; // 30 days
                    case "year": seconds = value * 31536000; break; // 365 days
                    case "ms": seconds = value / 1000; break;
                }
                
                // Convert from seconds to target unit
                switch (toUnit) {
                    case "s": return seconds;
                    case "min": return seconds / 60;
                    case "h": return seconds / 3600;
                    case "day": return seconds / 86400;
                    case "week": return seconds / 604800;
                    case "month": return seconds / 2592000;
                    case "year": return seconds / 31536000;
                    case "ms": return seconds * 1000;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Time conversion formula applied";
            }
        },
        area: {
            name: "Area Converter",
            units: [
                { id: "m2", name: "Square Meter (m²)" },
                { id: "km2", name: "Square Kilometer (km²)" },
                { id: "cm2", name: "Square Centimeter (cm²)" },
                { id: "mm2", name: "Square Millimeter (mm²)" },
                { id: "ha", name: "Hectare (ha)" },
                { id: "acre", name: "Acre" },
                { id: "ft2", name: "Square Foot (ft²)" },
                { id: "in2", name: "Square Inch (in²)" },
                { id: "yd2", name: "Square Yard (yd²)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to square meters first (base unit)
                let sqMeters = 0;
                
                switch (fromUnit) {
                    case "m2": sqMeters = value; break;
                    case "km2": sqMeters = value * 1000000; break;
                    case "cm2": sqMeters = value * 0.0001; break;
                    case "mm2": sqMeters = value * 0.000001; break;
                    case "ha": sqMeters = value * 10000; break;
                    case "acre": sqMeters = value * 4046.86; break;
                    case "ft2": sqMeters = value * 0.092903; break;
                    case "in2": sqMeters = value * 0.00064516; break;
                    case "yd2": sqMeters = value * 0.836127; break;
                }
                
                // Convert from square meters to target unit
                switch (toUnit) {
                    case "m2": return sqMeters;
                    case "km2": return sqMeters / 1000000;
                    case "cm2": return sqMeters / 0.0001;
                    case "mm2": return sqMeters / 0.000001;
                    case "ha": return sqMeters / 10000;
                    case "acre": return sqMeters / 4046.86;
                    case "ft2": return sqMeters / 0.092903;
                    case "in2": return sqMeters / 0.00064516;
                    case "yd2": return sqMeters / 0.836127;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Area conversion formula applied";
            }
        },
        volume: {
            name: "Volume Converter",
            units: [
                { id: "m3", name: "Cubic Meter (m³)" },
                { id: "cm3", name: "Cubic Centimeter (cm³)" },
                { id: "mm3", name: "Cubic Millimeter (mm³)" },
                { id: "l", name: "Liter (L)" },
                { id: "ml", name: "Milliliter (mL)" },
                { id: "gal", name: "US Gallon" },
                { id: "qt", name: "US Quart" },
                { id: "pt", name: "US Pint" },
                { id: "cup", name: "US Cup" },
                { id: "floz", name: "US Fluid Ounce" },
                { id: "tbsp", name: "Tablespoon" },
                { id: "tsp", name: "Teaspoon" },
                { id: "in3", name: "Cubic Inch (in³)" },
                { id: "ft3", name: "Cubic Foot (ft³)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to cubic meters first (base unit)
                let cubicMeters = 0;
                
                switch (fromUnit) {
                    case "m3": cubicMeters = value; break;
                    case "cm3": cubicMeters = value * 0.000001; break;
                    case "mm3": cubicMeters = value * 0.000000001; break;
                    case "l": cubicMeters = value * 0.001; break;
                    case "ml": cubicMeters = value * 0.000001; break;
                    case "gal": cubicMeters = value * 0.00378541; break;
                    case "qt": cubicMeters = value * 0.000946353; break;
                    case "pt": cubicMeters = value * 0.000473176; break;
                    case "cup": cubicMeters = value * 0.000236588; break;
                    case "floz": cubicMeters = value * 0.0000295735; break;
                    case "tbsp": cubicMeters = value * 0.0000147868; break;
                    case "tsp": cubicMeters = value * 0.00000492892; break;
                    case "in3": cubicMeters = value * 0.0000163871; break;
                    case "ft3": cubicMeters = value * 0.0283168; break;
                }
                
                // Convert from cubic meters to target unit
                switch (toUnit) {
                    case "m3": return cubicMeters;
                    case "cm3": return cubicMeters / 0.000001;
                    case "mm3": return cubicMeters / 0.000000001;
                    case "l": return cubicMeters / 0.001;
                    case "ml": return cubicMeters / 0.000001;
                    case "gal": return cubicMeters / 0.00378541;
                    case "qt": return cubicMeters / 0.000946353;
                    case "pt": return cubicMeters / 0.000473176;
                    case "cup": return cubicMeters / 0.000236588;
                    case "floz": return cubicMeters / 0.0000295735;
                    case "tbsp": return cubicMeters / 0.0000147868;
                    case "tsp": return cubicMeters / 0.00000492892;
                    case "in3": return cubicMeters / 0.0000163871;
                    case "ft3": return cubicMeters / 0.0283168;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Volume conversion formula applied";
            }
        },
        speed: {
            name: "Speed Converter",
            units: [
                { id: "mps", name: "Meters per Second (m/s)" },
                { id: "kph", name: "Kilometers per Hour (km/h)" },
                { id: "mph", name: "Miles per Hour (mph)" },
                { id: "fps", name: "Feet per Second (ft/s)" },
                { id: "knot", name: "Knot (nautical mile/hour)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to m/s first (base unit)
                let mps = 0;
                
                switch (fromUnit) {
                    case "mps": mps = value; break;
                    case "kph": mps = value * 0.277778; break;
                    case "mph": mps = value * 0.44704; break;
                    case "fps": mps = value * 0.3048; break;
                    case "knot": mps = value * 0.514444; break;
                }
                
                // Convert from m/s to target unit
                switch (toUnit) {
                    case "mps": return mps;
                    case "kph": return mps / 0.277778;
                    case "mph": return mps / 0.44704;
                    case "fps": return mps / 0.3048;
                    case "knot": return mps / 0.514444;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Speed conversion formula applied";
            }
        },
        pressure: {
            name: "Pressure Converter",
            units: [
                { id: "pa", name: "Pascal (Pa)" },
                { id: "kpa", name: "Kilopascal (kPa)" },
                { id: "mpa", name: "Megapascal (MPa)" },
                { id: "bar", name: "Bar" },
                { id: "psi", name: "Pounds per Square Inch (psi)" },
                { id: "atm", name: "Atmosphere (atm)" },
                { id: "torr", name: "Torr" },
                { id: "mmhg", name: "Millimeters of Mercury (mmHg)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to pascals first (base unit)
                let pascals = 0;
                
                switch (fromUnit) {
                    case "pa": pascals = value; break;
                    case "kpa": pascals = value * 1000; break;
                    case "mpa": pascals = value * 1000000; break;
                    case "bar": pascals = value * 100000; break;
                    case "psi": pascals = value * 6894.76; break;
                    case "atm": pascals = value * 101325; break;
                    case "torr": pascals = value * 133.322; break;
                    case "mmhg": pascals = value * 133.322; break;
                }
                
                // Convert from pascals to target unit
                switch (toUnit) {
                    case "pa": return pascals;
                    case "kpa": return pascals / 1000;
                    case "mpa": return pascals / 1000000;
                    case "bar": return pascals / 100000;
                    case "psi": return pascals / 6894.76;
                    case "atm": return pascals / 101325;
                    case "torr": return pascals / 133.322;
                    case "mmhg": return pascals / 133.322;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Pressure conversion formula applied";
            }
        },
        energy: {
            name: "Energy Converter",
            units: [
                { id: "j", name: "Joule (J)" },
                { id: "kj", name: "Kilojoule (kJ)" },
                { id: "cal", name: "Calorie (cal)" },
                { id: "kcal", name: "Kilocalorie (kcal)" },
                { id: "wh", name: "Watt-hour (Wh)" },
                { id: "kwh", name: "Kilowatt-hour (kWh)" },
                { id: "ev", name: "Electronvolt (eV)" },
                { id: "btu", name: "British Thermal Unit (BTU)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to joules first (base unit)
                let joules = 0;
                
                switch (fromUnit) {
                    case "j": joules = value; break;
                    case "kj": joules = value * 1000; break;
                    case "cal": joules = value * 4.184; break;
                    case "kcal": joules = value * 4184; break;
                    case "wh": joules = value * 3600; break;
                    case "kwh": joules = value * 3600000; break;
                    case "ev": joules = value * 1.602176634e-19; break;
                    case "btu": joules = value * 1055.06; break;
                }
                
                // Convert from joules to target unit
                switch (toUnit) {
                    case "j": return joules;
                    case "kj": return joules / 1000;
                    case "cal": return joules / 4.184;
                    case "kcal": return joules / 4184;
                    case "wh": return joules / 3600;
                    case "kwh": return joules / 3600000;
                    case "ev": return joules / 1.602176634e-19;
                    case "btu": return joules / 1055.06;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Energy conversion formula applied";
            }
        },
        power: {
            name: "Power Converter",
            units: [
                { id: "w", name: "Watt (W)" },
                { id: "kw", name: "Kilowatt (kW)" },
                { id: "mw", name: "Megawatt (MW)" },
                { id: "hp", name: "Horsepower (hp)" },
                { id: "btuh", name: "BTU per hour" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to watts first (base unit)
                let watts = 0;
                
                switch (fromUnit) {
                    case "w": watts = value; break;
                    case "kw": watts = value * 1000; break;
                    case "mw": watts = value * 1000000; break;
                    case "hp": watts = value * 745.7; break;
                    case "btuh": watts = value * 0.29307107; break;
                }
                
                // Convert from watts to target unit
                switch (toUnit) {
                    case "w": return watts;
                    case "kw": return watts / 1000;
                    case "mw": return watts / 1000000;
                    case "hp": return watts / 745.7;
                    case "btuh": return watts / 0.29307107;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Power conversion formula applied";
            }
        },
        dataStorage: {
            name: "Data Storage Converter",
            units: [
                { id: "bit", name: "Bit" },
                { id: "byte", name: "Byte" },
                { id: "kb", name: "Kilobyte (KB)" },
                { id: "mb", name: "Megabyte (MB)" },
                { id: "gb", name: "Gigabyte (GB)" },
                { id: "tb", name: "Terabyte (TB)" },
                { id: "pb", name: "Petabyte (PB)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to bits first (base unit)
                let bits = 0;
                
                switch (fromUnit) {
                    case "bit": bits = value; break;
                    case "byte": bits = value * 8; break;
                    case "kb": bits = value * 8 * 1024; break;
                    case "mb": bits = value * 8 * 1024 * 1024; break;
                    case "gb": bits = value * 8 * 1024 * 1024 * 1024; break;
                    case "tb": bits = value * 8 * 1024 * 1024 * 1024 * 1024; break;
                    case "pb": bits = value * 8 * 1024 * 1024 * 1024 * 1024 * 1024; break;
                }
                
                // Convert from bits to target unit
                switch (toUnit) {
                    case "bit": return bits;
                    case "byte": return bits / 8;
                    case "kb": return bits / (8 * 1024);
                    case "mb": return bits / (8 * 1024 * 1024);
                    case "gb": return bits / (8 * 1024 * 1024 * 1024);
                    case "tb": return bits / (8 * 1024 * 1024 * 1024 * 1024);
                    case "pb": return bits / (8 * 1024 * 1024 * 1024 * 1024 * 1024);
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Data storage conversion formula applied";
            }
        },
        angle: {
            name: "Angle Converter",
            units: [
                { id: "deg", name: "Degree (°)" },
                { id: "rad", name: "Radian (rad)" },
                { id: "grad", name: "Gradian (grad)" },
                { id: "min", name: "Minute (')" },
                { id: "sec", name: "Second (\")" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to radians first (base unit)
                let radians = 0;
                
                switch (fromUnit) {
                    case "deg": radians = value * (Math.PI / 180); break;
                    case "rad": radians = value; break;
                    case "grad": radians = value * (Math.PI / 200); break;
                    case "min": radians = value * (Math.PI / 10800); break; // 60 minutes = 1 degree
                    case "sec": radians = value * (Math.PI / 648000); break; // 3600 seconds = 1 degree
                }
                
                // Convert from radians to target unit
                switch (toUnit) {
                    case "deg": return radians * (180 / Math.PI);
                    case "rad": return radians;
                    case "grad": return radians * (200 / Math.PI);
                    case "min": return radians * (10800 / Math.PI);
                    case "sec": return radians * (648000 / Math.PI);
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Angle conversion formula applied";
            }
        },
        fuelEfficiency: {
            name: "Fuel Efficiency Converter",
            units: [
                { id: "mpgus", name: "Miles per Gallon (US)" },
                { id: "mpguk", name: "Miles per Gallon (UK)" },
                { id: "kml", name: "Kilometers per Liter (km/L)" },
                { id: "lp100km", name: "Liters per 100 km (L/100km)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to L/100km first (base unit)
                let lp100km = 0;

                switch (fromUnit) {
                    case "mpgus": lp100km = 235.214 / value; break;
                    case "mpguk": lp100km = 282.481 / value; break;
                    case "kml": lp100km = 100 / value; break;
                    case "lp100km": lp100km = value; break;
                }
                
                // Convert from L/100km to target unit
                switch (toUnit) {
                    case "mpgus": return 235.214 / lp100km;
                    case "mpguk": return 282.481 / lp100km;
                    case "kml": return 100 / lp100km;
                    case "lp100km": return lp100km;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Fuel efficiency conversion formula applied";
            }
        },
        frequency: {
            name: "Frequency Converter",
            units: [
                { id: "hz", name: "Hertz (Hz)" },
                { id: "khz", name: "Kilohertz (kHz)" },
                { id: "mhz", name: "Megahertz (MHz)" },
                { id: "ghz", name: "Gigahertz (GHz)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to hertz first (base unit)
                let hertz = 0;
                
                switch (fromUnit) {
                    case "hz": hertz = value; break;
                    case "khz": hertz = value * 1000; break;
                    case "mhz": hertz = value * 1000000; break;
                    case "ghz": hertz = value * 1000000000; break;
                }
                
                // Convert from hertz to target unit
                switch (toUnit) {
                    case "hz": return hertz;
                    case "khz": return hertz / 1000;
                    case "mhz": return hertz / 1000000;
                    case "ghz": return hertz / 1000000000;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Frequency conversion formula applied";
            }
        }
    },
    fabric: {
        gsm: {
            name: "GSM Converter",
            units: [
                { id: "gsm", name: "Grams per Square Meter (GSM)" },
                { id: "oz_yd2", name: "Ounces per Square Yard (oz/yd²)" },
                { id: "lb_1000ft2", name: "Pounds per 1000 Square Feet (lb/1000ft²)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to GSM first (base unit)
                let gsm = 0;
                
                switch (fromUnit) {
                    case "gsm": gsm = value; break;
                    case "oz_yd2": gsm = value * 33.906; break;
                    case "lb_1000ft2": gsm = value * 4.8824; break;
                }
                
                // Convert from GSM to target unit
                switch (toUnit) {
                    case "gsm": return gsm;
                    case "oz_yd2": return gsm / 33.906;
                    case "lb_1000ft2": return gsm / 4.8824;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "GSM conversion formula applied";
            }
        },
        thickness: {
            name: "Thickness Converter",
            units: [
                { id: "mm", name: "Millimeter (mm)" },
                { id: "um", name: "Micrometer (µm)" },
                { id: "mil", name: "Mil (thou)" },
                { id: "pt", name: "Point (pt)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to mm first (base unit)
                let mm = 0;
                
                switch (fromUnit) {
                    case "mm": mm = value; break;
                    case "um": mm = value / 1000; break;
                    case "mil": mm = value * 0.0254; break;
                    case "pt": mm = value * 0.3528; break;
                }
                
                // Convert from mm to target unit
                switch (toUnit) {
                    case "mm": return mm;
                    case "um": return mm * 1000;
                    case "mil": return mm / 0.0254;
                    case "pt": return mm / 0.3528;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Thickness conversion formula applied";
            }
        },
        elongation: {
            name: "Elongation Converter",
            units: [
                { id: "percent", name: "Percent (%)" },
                { id: "mm", name: "Millimeter (mm)" },
                { id: "cm", name: "Centimeter (cm)" },
                { id: "inch", name: "Inch (in)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // This is a simplified conversion - actual elongation would depend on original length
                // Assuming a standard test length of 100mm
                const standardLength = 100; // mm
                
                // Convert to mm first
                let mm = 0;
                
                switch (fromUnit) {
                    case "percent": mm = value * standardLength / 100; break;
                    case "mm": mm = value; break;
                    case "cm": mm = value * 10; break;
                    case "inch": mm = value * 25.4; break;
                }
                
                // Convert from mm to target unit
                switch (toUnit) {
                    case "percent": return mm * 100 / standardLength;
                    case "mm": return mm;
                    case "cm": return mm / 10;
                    case "inch": return mm / 25.4;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Elongation conversion formula applied";
            }
        },
        moistureContent: {
            name: "Moisture Content Converter",
            units: [
                { id: "percent", name: "Percent (%)" },
                { id: "gsm", name: "Grams per Square Meter (g/m²)" },
                { id: "lb_ream", name: "Pounds per Ream (lb/ream)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // This is a simplified conversion - actual moisture content would depend on basis weight
                // Assuming a standard basis weight of 100 g/m²
                const standardBasisWeight = 100; // g/m²
                
                // Convert to % first
                let percent = 0;
                
                switch (fromUnit) {
                    case "percent": percent = value; break;
                    case "gsm": percent = (value / standardBasisWeight) * 100; break;
                    case "lb_ream": percent = (value * 1.63 / standardBasisWeight) * 100; break;
                }
                
                // Convert from % to target unit
                switch (toUnit) {
                    case "percent": return percent;
                    case "gsm": return (percent * standardBasisWeight) / 100;
                    case "lb_ream": return (percent * standardBasisWeight) / 100 / 1.63;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Moisture content conversion formula applied";
            }
        }
    },
    metal: {
        hardness: {
            name: "Hardness Converter",
            units: [
                { id: "hrc", name: "Rockwell C (HRC)" },
                { id: "hrb", name: "Rockwell B (HRB)" },
                { id: "hb", name: "Brinell (HB)" },
                { id: "hv", name: "Vickers (HV)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // These are approximate conversions
                // Convert to HRC first (base unit)
                let hrc = 0;
                
                switch (fromUnit) {
                    case "hrc": hrc = value; break;
                    case "hrb": hrc = (value - 100) * 0.2; break;
                    case "hb": hrc = value * 0.1; break;
                    case "hv": hrc = value * 0.1; break;
                }
                
                // Convert from HRC to target unit
                switch (toUnit) {
                    case "hrc": return hrc;
                    case "hrb": return (hrc / 0.2) + 100;
                    case "hb": return hrc / 0.1;
                    case "hv": return hrc / 0.1;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Hardness conversion formula applied (approximate)";
            }
        },
        tensileStrength: {
            name: "Tensile Strength Converter",
            units: [
                { id: "mpa", name: "Megapascal (MPa)" },
                { id: "psi", name: "Pounds per Square Inch (psi)" },
                { id: "ksi", name: "Kilopounds per Square Inch (ksi)" },
                { id: "kgf_mm2", name: "Kilogram-force per Square Millimeter (kgf/mm²)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to MPa first (base unit)
                let mpa = 0;
                
                switch (fromUnit) {
                    case "mpa": mpa = value; break;
                    case "psi": mpa = value * 0.00689476; break;
                    case "ksi": mpa = value * 6.89476; break;
                    case "kgf_mm2": mpa = value * 9.80665; break;
                }
                
                // Convert from MPa to target unit
                switch (toUnit) {
                    case "mpa": return mpa;
                    case "psi": return mpa / 0.00689476;
                    case "ksi": return mpa / 6.89476;
                    case "kgf_mm2": return mpa / 9.80665;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Tensile strength conversion formula applied";
            }
        },
        yieldStrength: {
            name: "Yield Strength Converter",
            units: [
                { id: "mpa", name: "Megapascal (MPa)" },
                { id: "psi", name: "Pounds per Square Inch (psi)" },
                { id: "ksi", name: "Kilopounds per Square Inch (ksi)" },
                { id: "kgf_mm2", name: "Kilogram-force per Square Millimeter (kgf/mm²)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to MPa first (base unit)
                let mpa = 0;
                
                switch (fromUnit) {
                    case "mpa": mpa = value; break;
                    case "psi": mpa = value * 0.00689476; break;
                    case "ksi": mpa = value * 6.89476; break;
                    case "kgf_mm2": mpa = value * 9.80665; break;
                }
                
                // Convert from MPa to target unit
                switch (toUnit) {
                    case "mpa": return mpa;
                    case "psi": return mpa / 0.00689476;
                    case "ksi": return mpa / 6.89476;
                    case "kgf_mm2": return mpa / 9.80665;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Yield strength conversion formula applied";
            }
        }
    },
    plastic: {
        micron: {
            name: "Micron Converter",
            units: [
                { id: "um", name: "Micrometer (µm)" },
                { id: "mil", name: "Mil (thou)" },
                { id: "gauge", name: "Gauge" },
                { id: "mm", name: "Millimeter (mm)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to microns first (base unit)
                let microns = 0;
                
                switch (fromUnit) {
                    case "um": microns = value; break;
                    case "mil": microns = value * 25.4; break;
                    case "gauge": microns = value * 0.254; break; // Assuming plastic film gauge
                    case "mm": microns = value * 1000; break;
                }
                
                // Convert from microns to target unit
                switch (toUnit) {
                    case "um": return microns;
                    case "mil": return microns / 25.4;
                    case "gauge": return microns / 0.254;
                    case "mm": return microns / 1000;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Micron thickness conversion formula applied";
            }
        },
        burstingStrength: {
            name: "Bursting Strength Converter",
            units: [
                { id: "kpa", name: "Kilopascal (kPa)" },
                { id: "psi", name: "Pounds per Square Inch (psi)" },
                { id: "kgf_cm2", name: "Kilogram-force per Square Centimeter (kgf/cm²)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to kPa first (base unit)
                let kpa = 0;
                
                switch (fromUnit) {
                    case "kpa": kpa = value; break;
                    case "psi": kpa = value * 6.89476; break;
                    case "kgf_cm2": kpa = value * 98.0665; break;
                }
                
                // Convert from kPa to target unit
                switch (toUnit) {
                    case "kpa": return kpa;
                    case "psi": return kpa / 6.89476;
                    case "kgf_cm2": return kpa / 98.0665;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Bursting strength conversion formula applied";
            }
        },
        tearResistance: {
            name: "Tear Resistance Converter",
            units: [
                { id: "n", name: "Newton (N)" },
                { id: "gf", name: "Gram-force (gf)" },
                { id: "mn", name: "Millinewton (mN)" },
                { id: "lbf", name: "Pound-force (lbf)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to N first (base unit)
                let newtons = 0;
                
                switch (fromUnit) {
                    case "n": newtons = value; break;
                    case "gf": newtons = value * 0.00980665; break;
                    case "mn": newtons = value * 0.001; break;
                    case "lbf": newtons = value * 4.44822; break;
                }
                
                // Convert from N to target unit
                switch (toUnit) {
                    case "n": return newtons;
                    case "gf": return newtons / 0.00980665;
                    case "mn": return newtons / 0.001;
                    case "lbf": return newtons / 4.44822;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Tear resistance conversion formula applied";
            }
        }
    },
    construction: {
        compressiveStrength: {
            name: "Compressive Strength Converter",
            units: [
                { id: "mpa", name: "Megapascal (MPa)" },
                { id: "psi", name: "Pounds per Square Inch (psi)" },
                { id: "n_mm2", name: "Newton per Square Millimeter (N/mm²)" },
                { id: "kgf_cm2", name: "Kilogram-force per Square Centimeter (kgf/cm²)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to MPa first (base unit)
                let mpa = 0;
                
                switch (fromUnit) {
                    case "mpa": mpa = value; break;
                    case "psi": mpa = value * 0.00689476; break;
                    case "n_mm2": mpa = value; break; // N/mm² is equivalent to MPa
                    case "kgf_cm2": mpa = value * 0.0980665; break;
                }
                
                // Convert from MPa to target unit
                switch (toUnit) {
                    case "mpa": return mpa;
                    case "psi": return mpa / 0.00689476;
                    case "n_mm2": return mpa;
                    case "kgf_cm2": return mpa / 0.0980665;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Compressive strength conversion formula applied";
            }
        },
        density: {
            name: "Density Converter",
            units: [
                { id: "kg_m3", name: "Kilograms per Cubic Meter (kg/m³)" },
                { id: "g_cm3", name: "Grams per Cubic Centimeter (g/cm³)" },
                { id: "lb_ft3", name: "Pounds per Cubic Foot (lb/ft³)" },
                { id: "lb_gal", name: "Pounds per Gallon (lb/gal)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to kg/m³ first (base unit)
                let kgm3 = 0;

                switch (fromUnit) {
                    case "kg_m3": kgm3 = value; break;
                    case "g_cm3": kgm3 = value * 1000; break;
                    case "lb_ft3": kgm3 = value * 16.0185; break;
                    case "lb_gal": kgm3 = value * 119.826; break;
                }
                
                // Convert from kg/m³ to target unit
                switch (toUnit) {
                    case "kg_m3": return kgm3;
                    case "g_cm3": return kgm3 / 1000;
                    case "lb_ft3": return kgm3 / 16.0185;
                    case "lb_gal": return kgm3 / 119.826;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Density conversion formula applied";
            }
        },
        woodMoistureContent: {
            name: "Wood Moisture Content Converter",
            units: [
                { id: "percent", name: "Percent (%)" },
                { id: "kg_m3", name: "Kilograms per Cubic Meter (kg/m³)" },
                { id: "lb_ft3", name: "Pounds per Cubic Foot (lb/ft³)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // This is a simplified conversion - actual moisture content would depend on wood density
                // Assuming a standard wood density of 500 kg/m³ (dry)
                const standardWoodDensity = 500; // kg/m³
                
                // Convert to % first
                let percent = 0;
                
                switch (fromUnit) {
                    case "percent": percent = value; break;
                    case "kg_m3": percent = (value / standardWoodDensity) * 100; break;
                    case "lb_ft3": percent = (value * 16.0185 / standardWoodDensity) * 100; break;
                }
                
                // Convert from % to target unit
                switch (toUnit) {
                    case "percent": return percent;
                    case "kg_m3": return (percent * standardWoodDensity) / 100;
                    case "lb_ft3": return (percent * standardWoodDensity) / 100 / 16.0185;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Wood moisture content conversion formula applied";
            }
        },
        flexuralStrength: {
            name: "Flexural Strength Converter",
            units: [
                { id: "mpa", name: "Megapascal (MPa)" },
                { id: "psi", name: "Pounds per Square Inch (psi)" },
                { id: "n_mm2", name: "Newton per Square Millimeter (N/mm²)" },
                { id: "kgf_cm2", name: "Kilogram-force per Square Centimeter (kgf/cm²)" }
            ],
            convert: function(value, fromUnit, toUnit) {
                // Convert to MPa first (base unit)
                let mpa = 0;
                
                switch (fromUnit) {
                    case "mpa": mpa = value; break;
                    case "psi": mpa = value * 0.00689476; break;
                    case "n_mm2": mpa = value; break; // N/mm² is equivalent to MPa
                    case "kgf_cm2": mpa = value * 0.0980665; break;
                }
                
                // Convert from MPa to target unit
                switch (toUnit) {
                    case "mpa": return mpa;
                    case "psi": return mpa / 0.00689476;
                    case "n_mm2": return mpa;
                    case "kgf_cm2": return mpa / 0.0980665;
                    default: return value;
                }
            },
            getFormula: function(fromUnit, toUnit) {
                return "Flexural strength conversion formula applied";
            }
        }
    }
};

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const tabButtons = document.querySelectorAll('.tab-btn');
    const converterSelect = document.getElementById('converter-type');
    const fromUnitSelect = document.getElementById('from-unit');
    const toUnitSelect = document.getElementById('to-unit');
    const fromValueInput = document.getElementById('from-value');
    const toValueInput = document.getElementById('to-value');
    const convertBtn = document.getElementById('convert-btn');
    const formulaText = document.getElementById('formula-text');
    
    // Current state
    let currentCategory = 'general';
    let currentConverter = '';
    
    // Initialize the app
    initializeApp();
    
    // Set up event listeners
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current category
            currentCategory = this.dataset.category;
            
            // Update converter select
            populateConverterSelect();
        });
    });
    
    converterSelect.addEventListener('change', function() {
        currentConverter = this.value;
        populateUnitSelects();
    });
    
    fromUnitSelect.addEventListener('change', updateFormula);
    toUnitSelect.addEventListener('change', updateFormula);
    
    convertBtn.addEventListener('click', performConversion);
    
    // Also perform conversion when input value changes or when pressing Enter
    fromValueInput.addEventListener('input', performConversion);
    fromValueInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performConversion();
        }
    });
    
    // Functions
    function initializeApp() {
        populateConverterSelect();
    }
    
    function populateConverterSelect() {
        // Clear previous options
        converterSelect.innerHTML = '';
        
        // Get converters for current category
        const categoryConverters = converterData[currentCategory];
        
        // Add options for each converter
        for (const key in categoryConverters) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = categoryConverters[key].name;
            converterSelect.appendChild(option);
        }
        
        // Set current converter and update unit selects
        currentConverter = converterSelect.value;
        populateUnitSelects();
    }
    
    function populateUnitSelects() {
        // Clear previous options
        fromUnitSelect.innerHTML = '';
        toUnitSelect.innerHTML = '';
        
        // Get units for current converter
        const units = converterData[currentCategory][currentConverter].units;
        
        // Add options for each unit
        units.forEach(unit => {
            const fromOption = document.createElement('option');
            fromOption.value = unit.id;
            fromOption.textContent = unit.name;
            fromUnitSelect.appendChild(fromOption);
            
            const toOption = document.createElement('option');
            toOption.value = unit.id;
            toOption.textContent = unit.name;
            toUnitSelect.appendChild(toOption);
        });
        
        // Set default to unit to be different from from unit if possible
        if (units.length > 1) {
            toUnitSelect.selectedIndex = 1;
        }
        
        // Update formula
        updateFormula();
    }
    
    function updateFormula() {
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        
        if (fromUnit && toUnit) {
            const formula = converterData[currentCategory][currentConverter].getFormula(fromUnit, toUnit);
            formulaText.textContent = formula;
        }
    }
    
    function performConversion() {
        const value = parseFloat(fromValueInput.value);
        
        if (isNaN(value)) {
            toValueInput.value = '';
            return;
        }
        
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        
        if (fromUnit && toUnit) {
            const result = converterData[currentCategory][currentConverter].convert(value, fromUnit, toUnit);
            toValueInput.value = result.toFixed(6);
            updateFormula();
        }
    }
});