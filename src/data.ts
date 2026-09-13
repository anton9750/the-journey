import type { Character, Chapter } from './types'

export const characters: Character[] = [
  {
    id: 'wukong',
    name: 'Sun Wukong',
    hanzi: '孙悟空',
    title: 'The Monkey King',
    color: 'var(--lacquer-red)',
    blurb:
      'Born from a stone egg atop Flower-Fruit Mountain, master of 72 transformations and wielder of the Ruyi Jingu Bang.',
    imageUrl: `${import.meta.env.BASE_URL}images/wukong.webp`,
  },
  {
    id: 'tangseng',
    name: 'Tang Sanzang',
    hanzi: '唐三藏',
    title: 'The Monk',
    color: 'var(--imperial-gold)',
    blurb:
      'The devout Buddhist monk sent by the Tang Emperor to retrieve the sacred sutras from the West.',
    imageUrl: `${import.meta.env.BASE_URL}images/tangseng.jpg`,
  },
  {
    id: 'bajie',
    name: 'Zhu Bajie',
    hanzi: '猪八戒',
    title: 'Pigsy',
    color: 'var(--jade)',
    blurb:
      'Once a Marshal of the Heavenly Hosts, now a half-man, half-pig disciple fond of food, rest, and mischief.',
    imageUrl: `${import.meta.env.BASE_URL}images/zhu.webp`,
  },
  {
    id: 'wujing',
    name: 'Sha Wujing',
    hanzi: '沙悟净',
    title: 'Sandy',
    color: 'var(--dragon-blue)',
    blurb:
      'A former river-dwelling demon turned loyal disciple, steady and dependable, carrying the luggage of the pilgrimage.',
    imageUrl: `${import.meta.env.BASE_URL}images/wujing.jpg`,
  },
]

/**
 * All 100 chapters, with the traditional English chapter title plus a short
 * original synopsis (a few sentences, written fresh for this project — not
 * copied from any translation). Replace `text` with the full chapter text
 * whenever you're ready; ChapterReader will render whatever is here.
 */
