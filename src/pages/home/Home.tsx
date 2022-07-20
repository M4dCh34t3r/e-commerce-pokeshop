import Section from "../../components/section/Section";

export function Home() {
  return(
    <>
      <Section 
      sectionName="POKÉBALLS"
      shopItems={ [
        {
          id: 0,
          name: "DIVE BALL",
          price: 1000,
          description: "A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater.",
          image: "./images/diveball.png"
        },
        {
          id: 1,
          name: "DUSK BALL",
          price: 1000,
          description: "A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves.",
          image: "./images/duskball.png"
        },
        {
          id: 2,
          name: "GREAT BALL",
          price: 600,
          description: "A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball can.",
          image: "./images/greatball.png"
        },
        {
          id: 3,
          name: "HEAL BALL",
          price: 300,
          description: "A remedial Poké Ball that restores the HP of a Pokémon caught with it and eliminates any status conditions.",
          image: "./images/healball.png"
        },
        {
          id: 4,
          name: "LUXURY BALL",
          price: 1000,
          description: "A particularly comfortable Poké Ball that makes a wild Pokémon quickly grow friendlier after being caught.",
          image: "./images/luxuryball.png"
        },
        {
          id: 5,
          name: "NEST BALL",
          price: 1000,
          description: "A somewhat different Poké Ball that becomes more effective the lower the level of the wild Pokémon.",
          image: "./images/nestball.png"
        },
        {
          id: 6,
          name: "NET BALL",
          price: 1000,
          description: "A somewhat different Poké Ball that is more effective when attempting to catch Water-type or Bug-type Pokémon.",
          image: "./images/netball.png"
        },
        {
          id: 7,
          name: "POKÉ BALL",
          price: 200,
          description: "A device for catching wild Pokémon. It's thrown like a ball at a Pokémon, comfortably encapsulating its target.",
          image: "./images/pokeball.png"
        },
        {
          id: 8,
          name: "QUICK BALL",
          price: 1000,
          description: "A somewhat different Poké Ball that has a more successful catch rate if used at the start of a wild encounter.",
          image: "./images/quickball.png"
        },
        {
          id: 9,
          name: "REPEAT BALL",
          price: 1000,
          description: "A somewhat different Poké Ball that works especially well on a Pokémon species that has been caught before.",
          image: "./images/repeatball.png"
        },
        {
          id: 10,
          name: "TIMER BALL",
          price: 1000,
          description: "A somewhat different Poké Ball that becomes progressively more effective the more turns that are taken in battle.",
          image: "./images/timerball.png"
        },
        {
          id: 11,
          name: "ULTRA BALL",
          price: 1200,
          description: "An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball.",
          image: "./images/ultraball.png"
        }
      ] }
      />
      <Section 
      sectionName="EVOLUTIONARY ITEMS"
      shopItems={ [
        {
          id: 12,
          name: "DUBIOUS DISC",
          price: 2100,
          description: "A transparent device overflowing with dubious data. Its producer is unknown.",
          image: "./images/dubiousdisc.png"
        },
        {
          id: 13,
          name: "ELECTIRIZER",
          price: 2100,
          description: "A box packed with a tremendous amount of electric energy. It's loved by a certain Pokémon.",
          image: "./images/electirizer.png"
        },
        {
          id: 14,
          name: "MAGMARIZER",
          price: 2100,
          description: "A box packed with a tremendous amount of magma energy. It's loved by a certain Pokémon.",
          image: "./images/magmarizer.png"
        },
        {
          id: 15,
          name: "PROTECTOR",
          price: 2100,
          description: "A protective item of some sort. It is extremely stiff and heavy. It's loved by a certain Pokémon.",
          image: "./images/protector.png"
        },
        {
          id: 16,
          name: "RAZOR CLAW",
          price: 2100,
          description: "An item to be held by a Pokémon. This sharply hooked claw increases the holder's critical-hit ratio.",
          image: "./images/razorclaw.png"
        },
        {
          id: 17,
          name: "RAZOR FANG",
          price: 2100,
          description: "A protective item of some sort. It is extremely stiff and heavy. It's loved by a certain Pokémon.",
          image: "./images/razorfang.png"
        },
        {
          id: 18,
          name: "REAPER CLOTH",
          price: 2100,
          description: "A cloth imbued with horrifyingly strong spiritual energy. It's loved by a certain Pokémon.",
          image: "./images/reapercloth.png"
        },
        {
          id: 19,
          name: "SACHET",
          price: 2100,
          description: "A sachet filled with fragrant perfumes that are just slightly too overwhelming. Yet it's loved by a certain Pokémon.",
          image: "./images/sachet.png"
        },
        {
          id: 20,
          name: "UP-GRADE",
          price: 2100,
          description: "A transparent device somehow filled with all sorts of data. It was produced by Silph Co.",
          image: "./images/upgrade.png"
        },
        {
          id: 21,
          name: "WHIPPED DREAM",
          price: 2100,
          description: "A soft and sweet treatmade of fluffy, puffy, whipped and whirled cream. It's loved by a certain Pokémon.",
          image: "./images/whippeddream.png"
        }
      ] }
      />
      <Section 
      sectionName="MISCELLANEOUS ITEMS"
      shopItems={ [
        {
          id: 22,
          name: "ESCAPE ROPE",
          price: 550,
          description: "A long and durable rope. Use it to escape instantly from a cave or a dungeon.",
          image: "./images/escaperope.png"
        },
        {
          id: 23,
          name: "FLUFFY TAIL",
          price: 1000,
          description: "A toy that attracts the attention of a Pokémon. It guarantees escape from any battle with wild Pokémon.",
          image: "./images/fluffytail.png"
        },
        {
          id: 24,
          name: "MAX REPEL",
          price: 700,
          description: "An item that prevents any low-level wild Pokémon from jumping out at you for 250 steps after its use.",
          image: "./images/maxrepel.png"
        },
        {
          id: 25,
          name: "POKÉ DOLL",
          price: 1000,
          description: "A doll that attracts the attention of a Pokémon. It guarantees escape from any battle with wild Pokémon.",
          image: "./images/pokedoll.png"
        },
        {
          id: 26,
          name: "POKÉ TOY",
          price: 500,
          description: "A toy that attracts the attention of a Pokémon. It guarantees escape from any battle with wild Pokémon.",
          image: "./images/poketoy.png"
        },
        {
          id: 27,
          name: "REPEL",
          price: 350,
          description: "An item that prevents any low-level wild Pokémon from jumping out at you for 100 steps after its use.",
          image: "./images/repel.png"
        },
        {
          id: 28,
          name: "SUPER REPEL",
          price: 500,
          description: "An item that prevents any low-level wild Pokémon from jumping out at you for 200 steps after its use.",
          image: "./images/superrepel.png"
        }
      ] }
      />
      <Section 
      sectionName="RECOVERY ITEMS"
      shopItems={ [
        {
          id: 29,
          name: "ANTIDOTE",
          price: 100,
          description: "A spray-type medicine for poisoning. It can be used once to lift the effects of being poisoned from a Pokémon.",
          image: "./images/antidote.png"
        },
        {
          id: 30,
          name: "AWAKENING",
          price: 250,
          description: "A spray-type medicine used against sleep. It can be used once to rouse a Pokémon from the clutches of sleep.",
          image: "./images/awakening.png"
        },
        {
          id: 31,
          name: "BERRY JUICE",
          price: 100,
          description: "A 100 percent pure juice made of Berries. When consumed, it restores 20 HP to an injured Pokémon.",
          image: "./images/berryjuice.png"
        },
        {
          id: 32,
          name: "BURN HEAL",
          price: 250,
          description: "A spray-type medicine for treating burns. It can be used once to heal a Pokémon suffering from a burn.",
          image: "./images/burnheal.png"
        },
        {
          id: 33,
          name: "ENERGY POWDER",
          price: 500,
          description: "A bitter medicine powder. When consumed, it restores 50 HP to an injured Pokémon.",
          image: "./images/energypowder.png"
        },
        {
          id: 34,
          name: "ENERGY ROOT",
          price: 800,
          description: "An extremely bitter medicinal root. When consumed, it restores 200 HP to an injured Pokémon.",
          image: "./images/energyroot.png"
        },
        {
          id: 35,
          name: "ETHER",
          price: 1200,
          description: "This medicine can restore 10 PP to a single selected move that has been learned by a Pokémon.",
          image: "./images/ether.png"
        },
        {
          id: 36,
          name: "FRESH WATER",
          price: 200,
          description: "Water with a high mineral content. When consumed, it restores 50 HP to an injured Pokémon.",
          image: "./images/freshwater.png"
        },
        {
          id: 37,
          name: "FULL HEAL",
          price: 600,
          description: "A spray-type medicine that is broadly effective. It can be used once to heal all the status conditions of a Pokémon.",
          image: "./images/fullheal.png"
        },
        {
          id: 38,
          name: "FULL RESTORE",
          price: 3000,
          description: "A medicine that can be used to fully restore the HP of a single Pokémon and heal any status conditions it has.",
          image: "./images/fullrestore.png"
        },
        {
          id: 39,
          name: "HEAL POWDER",
          price: 450,
          description: "A very bitter medicine powder. When consumed, it heals all of a Pokémon's status conditions.",
          image: "./images/healpowder.png"
        },
        {
          id: 40,
          name: "HYPER POTION",
          price: 1200,
          description: "A spray-type medicine for treating wounds. It can be used to restore 200 HP to an injured Pokémon.",
          image: "./images/hyperpotion.png"
        },
        {
          id: 41,
          name: "ICE HEAL",
          price: 250,
          description: "A spray-type medicine for freezing. It can be used once to defrost a Pokémon that has been frozen solid.",
          image: "./images/iceheal.png"
        },
        {
          id: 42,
          name: "LEMONADE",
          price: 350,
          description: "A very sweet and refreshing drink. When consumed, it restores 80 HP to an injured Pokémon.",
          image: "./images/lemonade.png"
        },
        {
          id: 43,
          name: "MAX POTION",
          price: 2500,
          description: "A spray-type medicine for treating wounds. It will completely restore the max HP of a single Pokémon.",
          image: "./images/maxpotion.png"
        },
        {
          id: 44,
          name: "MAX REVIVE",
          price: 4000,
          description: "A medicine that can revive fainted Pokémon. It also fully restores a fainted Pokémon's maximum HP.",
          image: "./images/maxrevive.png"
        },
        {
          id: 45,
          name: "MOOMOO MILK",
          price: 500,
          description: "A bottle of highly nutritious milk. When consumed, it restores 100 HP to an injured Pokémon.",
          image: "./images/moomoomilk.png"
        },
        {
          id: 46,
          name: "PARALYZE HEAL",
          price: 200,
          description: "A spray-type medicine for paralysis. It can be used once to free a Pokémon that has been paralyzed.",
          image: "./images/paralyzeheal.png"
        },
        {
          id: 47,
          name: "POTION",
          price: 300,
          description: "A spray-type medicine for treating wounds. It can be used to restore 20 HP to an injured Pokémon.",
          image: "./images/potion.png"
        },
        {
          id: 48,
          name: "REVIVAL HERB",
          price: 2800,
          description: "A terribly bitter medicinal herb. It revives a fainted Pokémon and fully restores its maximum HP.",
          image: "./images/revivalherb.png"
        },
        {
          id: 49,
          name: "REVIVE",
          price: 1500,
          description: "A medicine that can revive fainted Pokémon. It also restores half of a fainted Pokémon's maximum HP.",
          image: "./images/revive.png"
        },
        {
          id: 50,
          name: "SODA POP",
          price: 300,
          description: "A highly carbonated soda drink. When consumed, it restores 60 HP to an injured Pokémon.",
          image: "./images/sodapop.png"
        },
        {
          id: 51,
          name: "SUPER POTION",
          price: 700,
          description: "A spray-type medicine for treating wounds. It can be used to restore 50 HP to an injured Pokémon.",
          image: "./images/superpotion.png"
        }
      ] }
      />
      <Section 
      sectionName="BATTLE EFFECT ITEMS"
      shopItems={ [
        {
          id: 52,
          name: "DIRE HIT",
          price: 650,
          description: "An item that raises the critical-hit ratio greatly. It can be used only once and wears off if the Pokémon is withdrawn.",
          image: "./images/direhit.png"
        },
        {
          id: 53,
          name: "GUARD SPEC",
          price: 700,
          description: "An item that prevents stat reduction among the Trainer's party Pokémon for five turns after it is used in battle.",
          image: "./images/guardspec.png"
        },
        {
          id: 54,
          name: "X ACCURACY",
          price: 950,
          description: "An item that boosts the accuracy of a Pokémon during a battle. It wears off once the Pokémon is withdrawn.",
          image: "./images/xaccuracy.png"
        },
        {
          id: 55,
          name: "X ATTACK",
          price: 500,
          description: "An item that boosts the Attack stat of a Pokémon during a battle. It wears off once the Pokémon is withdrawn.",
          image: "./images/xattack.png"
        },
        {
          id: 56,
          name: "X DEFENSE",
          price: 550,
          description: "An item that boosts the Defense stat of a Pokémon during a battle. It wears off once the Pokémon is withdrawn.",
          image: "./images/xdefense.png"
        },
        {
          id: 57,
          name: "X SP. ATK",
          price: 350,
          description: "An item that boosts the Sp. Atk stat of a Pokémon during a battle. It wears off once the Pokémon is withdrawn.",
          image: "./images/xspatk.png"
        },
        {
          id: 58,
          name: "X SP. DEF",
          price: 350,
          description: "An item that boosts the Sp. Def stat of a Pokémon during a battle. It wears off once the Pokémon is withdrawn.",
          image: "./images/xspdef.png"
        },
        {
          id: 59,
          name: "X SPEED",
          price: 350,
          description: "An item that boosts the Speed stat of a Pokémon during a battle. It wears off once the Pokémon is withdrawn.",
          image: "./images/xspeed.png"
        }
      ] }
      />
      <Section 
      sectionName="HOLD ITEMS"
      shopItems={ [
        {
          id: 60,
          name: "ABSORB BULB",
          price: 200,
          description: "An item to be held by a Pokémon. It boosts Sp. Atk if hit with a Water- type attack. It can only be used once.",
          image: "./images/absorbbulb.png"
        },
        {
          id: 61,
          name: "AIR BALLOON",
          price: 200,
          description: "An item to be held by a Pokémon. The holder will float in the air until hit. Once hit, this item will burst.",
          image: "./images/airballoon.png"
        },
        {
          id: 62,
          name: "ASSAULT VEST",
          price: 1000,
          description: "An item to be held by a Pokémon. This offensive vest raises Sp. Def but prevents the use of status moves.",
          image: "./images/assaultvest.png"
        },
        {
          id: 63,
          name: "BINDING BAND",
          price: 200,
          description: "An item to be held by a Pokémon. A band that increases the power of binding moves used by the holder.",
          image: "./images/bindingband.png"
        },
        {
          id: 64,
          name: "BRIGHT POWDER",
          price: 10,
          description: "An item to be held by a Pokémon. It casts a tricky glare that lowers the opposing Pokémon's accuracy.",
          image: "./images/brightpowder.png"
        },
        {
          id: 65,
          name: "CELL BATTERY",
          price: 200,
          description: "An item to be held by a Pokémon. It boosts Attack if hit with an Electric- type attack. It can only be used once.",
          image: "./images/cellbattery.png"
        },
        {
          id: 66,
          name: "CHOICE BAND",
          price: 100,
          description: "An item to be held by a Pokémon. This curious headband boosts Attack but only allows the use of one move.",
          image: "./images/choiceband.png"
        },
        {
          id: 67,
          name: "CHOICE SCARF",
          price: 200,
          description: "An item to be held by a Pokémon. This curious scarf boosts Speed but only allows the use of one move.",
          image: "./images/choicescarf.png"
        },
        {
          id: 68,
          name: "CHOICE SPECS",
          price: 200,
          description: "An item to be held by a Pokémon. These curious glasses boost Sp. Atk but only allow the use of one move.",
          image: "./images/choicespecs.png"
        },
        {
          id: 12,
          name: "DUBIOUS DISC",
          price: 2100,
          description: "A transparent device overflowing with dubious data. Its producer is unknown.",
          image: "./images/dubiousdisc.png"
        },
        {
          id: 69,
          name: "EJECT BUTTON",
          price: 200,
          description: "An item to be held by a Pokémon. If the holder is hit by an attack, it will be switched out of battle.",
          image: "./images/ejectbutton.png"
        },
        {
          id: 13,
          name: "ELECTIRIZER",
          price: 2100,
          description: "A box packed with a tremendous amount of electric energy. It's loved by a certain Pokémon.",
          image: "./images/electirizer.png"
        },
        {
          id: 70,
          name: "EXPERT BELT",
          price: 200,
          description: "An item to be held by a Pokémon. It's a well-worn belt that slightly boosts the power of supereffective moves.",
          image: "./images/expertbelt.png"
        },
        {
          id: 71,
          name: "FLAME ORB",
          price: 100,
          description: "An item to be held by a Pokémon. It is a bizarre orb that will afflict the holder with a burn during battle.",
          image: "./images/flameorb.png"
        },
        {
          id: 72,
          name: "FOCUS BAND",
          price: 200,
          description: "An item to be held by a Pokémon. The holder may endure a potential KO attack, leaving it with just 1 HP.",
          image: "./images/focusband.png"
        },
        {
          id: 73,
          name: "FULL INCENSE",
          price: 9600,
          description: "An item to be held by a Pokémon. This exotic-smelling incense makes the holder bloated and slow moving.",
          image: "./images/fullincense.png"
        },
        {
          id: 74,
          name: "IRON BALL",
          price: 200,
          description: "An item to be held by a Pokémon. It lowers Speed and allows Ground-type moves to hit Flying-type and levitating holders.",
          image: "./images/ironball.png"
        },
        {
          id: 75,
          name: "LAX INCENSE",
          price: 9600,
          description: "An item to be held by a Pokémon. The beguiling aroma of this incense may cause attacks to miss its holder.",
          image: "./images/laxincense.png"
        },
        {
          id: 76,
          name: "LIFE ORB",
          price: 200,
          description: "An item to be held by a Pokémon. It boosts the power of moves, but at the cost of some HP on each hit.",
          image: "./images/lifeorb.png"
        },
        {
          id: 77,
          name: "LUCK INCENSE",
          price: 200,
          description: "An item to be held by a Pokémon. It doubles any prize money received if the holding Pokémon joins a battle.",
          image: "./images/luckincense.png"
        },
        {
          id: 78,
          name: "LUMINOUS MOSS",
          price: 200,
          description: "An item to be held by a Pokémon. It doubles any prize money received if the holding Pokémon joins a battle.",
          image: "./images/luminousmoss.png"
        },
        {
          id: 14,
          name: "MAGMARIZER",
          price: 2100,
          description: "A box packed with a tremendous amount of magma energy. It's loved by a certain Pokémon.",
          image: "./images/magmarizer.png"
        },
        {
          id: 78,
          name: "MUSCLE BAND",
          price: 200,
          description: "An item to be held by a Pokémon. This headband exudes strength, slightly boosting the power of physical moves.",
          image: "./images/muscleband.png"
        },
        {
          id: 79,
          name: "POWER ANKLET",
          price: 3000,
          description: "An item to be held by a Pokémon. It reduces Speed but allows the holder's Speed stat to grow more after battling.",
          image: "./images/poweranklet.png"
        },
        {
          id: 80,
          name: "POWER BAND",
          price: 3000,
          description: "An item to be held by a Pokémon. It reduces Speed but allows the holder's Sp. Def stat to grow more after battling.",
          image: "./images/powerband.png"
        },
        {
          id: 81,
          name: "POWER BELT",
          price: 3000,
          description: "An item to be held by a Pokémon. It reduces Speed but allows the holder's Defense stat to grow more after battling.",
          image: "./images/powerbelt.png"
        },
        {
          id: 82,
          name: "POWER BRACER",
          price: 3000,
          description: "An item to be held by a Pokémon. It reduces Speed but allows the holder's Attack stat to grow more after battling.",
          image: "./images/powerbracer.png"
        },
        {
          id: 83,
          name: "POWER HERB",
          price: 100,
          description: "A single-use item to be held by a Pokémon. It allows the holder to immediately use a move that normally requires a turn to charge.",
          image: "./images/powerherb.png"
        },
        {
          id: 83,
          name: "POWER LENS",
          price: 3000,
          description: "An item to be held by a Pokémon. It reduces Speed but allows the holder's Sp. Atk stat to grow more after battling.",
          image: "./images/powerlens.png"
        },
        {
          id: 84,
          name: "POWER WEIGHT",
          price: 3000,
          description: 	"An item to be held by a Pokémon. It reduces Speed but allows the holder's maximum HP to grow more after battling.",
          image: "./images/powerweight.png"
        },
        {
          id: 15,
          name: "PROTECTOR",
          price: 2100,
          description: "A protective item of some sort. It is extremely stiff and heavy. It's loved by a certain Pokémon.",
          image: "./images/protector.png"
        },
        {
          id: 85,
          name: "PURE INCENSE",
          price: 9600,
          description: "An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the head of the party.",
          image: "./images/pureincense.png"
        },
        {
          id: 16,
          name: "RAZOR CLAW",
          price: 2100,
          description: "An item to be held by a Pokémon. This sharply hooked claw increases the holder's critical-hit ratio.",
          image: "./images/razorclaw.png"
        },
        {
          id: 17,
          name: "RAZOR FANG",
          price: 2100,
          description: "A protective item of some sort. It is extremely stiff and heavy. It's loved by a certain Pokémon.",
          image: "./images/razorfang.png"
        },
        {
          id: 18,
          name: "REAPER CLOTH",
          price: 2100,
          description: "A cloth imbued with horrifyingly strong spiritual energy. It's loved by a certain Pokémon.",
          image: "./images/reapercloth.png"
        },
        {
          id: 86,
          name: "RING TARGET",
          price: 100,
          description: "An item to be held by a Pokémon. Moves that normally have no effect will land on a Pokémon holding it.",
          image: "./images/ringtarget.png"
        },
        {
          id: 87,
          name: "ROCK INCENSE",
          price: 9600,
          description: "An item to be held by a Pokémon. This exotic-smelling incense boosts the power of Rock-type moves.",
          image: "./images/rockincense.png"
        },
        {
          id: 88,
          name: "ROSE INCENSE",
          price: 9600,
          description: "An item to be held by a Pokémon. This exotic-smelling incense boosts the power of Grass-type moves.",
          image: "./images/roseincense.png"
        },
        {
          id: 89,
          name: "SAFETY GOGGLES",
          price: 1000,
          description: "An item to be held by a Pokémon. These goggles protect the holder from both weather-related damage and powder.",
          image: "./images/safetygoggles.png"
        },
        {
          id: 90,
          name: "SCOPE LENS",
          price: 200,
          description: "An item to be held by a Pokémon. It's a lens for scoping out weak points. It boosts the holder's critical-hit ratio.",
          image: "./images/scopelens.png"
        },
        {
          id: 91,
          name: "SEA INCENSE",
          price: 1000,
          description: "An item to be held by a Pokémon. This incense has a curious aroma that boosts the power of Water-type moves.",
          image: "./images/seaincense.png"
        },
        {
          id: 92,
          name: "SNOW BALL",
          price: 200,
          description: "An item to be held by a Pokémon. It boosts Attack if hit with an Ice-type attack. It can only be used once.",
          image: "./images/snowball.png"
        },
        {
          id: 93,
          name: "TOXIC ORB",
          price: 100,
          description: "An item to be held by a Pokémon. It is a bizarre orb that will badly poison the holder during battle.",
          image: "./images/toxicorb.png"
        },
        {
          id: 94,
          name: "WAVE INCENSE",
          price: 9600,
          description: "An item to be held by a Pokémon. This exotic-smelling incense boosts the power of Water-type moves.",
          image: "./images/waveincense.png"
        },
        {
          id: 95,
          name: "WEAKNESS POLICY",
          price: 1000,
          description: "An item to be held by a Pokémon. Attack and Sp. Atk sharply increase if the holder is hit with a move it's weak to.",
          image: "./images/weaknesspolicy.png"
        },
        {
          id: 96,
          name: "WHITE HERB",
          price: 100,
          description: "An item to be held by a Pokémon. It will restore any lowered stat in battle. It can be used only once.",
          image: "./images/whiteherb.png"
        },
        {
          id: 98,
          name: "WIDE LENS",
          price: 200,
          description: "An item to be held by a Pokémon. It's a magnifying lens that slightly boosts the accuracy of moves.",
          image: "./images/widelens.png"
        },
        {
          id: 99,
          name: "WISE GLASSES",
          price: 200,
          description: "An item to be held by a Pokémon. This thick pair of glasses slightly boosts the power of special moves.",
          image: "./images/wiseglasses.png"
        },
        {
          id: 99,
          name: "ZOOM LENS",
          price: 200,
          description: "An item to be held by a Pokémon. If the holder moves after its target moves, its accuracy will be boosted.",
          image: "./images/zoomlens.png"
        }
      ] }
      />
    </>
  );
}