export const chapters: Chapter[] = [
  {
    number: 1,
    title: 'The Monkey King Is Born',
    text: 'On the Mountain of Flowers and Fruit, a stone egg splits open under the sun and moon, and a monkey springs out fully formed. He proves bold enough to leap through a waterfall into a hidden cave, and the other monkeys crown him their king, naming him Handsome Monkey King.',
  },
  {
    number: 2,
    title: 'Wukong Learns the Art of the Tao',
    text: 'Restless with a fear of death, the Monkey King sails across the sea to find a teacher and is accepted by the Patriarch Subhuti, who gives him the name Sun Wukong. In secret, Wukong learns shape-shifting, cloud-somersaulting, and the arts of immortality before being sent back out into the world.',
  },
  {
    number: 3,
    title: 'The Monkey King Wreaks Havoc in the Underworld and Dragon Palace',
    text: 'Wukong visits the Dragon King of the Eastern Sea and bullies him into handing over a magic iron rod that can change size at will. He then storms the Underworld, strikes his name from the Book of Life and Death, and grants himself and his monkey subjects immortality.',
  },
  {
    number: 4,
    title: 'Sun Wukong Is Given a Post in Heaven',
    text: "To calm the troublemaker, the Jade Emperor invites Wukong to Heaven and gives him the minor post of Keeper of the Heavenly Horses. When Wukong learns how lowly the position truly is, he flies into a rage, declares himself 'Great Sage Equal to Heaven,' and returns to his mountain in defiance.",
  },
  {
    number: 5,
    title: 'Wukong Steals the Peaches of Immortality',
    text: "Given charge of the Queen Mother's peach garden, Wukong cannot resist eating the ripest immortal peaches himself. He then crashes the Peach Banquet uninvited, devours the feast and Laozi's elixir pills, and flees back to earth knowing Heaven will be furious.",
  },
  {
    number: 6,
    title: 'Erlang Shen Battles the Great Sage',
    text: 'The Jade Emperor sends an army of heavenly generals to capture Wukong, but none can match him. Only Erlang Shen, a nephew of the Jade Emperor skilled in transformation himself, can fight Wukong to a standstill in a shapeshifting duel across the mountains.',
  },
  {
    number: 7,
    title: 'Wukong Is Trapped Under Five Elements Mountain',
    text: "Even Laozi's furnace and the might of Heaven's army cannot destroy Wukong, so the Buddha himself intervenes. Wagering that Wukong cannot leap out of his palm, the Buddha traps him beneath a mountain that seals him in place for five hundred years.",
  },
  {
    number: 8,
    title: 'Guanyin Selects the Pilgrim to Fetch the Scriptures',
    text: 'The Bodhisattva Guanyin travels east at the Buddha\'s request to find someone worthy of carrying Buddhist scriptures back from India. Along the way she recruits several fallen or monstrous beings, promising them redemption if they aid and protect the future pilgrim.',
  },
  {
    number: 9,
    title: 'The Birth of the Tang Monk',
    text: "Years earlier, a scholar's pregnant wife is widowed by a murderous boatman who seizes her husband's identity. She sets her infant son adrift on a river to save his life, and he is raised in a monastery, growing up to become the devout monk Xuanzang.",
  },
  {
    number: 10,
    title: 'Emperor Taizong Visits the Underworld',
    text: "After a dragon king is executed despite the Emperor's promise of protection, his vengeful spirit hounds Emperor Taizong until the Emperor is dragged down to the Underworld himself. There he witnesses the suffering of the dead and is allowed to return to life only after promising to hold a great mass for lost souls.",
  },
  {
    number: 11,
    title: 'The Emperor Sponsors the Grand Mass',
    text: 'True to his word, Emperor Taizong commissions a grand Buddhist mass to release suffering spirits from the Underworld. Guanyin, watching in disguise, judges the ceremony too shallow for the task ahead and reveals that only scriptures from the Western Heaven can truly save mankind.',
  },
  {
    number: 12,
    title: 'Tang Sanzang Departs on His Journey',
    text: "The monk Xuanzang is chosen to undertake the pilgrimage west and is given the religious name Tripitaka, along with the Emperor's blessing and a cassock gifted by Guanyin. With little more than his faith and a horse, he sets out from Chang'an toward the distant Western Heaven.",
  },
  {
    number: 13,
    title: 'The Tang Monk Escapes the Tigers of Double-Fork Ridge',
    text: 'Barely past the border, Tripitaka is captured by tiger-spirits and monstrous bandits who nearly kill him and his companions. He is saved at the last moment by a passing hunter and by the timely intervention of protective spirits watching over his journey.',
  },
  {
    number: 14,
    title: 'Wukong Is Freed and Becomes a Disciple',
    text: "Passing beneath Five Elements Mountain, Tripitaka hears Wukong's call and frees him from his five-hundred-year imprisonment. Grateful and reformed, Wukong swears to protect the monk, but soon rebels against Tripitaka's scolding until Guanyin fits him with a magic headband that will bind him to obedience.",
  },
  {
    number: 15,
    title: 'The White Dragon Horse',
    text: 'A dragon prince, banished for a past offense, swallows the monk\'s horse out of hunger, forcing Wukong into a fierce underwater fight to punish him. Guanyin arrives to intervene, transforming the repentant dragon into a white horse to carry Tripitaka the rest of the way west.',
  },
  {
    number: 16,
    title: 'The Black Wind Demon Steals the Cassock',
    text: "While lodging at Guanyin Monastery, the pilgrims' precious cassock is stolen by a greedy monk in league with a bear spirit. A fire meant to destroy the travelers instead burns down the monastery, and the cassock vanishes into the mountains with the Black Wind Demon.",
  },
  {
    number: 17,
    title: 'Guanyin Subdues the Bear Spirit',
    text: "Wukong tracks the cassock to the Black Wind Demon's cave but cannot defeat the bear spirit alone. Guanyin herself descends to trick the demon with a poisoned pill disguised as a treasure, subduing him and recovering the sacred cassock.",
  },
  {
    number: 18,
    title: 'The Gao Family and Zhu Bajie',
    text: 'In the village of Gao, a family is terrorized by a hog-faced monster who has taken their daughter as an unwilling bride. Wukong arrives to investigate and discovers the "monster" is in fact a fallen immortal exiled to earth in pig form.',
  },
  {
    number: 19,
    title: 'Zhu Bajie Joins the Pilgrimage',
    text: 'After Wukong defeats him in battle, the pig-spirit reveals he was once a Marshal of the Heavenly Hosts banished for misconduct, and that Guanyin had already promised him redemption through this pilgrimage. Renamed Zhu Bajie, he reluctantly gives up his comfortable life with the Gao family to join Tripitaka.',
  },
  {
    number: 20,
    title: 'The Yellow Wind Ridge Demon',
    text: "Deep in the mountains, a fierce wind spirit kidnaps Tripitaka while the disciples are away foraging. Wukong and Bajie discover the culprit is a magical weasel-spirit whose supernatural wind proves more than a match for Wukong's strength alone.",
  },
  {
    number: 21,
    title: 'Lingji Bodhisattva Aids the Pilgrims',
    text: "Unable to overcome the Yellow Wind Demon's enchanted gale by force, Wukong seeks help from Lingji Bodhisattva, who once tamed the same demon long ago. With a special wind-quelling pill, the Bodhisattva neutralizes the demon's power and the pilgrims press on.",
  },
  {
    number: 22,
    title: 'Sha Wujing at the River of Flowing Sand',
    text: 'At the wide and dangerous River of Flowing Sand, a fearsome water-demon attacks the party and drags Bajie beneath the surface. Wukong and Bajie fight the creature to a standstill, but neither the demon nor the disciples can win outright.',
  },
  {
    number: 23,
    title: 'Sha Wujing Joins the Pilgrimage',
    text: 'Guanyin reveals that the river demon is another exiled immortal awaiting redemption, once a general who shattered a precious goblet in Heaven. Renamed Sha Wujing, he bows to Tripitaka and becomes the third disciple, carrying the luggage for the rest of the journey.',
  },
  {
    number: 24,
    title: 'The Five-Zhuang Temple and the Ginseng Fruit',
    text: 'The pilgrims lodge at a Daoist temple famous for a rare tree that bears magical ginseng fruit granting near-immortality to whoever eats one. While the temple\'s master is away, Bajie persuades Wukong to help steal a few of the priceless fruits.',
  },
  {
    number: 25,
    title: 'Wukong Uproots the Ginseng Tree',
    text: 'When servant boys mock and insult the disciples over the stolen fruit, an enraged Wukong knocks over the entire sacred ginseng tree in retaliation. The returning master, a powerful immortal, is furious and traps the whole party until the tree can be restored.',
  },
  {
    number: 26,
    title: 'Guanyin Revives the Ginseng Tree',
    text: 'Desperate to save the tree and his companions, Wukong searches across the world for anyone capable of healing it, finally turning to Guanyin herself. With a vial of pure water and gentle magic, she revives the ginseng tree, and the grateful immortal releases the pilgrims in peace.',
  },
  {
    number: 27,
    title: 'Wukong Is Dismissed for the First Time',
    text: 'A cunning skeleton-spirit disguises herself first as a village girl, then as an old woman, then as an old man, trying to snatch Tripitaka for a feast on his flesh. Each time Wukong sees through the disguise and kills the illusion, but the monk, seeing only innocent victims, angrily banishes Wukong from the pilgrimage.',
  },
  {
    number: 28,
    title: 'The White Bone Demon Deceives the Monk',
    text: "With Wukong gone, Tripitaka and his remaining disciples are dangerously exposed to the mountain's true dangers. Bajie's jealousy and complaints about Wukong deepen the rift, leaving the party more vulnerable than ever to the demons still stalking them.",
  },
  {
    number: 29,
    title: 'Tang Sanzang Is Captured at Baoxiang Kingdom',
    text: "Passing through the kingdom of Baoxiang, Tripitaka is seized by a demon disguised as a nobleman who has enchanted and imprisoned the kingdom's true princess. Bajie and Sha Wujing struggle to protect their master without Wukong's strength to rely on.",
  },
  {
    number: 30,
    title: 'Zhu Bajie Seeks Help from Wukong',
    text: 'With Tripitaka captured and the situation dire, Bajie swallows his pride and travels back to Flower-Fruit Mountain to beg Wukong for help. Wukong, still stung by his unjust banishment, at first refuses before his loyalty to his master wins out.',
  },
  {
    number: 31,
    title: 'Wukong Returns to Save His Master',
    text: 'Wukong returns to Baoxiang and confronts the disguised demon, uncovering the plot against the royal family and rescuing the true princess. Tripitaka, humbled and relieved, welcomes Wukong back into the fold as they continue their journey west.',
  },
  {
    number: 32,
    title: 'The Origins of the Yellow-Robed Demon',
    text: 'It is revealed that the demon impersonating a nobleman was once a star-spirit from Heaven who fell to earth pursuing a forbidden love. His backstory sets up the complicated mix of heavenly politics and earthly mischief that entangles many of the demons the pilgrims encounter.',
  },
  {
    number: 33,
    title: 'The Silver Horn and Gold Horn Demons',
    text: 'At Level-Top Mountain, two demon brothers who serve Laozi in disguise set traps using magical gourds and vases capable of trapping victims by calling their names. Bajie is easily fooled and captured, and Wukong must proceed carefully to avoid the same fate.',
  },
  {
    number: 34,
    title: 'Wukong Is Trapped in a Treasure Vase',
    text: "Despite his cleverness, Wukong is eventually tricked into answering to his own name and sealed inside one of the demons' magical vases. Using his shape-shifting skill, he manages to survive the trap from within and turn the demons' own tricks against them.",
  },
  {
    number: 35,
    title: 'The Pilgrims Escape Lotus Flower Cave',
    text: "Wukong steals the demons' magic treasures for himself and uses them to turn the tables, trapping the brothers in their own vase. With the immediate threat defeated, the truth emerges that the demons are heavenly attendants who slipped away from their post, and they are recalled to Heaven.",
  },
  {
    number: 36,
    title: 'The Sacred Child Demon of Red Boy',
    text: 'At Fire-Cloud Cave, a young demon known as Red Boy, son of the Bull Demon King, disguises himself as a child in distress to lure the compassionate Tripitaka into danger. His flames and tricks prove unusually difficult even for Wukong to counter.',
  },
  {
    number: 37,
    title: 'Red Boy Captures the Tang Monk',
    text: "Despite the disciples' efforts, Red Boy succeeds in snatching Tripitaka away using magical fire that Wukong cannot extinguish or outmaneuver. The pilgrims scramble to find a way to breach the boy's fiery stronghold and free their master.",
  },
  {
    number: 38,
    title: 'Guanyin Subdues the Red Boy',
    text: 'Unable to defeat Red Boy through force, Wukong once again calls on Guanyin, who lures the boy onto her lotus throne and traps him there. Humbled and tamed, Red Boy is converted into her attendant, and Tripitaka is freed unharmed.',
  },
  {
    number: 39,
    title: 'The Kingdom of Black Rooster',
    text: "In the Kingdom of Black Rooster, the pilgrims learn the reigning king was murdered years earlier by an impostor who now rules in his place, aided by dark magic. The murdered king's ghost appears to Tripitaka in a dream, pleading for justice.",
  },
  {
    number: 40,
    title: 'Wukong Revives the Murdered King',
    text: "Wukong journeys to the Underworld and to Heaven to secure a pill capable of restoring the dead king's life. With the king revived but hidden away, the disciples plot how to safely expose the impostor sitting on his throne.",
  },
  {
    number: 41,
    title: 'The True and False King Revealed',
    text: 'Wukong exposes the false king before the entire royal court, revealing him to be a lion-spirit who had usurped the throne through sorcery. The true king is restored to his rightful place, and the grateful kingdom sends the pilgrims onward with honors.',
  },
  {
    number: 42,
    title: 'The Ruixian Monastery and the Manticore',
    text: "At a remote monastery, the pilgrims encounter a shape-shifting manticore whose illusions and cunning nearly overwhelm the disciples' defenses. The battle stretches the companions' teamwork and forces them to call on outside help once more.",
  },
  {
    number: 43,
    title: 'The Purple Rose Kingdom Cured of Illness',
    text: "In the Purple Rose Kingdom, the pilgrims discover the ailing king suffers from guilt and heartbreak rather than ordinary illness. Wukong, posing as a physician, uses clever diagnosis and healing skill to cure the king and win the kingdom's gratitude.",
  },
  {
    number: 44,
    title: 'The Bhikshu Kingdom and the Deer Spirit',
    text: 'The pilgrims arrive in the Bhikshu Kingdom to find a corrupt Daoist advisor has convinced the king that eating the hearts of young children will grant him long life. Horrified, the disciples resolve to expose the advisor before any harm can be done.',
  },
  {
    number: 45,
    title: "The Deer Spirit's Scheme Exposed",
    text: 'Wukong reveals the trusted advisor to be a deer spirit in disguise, manipulating the king through false promises of immortality. With the deception exposed and the spirit driven off, the endangered children of the kingdom are spared.',
  },
  {
    number: 46,
    title: 'The Journey to the Kingdom of Women',
    text: 'The pilgrims reach the legendary Kingdom of Women, a land ruled entirely by women with no men at all, where a magical river can cause pregnancy in anyone who drinks from it. Both Tripitaka and Bajie unknowingly drink the water and must scramble for a cure.',
  },
  {
    number: 47,
    title: 'The Kingdom of Women Wishes to Wed the Monk',
    text: "The queen of the Kingdom of Women, taken with Tripitaka's dignified bearing, proposes marriage and offers him rule over her land if he will stay. Torn between duty and diplomacy, Tripitaka must find a graceful way to decline without endangering his companions.",
  },
  {
    number: 48,
    title: "The Scorpion Spirit's Cave",
    text: "A scorpion-spirit, smitten with Tripitaka much like the queen before her, kidnaps him and attempts to force him into marriage through her venomous sting. Wukong and Bajie struggle against her poisonous stinger until they find a spirit whose rooster form can drive her off.",
  },
  {
    number: 49,
    title: "Zhenyuan's Disciples and the Six-Eared Macaque",
    text: 'A conflict with a mysterious double of Wukong throws the party into confusion, as a Six-Eared Macaque capable of perfectly imitating Wukong causes chaos and discord among the group. No one, not even close companions, can easily tell the real Wukong from the impostor.',
  },
  {
    number: 50,
    title: 'The False Wukong Deceives Heaven and Earth',
    text: "The two identical Wukongs battle across heaven, earth, and the underworld, with neither Buddha nor the Jade Emperor's court able to immediately distinguish the true Great Sage from his double. The dispute threatens to tear the pilgrimage apart entirely.",
  },
  {
    number: 51,
    title: 'Buddha Reveals the True Sun Wukong',
    text: 'Only the Buddha himself possesses the wisdom to identify the real Sun Wukong, exposing the Six-Eared Macaque and ending its mimicry for good. With unity restored, Wukong rejoins Tripitaka and the pilgrimage continues west.',
  },
  {
    number: 52,
    title: 'The Land of Fire Mountain',
    text: "The pilgrims' path west is blocked entirely by the blazing, impassable Fire Mountain, whose flames never die down. Local villagers tell them the only way through is to borrow a magical fan said to be able to extinguish the flames.",
  },
  {
    number: 53,
    title: 'Wukong Borrows the Palm-Leaf Fan',
    text: 'Wukong seeks out Princess Iron Fan, keeper of the legendary palm-leaf fan, only to find she despises him for past conflicts involving her son, Red Boy. She refuses his request outright and blows him away with a single furious wave of her fan.',
  },
  {
    number: 54,
    title: 'Princess Iron Fan and the Banana Fan',
    text: 'Determined, Wukong sneaks back by transforming himself and tricking Princess Iron Fan into swallowing him, forcing her to hand over what turns out to be a fake fan. Realizing he has been deceived, Wukong must find another way to secure the real treasure.',
  },
  {
    number: 55,
    title: 'The Bull Demon King Intervenes',
    text: "Princess Iron Fan's husband, the powerful Bull Demon King, arrives to defend his family and treasure from Wukong's schemes. Their rivalry, rooted in an old sworn brotherhood between Wukong and the Bull Demon King, turns personal and bitter.",
  },
  {
    number: 56,
    title: 'Wukong Battles the Bull Demon King',
    text: 'Old friendship gives way to open combat as Wukong and the Bull Demon King clash across the sky in a shapeshifting duel of massive proportions. Heavenly forces are eventually called in to help subdue the immensely powerful demon king.',
  },
  {
    number: 57,
    title: 'The Fire Is Finally Extinguished',
    text: 'With the Bull Demon King finally subdued and Princess Iron Fan persuaded to cooperate, Wukong obtains the true palm-leaf fan at last. He uses it to extinguish the flames of Fire Mountain, clearing the way for the pilgrims to continue their journey.',
  },
  {
    number: 58,
    title: 'The Kingdom of Cart-Slow and the Three Daoist Sages',
    text: "In the Kingdom of Cart-Slow, the pilgrims find Buddhist monks enslaved and abused under the rule of three powerful Daoist sages who have won the king's exclusive favor. The disciples resolve to challenge the sages and free the persecuted monks.",
  },
  {
    number: 59,
    title: "Wukong's Contest of Magic with the Daoists",
    text: 'To settle the dispute, Wukong and his companions face the three Daoist sages in a series of magical contests before the royal court, including feats of rainmaking, meditation, and even surviving execution. Each trial escalates the stakes between Buddhism and Daoism at court.',
  },
  {
    number: 60,
    title: 'The Daoists Are Defeated and Exposed',
    text: 'One by one, the three sages are outmatched and revealed to be animal spirits—a tiger, a deer, and an antelope—who had deceived the kingdom for years. With their fraud exposed, the persecuted monks are freed and Buddhism is restored to favor.',
  },
  {
    number: 61,
    title: 'The River That Freezes the Pilgrims',
    text: 'The pilgrims come upon a vast river that mysteriously freezes solid, tempting them to cross on the ice despite warnings from locals. Their haste leads them into the clutches of a spirit dwelling beneath the river who has engineered the frozen trap.',
  },
  {
    number: 62,
    title: 'The Great Compassion Monastery Fire',
    text: "The pilgrims lodge again at a monastery, only to find it engulfed by fire caused by greedy or jealous monks scheming after their treasures. As with the earlier Guanyin Monastery incident, the disciples must protect themselves and their belongings from clergy who prove far from compassionate.",
  },
  {
    number: 63,
    title: 'The Black Wind Demon Steals the Treasure Again',
    text: "Precious treasures belonging to the pilgrims are stolen once more by demons taking advantage of the monastery's chaos. Wukong and his companions must track the thieves back to their lair to reclaim what was taken.",
  },
  {
    number: 64,
    title: 'The Golden-Rimmed Bowl of Green Ox Demon',
    text: "A demon in possession of a magical golden-rimmed bowl capable of trapping anything within it proves more than a match for Wukong's usual tricks. Even his beloved iron rod is swallowed up by the treasure, leaving him without his primary weapon.",
  },
  {
    number: 65,
    title: 'Wukong Seeks Help from the Heavenly Court',
    text: "Stripped of his weapon and unable to defeat the Green Ox Demon alone, Wukong travels through Heaven pleading with various deities for aid. Each ally he recruits is defeated in turn by the demon's seemingly unbeatable bowl.",
  },
  {
    number: 66,
    title: "Laozi Retrieves His Wayward Ox",
    text: "At last it is revealed that the demon is Laozi's own escaped ox, and only Laozi possesses the means to subdue it and reclaim the magic bowl. With his rod and dignity restored, Wukong leads the group onward once more.",
  },
  {
    number: 67,
    title: 'The Kingdom Plagued by Demons in Disguise',
    text: "The pilgrims arrive in a kingdom troubled by a series of demons masquerading as officials and holy men, each pursuing their own selfish schemes. Wukong's sharp eyes for deception prove essential in protecting Tripitaka from repeated ambushes.",
  },
  {
    number: 68,
    title: 'The Bhikshu Children in the Baskets',
    text: "The pilgrims discover a village where children are kept hidden in baskets, destined to be sacrificed for a corrupt official's twisted cure. The disciples intervene to save the children before the scheme can be carried out.",
  },
  {
    number: 69,
    title: 'The Old Deer Spirit and the Longevity Elixir',
    text: 'An ancient deer spirit, posing as a wise elder, tries to convince the local ruler that an elixir made from innocent lives will grant eternal life. Wukong once again must unmask the false immortal before tragedy strikes.',
  },
  {
    number: 70,
    title: 'The Woman-Spider Demons of Silken Cave',
    text: 'At Silken-Web Cave, seven spider-spirits disguised as beautiful women lure Tripitaka in with hospitality before revealing their monstrous true forms. Their webs and poison prove a formidable and unusual challenge for the disciples to overcome.',
  },
  {
    number: 71,
    title: 'The Seven Spider Spirits at Pool of Filth',
    text: 'Wukong and his companions track the spider spirits to a hidden pool where they bathe, discovering the full extent of their supernatural abilities. A fierce battle ensues as the disciples fight to free their captured master.',
  },
  {
    number: 72,
    title: 'The Daoist Priest Who Was a Centipede Spirit',
    text: "The spider spirits' ally, a Daoist priest who is secretly an enormous centipede demon, proves capable of paralyzing even Wukong with poisonous light. Only outside help allows the disciples to finally overcome this especially dangerous foe.",
  },
  {
    number: 73,
    title: 'The Zhituo Cave and the Yellow-Eyebrow Buddha',
    text: 'A cunning demon disguises himself as a Buddha of great renown, deceiving Tripitaka and even briefly capturing Wukong using a magical golden bell that swallows its victims whole. The disciples must find a way to counter a foe whose disguise borrows the authority of the Buddha himself.',
  },
  {
    number: 74,
    title: "The False Buddha's Golden Bell Trap",
    text: "Multiple heavenly allies are called in to help break the enchanted bell trapping Wukong, each attempt failing against the demon's powerful treasure. It takes a combination of cunning and outside intervention to finally shatter the trap and free him.",
  },
  {
    number: 75,
    title: 'The Small Western Heaven Deception',
    text: 'The demon\'s false temple, styled as a "Small Western Heaven," is finally exposed as a hollow deception once its magic treasures are neutralized. With the imposter defeated, the pilgrims resume their long march toward the true Western Heaven.',
  },
  {
    number: 76,
    title: 'The Kingdom of Zhu Zi and the Three Demon Brothers-in-law',
    text: 'In the Kingdom of Zhu Zi, the pilgrims run afoul of three demon brothers-in-law who work together to trap and torment travelers. Their combined strength forces the disciples to rely on teamwork and clever strategy rather than brute force alone.',
  },
  {
    number: 77,
    title: 'Rhinoceros Demons and the Golden Rings',
    text: "The demon brothers wield magical golden rings capable of snatching weapons and treasures out of the air, disarming Wukong and his companions with ease. Even heavenly reinforcements struggle against rings that seem to counter every attack.",
  },
  {
    number: 78,
    title: 'Wukong Enlists the Help of the Buddhas of Heaven',
    text: "Realizing the demons and their rings are beyond his own power to defeat, Wukong appeals directly to the Buddha for aid in identifying and stopping the rhinoceros spirits. The Buddha's guidance points the way toward the treasure's one true weakness.",
  },
  {
    number: 79,
    title: 'The Golden Rings Are Finally Broken',
    text: 'With heavenly help, the disciples finally overcome the golden rings and defeat the rhinoceros demon brothers, freeing the region from their tyranny. The victory reinforces how often the pilgrims must rely on divine assistance rather than strength alone.',
  },
  {
    number: 80,
    title: 'The Kingdom of Bhikkhu and the Phoenix Feathers',
    text: 'The pilgrims encounter a beautiful woman who is in truth a rat-spirit seeking a mortal husband, using illusions tied to sacred phoenix feathers to entrap Tripitaka. Wukong must see past her beauty to expose the deception beneath.',
  },
  {
    number: 81,
    title: 'The Bottomless Cave and the Yellow-Flower Temple',
    text: "The rat-spirit's lair, the aptly named Bottomless Cave, proves treacherous to navigate as the disciples search for their captured master. Yellow-Flower Temple nearby hides further danger disguised as sanctuary.",
  },
  {
    number: 82,
    title: 'The Seven Rat Spirits Deceive the Pilgrims',
    text: 'More rat-spirits join the fray, using disguises and trickery to keep the disciples chasing shadows while their master remains in danger. It takes celestial assistance once again to fully unravel their scheme.',
  },
  {
    number: 83,
    title: 'The Kingdom of Tarrying Cart and the Jade Rabbit',
    text: "In a new kingdom, the pilgrims discover a princess who is secretly a jade rabbit spirit fled from the moon, scheming to seize Tripitaka for herself. Old grudges and heavenly runaways once again complicate the disciples' path.",
  },
  {
    number: 84,
    title: 'Princess Moon and the Jade Rabbit Demon',
    text: "The true moon goddess Chang'e arrives to help identify and recall her wayward rabbit, resolving the crisis and restoring the real princess to her rightful place. With order restored, the pilgrims are free to continue west.",
  },
  {
    number: 85,
    title: 'The Kingdom of India and the Golden Pavilion',
    text: 'Nearing the borders of India, the pilgrims are honored as their journey draws close to its destination, resting briefly at a splendid golden pavilion. Yet even so close to their goal, new dangers continue to test the group.',
  },
  {
    number: 86,
    title: 'The Nine-Headed Lion Spirit',
    text: 'A monstrous nine-headed lion spirit, serving a powerful heavenly master, kidnaps Tripitaka and proves nearly unstoppable in direct combat. The disciples struggle to find any weakness in a creature with so many ferocious heads.',
  },
  {
    number: 87,
    title: 'The Bamboo Node Mountain Demons',
    text: "Allies of the nine-headed lion gather at Bamboo Node Mountain, complicating the disciples' efforts to track down and free their captured master. Each new demon adds a layer of difficulty to an already dangerous rescue.",
  },
  {
    number: 88,
    title: 'The Nine-Headed Lion Is Subdued',
    text: "The lion spirit's true master, a heavenly being, finally arrives to recall his wayward servant and end the threat once and for all. Tripitaka is freed, and the pilgrims continue on their way, ever closer to their destination.",
  },
  {
    number: 89,
    title: 'The Kingdom of Jisai and the Golden Light Monastery',
    text: "In the Kingdom of Jisai, the pilgrims are asked to help solve the mystery of a monastery whose sacred golden light, a symbol of its treasured relic, has mysteriously vanished. Suspicion falls on supernatural thieves operating nearby.",
  },
  {
    number: 90,
    title: 'The Stolen Sarira and the Nine-Headed Bird',
    text: "Investigation reveals that a nine-headed bird demon has stolen the monastery's sacred relic, a sarira said to hold spiritual power. The disciples must brave the demon's lair to recover the treasure and clear the monastery's name.",
  },
  {
    number: 91,
    title: 'The Small Thunder Monastery Deception',
    text: 'A monastery styled after the sacred Thunderclap Monastery of the Buddha turns out to be another elaborate demon\'s trap, luring pilgrims in with false promises of enlightenment. The disciples must recognize the deception before falling victim to it themselves.',
  },
  {
    number: 92,
    title: "The Yellow Lion Spirit's Trap",
    text: "A cunning yellow lion spirit ensnares the party using illusions tied to the false monastery, testing the disciples' wisdom as much as their strength. Only by seeing through layers of deception can they hope to escape unharmed.",
  },
  {
    number: 93,
    title: 'The Bell Spirit of Yellow Flower Temple',
    text: "A powerful bell, wielded by yet another disguised demon, threatens to trap the disciples the way earlier magical treasures once did. The disciples draw on hard-won experience from past encounters to counter the threat more quickly this time.",
  },
  {
    number: 94,
    title: 'The Zhenwu Immortal Comes to the Rescue',
    text: 'Struggling against powerful magic once more, the disciples call upon the immortal Zhenwu, whose authority and power finally break the demon\'s hold. With the threat subdued, the road west opens once again.',
  },
  {
    number: 95,
    title: 'The Kingdom of Buttressed Purity',
    text: "In the Kingdom of Buttressed Purity, the pilgrims encounter yet another kingdom troubled by hidden demonic influence disguised within its court. The disciples' growing experience helps them spot the danger more quickly than in earlier chapters.",
  },
  {
    number: 96,
    title: 'The Rescue of the Ape Immortal',
    text: "An imprisoned ape immortal, wrongly accused or ensnared through demonic trickery, becomes the disciples' concern as they near the end of their journey. His rescue underscores the recurring theme of redemption that runs throughout the pilgrimage.",
  },
  {
    number: 97,
    title: 'The Copper Estrade Prefecture Rescue',
    text: 'The pilgrims aid a beleaguered prefecture suffering under the weight of corrupt officials and lingering demonic mischief. Their intervention brings relief to the local people even as their own journey nears its final stretch.',
  },
  {
    number: 98,
    title: 'The Ancient Fir Trees and the Poem Contest',
    text: 'In a moment of rare calm, the pilgrims rest among ancient fir trees where spirits challenge them to a contest of poetry and wit rather than combat. The change of pace offers a brief, reflective interlude before the final trials ahead.',
  },
  {
    number: 99,
    title: 'The Pilgrims Arrive at Thunderclap Monastery',
    text: "After fourteen years and countless trials, the pilgrims finally reach Thunderclap Monastery, the seat of the Buddha himself, at the heart of the Western Heaven. Their long journey of hardship, growth, and redemption is at last drawing to its close.",
  },
  {
    number: 100,
    title: "The Scriptures Are Received and the Return to Chang'an",
    text: "The Buddha grants the pilgrims the sacred scriptures they sought, and each traveler is recognized for the trials endured along the way, with Wukong finally freed from his restraining headband. They return in glory to Chang'an to deliver the scriptures to the Emperor, their long pilgrimage complete.",
  },
]
