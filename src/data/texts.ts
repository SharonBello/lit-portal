import type { TextMeta, PoemMeta, StoryMeta } from '../types'

// ── POEMS ──────────────────────────────────────────────────────────

const cagedBird: PoemMeta = {
  id: 'caged-bird',
  type: 'poem',
  title: 'Caged Bird',
  author: 'Maya Angelou',
  year: 1983,
  accentColor: '#C9A84C',
  bgColor: '#1A1500',
  themes: ['Freedom vs. Oppression', 'Resilience', 'Voice & Expression', 'Racial Injustice'],
  form: 'Free verse · 6 stanzas',
  keyFeature: 'Two bird contrast · Extended metaphor',
  copyrightFree: false,
  specialNote: 'About the Poem',
  specialNoteContent: 'Angelou wrote "Caged Bird" drawing on her own experience of oppression. She famously stopped speaking voluntarily for five years as a child — the caged bird\'s voice becomes an act of resistance, not surrender. The poem contrasts a free bird (unlimited, leisurely) with a caged bird (clipped, tied, angry) — yet it is the caged bird whose song fills the poem.',
  stanzaAnalysis: [
    {
      number: 1,
      title: 'The Free Bird — Stanza 1',
      analysis: 'The free bird leaps on the back of the wind, floats downstream, dips his wing in the orange sun\'s rays. Every image suggests ease, ownership, unlimited movement. The free bird claims the sky as its own. Notice: the free bird does not sing in this poem — it has no need to. It simply is free.',
      keyInsight: '"Leaps... floats... dips" — three verbs of effortless motion. The free bird inhabits the world as if it belongs to it.',
    },
    {
      number: 2,
      title: 'The Caged Bird — Stanza 2',
      analysis: 'The contrast is immediate and brutal. "Wings are clipped and feet are tied" — the caged bird is physically prevented from expressing freedom in any way. Yet it opens its throat to sing. The cage is not just physical; it represents every system that restricts freedom of movement, choice, and expression.',
      keyInsight: '"Wings are clipped and feet are tied / so he opens his throat to sing" — the only freedom left is voice.',
    },
    {
      number: 3,
      title: 'The Song — Stanza 3 (Refrain)',
      analysis: '"The caged bird sings / with a fearful trill / of things unknown / but longed for still" — the song is not of contentment but of yearning. "Distant hills" represent everything beyond the cage. The song is both fear and hope simultaneously.',
      keyInsight: 'The bird sings not in triumph but in defiance — and its song reaches beyond the bars.',
    },
    {
      number: 4,
      title: 'The Free Bird Again — Stanza 4',
      analysis: 'The free bird thinks of another breeze, of fat worms. Its concerns are immediate, physical, uncomplicated. The contrast with the caged bird\'s existential song could not be more stark.',
      keyInsight: 'The free bird\'s life is entirely in the present; the caged bird\'s song is entirely about the future.',
    },
    {
      number: 5,
      title: 'Bars of Rage — Stanza 5',
      analysis: '"Bars of rage" — the cage is not neutral. It generates anger. The bird\'s shadow shouts on a nightmare scream. The nightmare is not sleep but waking reality. The bird can seldom see through its bars — its vision is restricted, its worldview shaped by confinement.',
      keyInsight: '"Bars of rage" — a brilliant double meaning. The bars imprison; the rage is both the bird\'s and the bars\' own quality.',
    },
    {
      number: 6,
      title: 'The Refrain Returns — Stanza 6',
      analysis: 'The final refrain repeats — but now we know more. The "fearful trill" is not weakness; it is the only power the caged bird has. The song reaching "distant hills" is an act of resistance that transcends the physical bars. The poem ends on the refrain, insisting: the song continues.',
      keyInsight: 'By returning to the refrain, Angelou says: the song cannot be stopped. Oppression cannot silence the spirit.',
    },
  ],
  devices: [
    {
      type: 'Extended Metaphor',
      name: 'The Two Birds',
      example: 'Free bird / Caged bird',
      explanation: 'The entire poem is built on the contrast between two birds representing two human conditions: freedom and oppression. The extended metaphor allows Angelou to speak about race, power, and resistance without naming them directly — making the poem universally resonant.',
    },
    {
      type: 'Imagery',
      name: 'Physical Constraint',
      example: '"wings are clipped and feet are tied"',
      explanation: 'The imagery of physical restraint is visceral and specific. We feel the restriction in our bodies. The contrast with the free bird\'s leaping and floating makes the cage\'s cruelty concrete.',
    },
    {
      type: 'Symbolism',
      name: 'The Song',
      example: '"opens his throat to sing"',
      explanation: 'The song symbolises the irrepressible human spirit — the thing that cannot be taken even when everything else is. Angelou herself was silent for five years; the song represents the voice she eventually reclaimed.',
    },
    {
      type: 'Irony',
      name: 'Situational Irony',
      example: 'Only the caged bird sings',
      explanation: 'It is the bird with the least freedom that produces the most powerful song. The free bird is silent throughout. Oppression, paradoxically, creates the conditions for resistance — and art.',
    },
    {
      type: 'Alliteration',
      name: 'Sound Patterns',
      example: '"fearful trill", "distant hills"',
      explanation: 'Sound patterns throughout the poem create a musical quality — appropriate for a poem about song. The poem performs what it describes.',
    },
  ],
  quizQuestions: [
    {
      id: 'cb-q1',
      type: 'lots',
      question: 'According to the poem, what physical constraints are placed on the caged bird?',
      options: [
        { label: 'Its beak is sealed and its eyes are covered', correct: false, feedback: 'Look again at stanza 2. The restraints are on its wings and feet, not its beak — which is why it can still sing.' },
        { label: 'Its wings are clipped and its feet are tied', correct: true, feedback: 'Correct. "His wings are clipped and his feet are tied" — two physical restraints that prevent movement but not voice. This is the key detail: the only freedom left is song.' },
        { label: 'It is kept in a dark room with no light', correct: false, feedback: 'The poem does not mention darkness or a room. It does mention "bars of rage" — the cage has bars, which means light can enter, but vision is restricted.' },
        { label: 'Its cage is covered so it cannot see the sky', correct: false, feedback: 'The caged bird "can seldom see through his bars" — but this is because of the bars themselves, not a cover.' },
      ],
    },
    {
      id: 'cb-q2',
      type: 'analysis',
      question: 'Identify the literary device in "bars of rage" and explain its effect.',
      options: [
        { label: 'It is a simile comparing the bars to rage', correct: false, feedback: 'A simile uses "like" or "as." "Bars of rage" is not a comparison — it fuses the two things together.' },
        { label: 'It is a metaphor that gives the bars an emotional quality, suggesting the cage itself embodies anger', correct: true, feedback: 'Excellent analysis. "Bars of rage" is a metaphor that fuses the physical (bars) with the emotional (rage). The cage is not neutral — it generates and contains anger. This double meaning enriches the line: the bird is enraged, and the bars are themselves a form of rage.' },
        { label: 'It is personification that makes the bars seem human', correct: false, feedback: 'While "rage" is a human emotion, the phrase is better described as a metaphor — it transfers the quality of rage to the bars rather than giving them human characteristics.' },
        { label: 'It is imagery that helps us see what the bars look like', correct: false, feedback: 'Imagery refers to sensory description. "Bars of rage" is not describing the appearance of the bars but their emotional charge.' },
      ],
    },
    {
      id: 'cb-q3',
      type: 'hots',
      question: 'What is the role of the caged bird in the poem?',
      options: [
        { label: 'The caged bird represents a literal bird kept in captivity by a cruel owner', correct: false, feedback: 'A purely literal reading misses the poem\'s power. Angelou is using the bird as a symbol for a much larger human reality.' },
        { label: 'The caged bird represents oppressed people — those whose right to choose freely has been taken away, yet who resist through voice', correct: true, feedback: 'Excellent. The caged bird = oppressed people. The clipped wings and tied feet = systemic denial of freedom. Yet the bird opens its throat to sing — using the only freedom remaining. This is the poem\'s central argument: oppression cannot silence the spirit entirely.' },
        { label: 'The caged bird represents the poet\'s sadness about the treatment of animals', correct: false, feedback: 'While animal welfare is a real issue, this reading is too narrow. Angelou\'s bird is a metaphor for human oppression, particularly the experience of Black Americans.' },
        { label: 'The caged bird represents death and the impossibility of escape', correct: false, feedback: 'The caged bird is not dead — it sings. The poem is about resistance and the persistence of hope, not the impossibility of escape.' },
      ],
    },
    {
      id: 'cb-q4',
      type: 'hots',
      question: 'How does the poet want us to feel about both birds?',
      options: [
        { label: 'We should admire the free bird and pity the caged bird', correct: false, feedback: 'This is a surface reading. The free bird is not particularly admirable — it simply exists in privilege. The caged bird\'s song makes it the moral and emotional centre of the poem.' },
        { label: 'The free bird\'s unlimited surroundings require no voice; the caged bird\'s confinement makes its fearful trill the poem\'s most powerful moment', correct: true, feedback: 'Precisely. The free bird has no need to make its voice heard — it floats, dips, claims. The caged bird, surrounded by bars of rage, has only its voice. Its "fearful trill" reaching distant hills is the poem\'s emotional climax. Angelou wants us to feel the difference — and the injustice.' },
        { label: 'Both birds feel the same emotions; only their circumstances differ', correct: false, feedback: 'Their emotions differ as much as their circumstances. The free bird thinks of fat worms and breezes; the caged bird sings of "things unknown but longed for still." One lives; the other yearns.' },
        { label: 'The free bird is more sympathetic because it does not know about the caged bird\'s suffering', correct: false, feedback: 'Angelou does not ask us to sympathise with the free bird\'s ignorance. The poem\'s emotional weight rests entirely with the caged bird.' },
      ],
    },
  ],
  bridging: [
    {
      type: 'text-text',
      label: 'Text ↔ Text',
      question: 'Compare how Angelou in "Caged Bird" and Hughes in "As I Grew Older" use bird or nature imagery to explore racial barriers and the desire for freedom.',
      scaffold: 'Angelou: the caged bird sings despite its restraints. Hughes: the speaker breaks through a wall to reclaim a dream. Compare the nature of the barrier (external cage vs. internal wall), the response to oppression (song vs. physical resistance), and what each suggests about hope.',
    },
    {
      type: 'text-author',
      label: 'Text ↔ Author',
      question: 'Maya Angelou stopped speaking voluntarily for five years as a child, after experiencing trauma and believing her voice had caused harm. How does this biographical information deepen your understanding of the caged bird\'s song?',
      scaffold: 'The connection is that Angelou knows what it means to lose your voice — and to find it again. The caged bird\'s song is not just metaphor; it is autobiographical. Reclaiming voice = reclaiming self.',
    },
    {
      type: 'text-world',
      label: 'Text ↔ World',
      question: 'Written in 1983, "Caged Bird" references a long history of racial oppression in America. In what ways does the caged bird\'s experience — the bars, the clipped wings, the fearful trill — reflect the historical and contemporary experience of systemic racism?',
      scaffold: 'Consider: physical restriction (movement), restricted vision (education, opportunity), the refrain as the only available expression. How does a "fearful trill" describe the act of speaking truth when doing so is dangerous?',
    },
    {
      type: 'text-self',
      label: 'Text ↔ Self',
      question: 'Have you ever felt "caged" — restricted from doing or expressing something important to you — yet found a way to express yourself anyway? What was your "song"?',
      scaffold: 'The cage does not have to be racial or political. A family expectation, social pressure, a physical limitation — any restriction that creates the same dynamic: what you cannot do, and what you find a way to do anyway.',
    },
  ],
  writingPrompts: [
    {
      type: 'Evaluation Essay',
      prompt: '"In \'Caged Bird,\' the caged bird\'s song is more powerful than the free bird\'s freedom." To what extent do you agree?',
      guidance: 'The free bird has physical freedom but no voice in the poem. The caged bird has no physical freedom but its song reaches "distant hills." Evaluate what each bird truly possesses. A strong answer addresses the paradox that restriction creates the conditions for the most powerful expression.',
    },
    {
      type: 'Comparative Essay',
      prompt: 'Compare how Angelou in "Caged Bird" and Bukowski in "Bluebird" use a bird symbol to explore the relationship between restriction and authentic self-expression.',
      guidance: 'Both birds are in some form of confinement. Angelou\'s bird is caged by external oppression; Bukowski\'s bluebird is suppressed by its keeper\'s own choice. Compare the nature of the cage, the role of song/expression, and what each poet argues about the human spirit under constraint.',
    },
  ],
}

const roadNotTaken: PoemMeta = {
  id: 'road-not-taken',
  type: 'poem',
  title: 'The Road Not Taken',
  author: 'Robert Frost',
  year: 1916,
  accentColor: '#4A8C3F',
  bgColor: '#0A1A08',
  themes: ['Choice & Consequence', 'Self-Deception', 'Memory & Narrative', 'Regret vs. Triumph'],
  form: '4 stanzas · ABAAB rhyme',
  keyFeature: 'Most misread poem in English',
  copyrightFree: true,
  specialNote: 'The Famous Misreading',
  specialNoteContent: 'Most people read this as a celebration of non-conformity — choosing the "road less traveled." But the poem says the roads were "really about the same." The speaker almost randomly chooses, then predicts he will later claim the choice made "all the difference." The poem is about how we invent heroic narratives from arbitrary choices — not about the courage to be different.',
  stanzas: [
    {
      label: 'Stanza 1',
      lines: [
        { text: 'Two roads diverged in a yellow wood,' },
        { text: 'And sorry I could not travel both' },
        { text: 'And be one traveler, long I stood' },
        { text: 'And looked down one as far as I could' },
        { text: 'To where it bent in the undergrowth;' },
      ],
    },
    {
      label: 'Stanza 2',
      lines: [
        { text: 'Then took the other, as just as fair,', annotation: 'KEY LINE: "as just as fair" — the second road is equally attractive, not better. The speaker\'s stated reason for choosing ("the better claim") is immediately undermined.' },
        { text: 'And having perhaps the better claim,' },
        { text: 'Because it was grassy and wanted wear;' },
        { text: 'Though as for that the passing there' },
        { text: 'Had worn them really about the same,', annotation: 'THE CRITICAL LINE: "really about the same" — the speaker dismantles his own reason for choosing. The roads are equal. The choice was arbitrary. Everything he later claims is invented.' },
      ],
    },
    {
      label: 'Stanza 3',
      lines: [
        { text: 'And both that morning equally lay' },
        { text: 'In leaves no step had trodden black.' },
        { text: 'Oh, I kept the first for another day!', annotation: '"Another day" — he already doubts he will return. The exclamation masks regret with false optimism.' },
        { text: 'Yet knowing how way leads on to way,' },
        { text: 'I doubted if I should ever come back.' },
      ],
    },
    {
      label: 'Stanza 4',
      lines: [
        { text: 'I shall be telling this with a sigh', annotation: '"With a sigh" — what kind of sigh? Regret? Satisfaction? Frost deliberately leaves this ambiguous. The sigh is the poem\'s key to everything.' },
        { text: 'Somewhere ages and ages hence:' },
        { text: 'That I took the road less traveled by,' },
        { text: 'And that has made all the difference.', annotation: '"Made all the difference" — but what difference? Positive or negative? The poem never says. The speaker in old age will claim a heroic story from what was, in truth, a random moment.' },
      ],
    },
  ],
  stanzaAnalysis: [
    { number: 1, title: 'The Fork', analysis: 'A traveler stands at a fork in an autumn wood — autumn suggests endings, reflection, irreversibility. He peers down one road but cannot see where it leads. The agonising over the choice is itself the poem\'s subject.', keyInsight: '"Long I stood" — the indecision is the drama, not the choice.' },
    { number: 2, title: 'The Choice — and Its Undoing', analysis: 'He chooses the second road for a reason ("grassy and wanted wear") — then immediately contradicts that reason: "worn them really about the same." The choice is made almost randomly, then rationalised.', keyInsight: 'The speaker builds a case for his choice and then demolishes it. This is the poem\'s central irony.' },
    { number: 3, title: 'The Impossible Return', analysis: 'Both roads lie equally in untrodden leaves — again confirming sameness. He imagines returning but knows he won\'t. "Way leads on to way" — each choice constrains the next.', keyInsight: '"I doubted if I should ever come back" — he is already constructing a regret he will later disguise as triumph.' },
    { number: 4, title: 'The Future Narrative', analysis: 'The speaker projects to his old age: he will tell the story with a sigh. He predicts he will claim the road "less traveled" made "all the difference." But we know the roads were the same. He is pre-inventing a heroic myth.', keyInsight: 'The poem\'s insight: we retroactively create meaningful narratives from arbitrary moments. The old man will lie — and Frost knows it.' },
  ],
  devices: [
    { type: 'Extended Metaphor', name: 'The Road as Life', example: '"Two roads diverged..."', explanation: 'The entire poem is a metaphor: roads = life choices, fork = decision point, traveler = any person. The metaphor allows abstract exploration through concrete imagery.' },
    { type: 'Irony', name: 'Situational Irony', example: '"Had worn them really about the same"', explanation: 'The speaker builds a case for his choice, then admits the premise was false. The roads were equal. The "less traveled road" is invented.' },
    { type: 'Tone', name: 'Deliberate Ambiguity', example: '"I shall be telling this with a sigh"', explanation: 'The sigh is never explained — regretful or satisfied? Frost refuses to resolve it, allowing the poem to support multiple interpretations simultaneously.' },
    { type: 'Imagery', name: 'Autumn Setting', example: '"yellow wood," "leaves no step had trodden black"', explanation: 'Autumn imagery throughout suggests endings, reflection, irreversibility — thematically appropriate for a poem about choices that cannot be undone.' },
  ],
  quizQuestions: [
    {
      id: 'rnt-q1',
      type: 'analysis',
      question: 'In stanza 2, the speaker says the chosen road has "perhaps the better claim" — then says both had "worn them really about the same." What effect does this contradiction create?',
      options: [
        { label: 'It shows the speaker is confused and cannot describe the roads accurately', correct: false, feedback: 'The contradiction is deliberate, not confused. Frost is showing how the speaker rationalises a choice and then undermines that rationalisation within the same stanza.' },
        { label: 'It reveals that the speaker\'s reason for choosing is false — the roads were equal, making the choice arbitrary', correct: true, feedback: 'Precisely. The contradiction is Frost\'s central irony. The speaker builds a reason ("grassy and wanted wear") then confesses it isn\'t true ("really about the same"). The choice that will define his life was made almost randomly.' },
        { label: 'It shows that both roads were equally beautiful and the speaker was right to feel torn', correct: false, feedback: 'This reading misses the irony. The point is not that both roads were beautiful, but that the difference the speaker claims does not actually exist in the text.' },
        { label: 'It demonstrates that nature cannot be described accurately in poetry', correct: false, feedback: 'This is a misreading of the poem\'s purpose. The contradiction is thematic, not a comment on the limits of description.' },
      ],
    },
    {
      id: 'rnt-q2',
      type: 'hots',
      question: 'To what extent is "The Road Not Taken" a poem about self-deception?',
      options: [
        { label: 'Not at all — it is a straightforward celebration of individual choice', correct: false, feedback: 'This is the famous misreading. The poem does not celebrate a genuinely different choice — it anticipates the speaker inventing one. "Self-deception" is precisely the right reading.' },
        { label: 'Primarily: the speaker predicts he will claim the road made "all the difference" — yet we know both roads were "really about the same"', correct: true, feedback: 'Excellent. The poem is fundamentally about how we create heroic narratives from ordinary moments. The speaker in old age will claim his choice was meaningful and individual — but Frost has shown us it was nearly arbitrary. This is not triumphant individualism; it is self-deception.' },
        { label: 'Partially — the speaker is regretful but not deceiving himself', correct: false, feedback: 'If anything, the speaker is pre-deceiving himself — predicting the story he will tell in old age. He knows the roads were equal but anticipates claiming otherwise.' },
        { label: 'The poem is about fate, not self-deception', correct: false, feedback: 'There is no suggestion of fate in the poem. The speaker makes a choice — however arbitrary — and then constructs meaning around it. Agency, not fate, is the poem\'s concern.' },
      ],
    },
    {
      id: 'rnt-q3',
      type: 'hots',
      question: '"And that has made all the difference." Is this line triumphant, regretful, or deliberately ambiguous? Justify your interpretation.',
      options: [
        { label: 'Triumphant — the speaker celebrates his brave, individual choice', correct: false, feedback: 'This reading takes the final stanza at face value without accounting for stanzas 2-3. The speaker has already told us the roads were "really about the same" — so any triumph is built on a false premise.' },
        { label: 'Deliberately ambiguous — "difference" is never qualified and "sigh" is never explained, leaving both positive and negative readings open', correct: true, feedback: 'The strongest reading. "Difference" could be good or bad; "sigh" could express satisfaction or regret. Frost refuses to resolve the ambiguity — which is the poem\'s most sophisticated quality. The speaker will claim a heroic narrative; Frost does not endorse it.' },
        { label: 'Regretful — the speaker wishes he had taken the other road', correct: false, feedback: 'Possible, but too simple. The poem is not a lament — it is a meditation on how we construct stories about our lives. Pure regret doesn\'t account for the predictive, self-aware quality of stanza 4.' },
        { label: 'Ironic — the speaker knows the difference was minimal and is being sarcastic', correct: false, feedback: 'Pure sarcasm is too cynical a reading. The poem is subtler — the speaker half-believes his future story even as the poem reveals its untruth.' },
      ],
    },
  ],
  bridging: [
    { type: 'text-text', label: 'Text ↔ Text', question: 'Compare how Frost in "The Road Not Taken" and Malamud in "A Summer\'s Reading" explore the human need to construct a flattering narrative about oneself.', scaffold: 'Frost\'s speaker invents a heroic past (the brave choice). George invents a heroic present (reading 100 books). Both construct false stories to manage identity. Compare the motivation and outcome.' },
    { type: 'text-author', label: 'Text ↔ Author', question: 'Frost\'s biographer described him as "a loner who liked company; a poet of isolation who sought a mass audience; a rebel who sought to fit in." How is this reflected in the poem?', scaffold: 'Like the poet, the speaker walks alone (the loner), chooses the "less traveled" road (the rebel), yet keeps the other road as an option and imagines telling the story for an audience (seeking company, seeking to fit in).' },
    { type: 'text-world', label: 'Text ↔ World', question: 'The poem has been used in countless graduation speeches as a celebration of non-conformity. What does this popular use reveal about what people want poems to say — and what happens when a poem\'s meaning is distorted?', scaffold: 'The misreading became more famous than the poem. What does it mean when a poem\'s "popular" interpretation contradicts its actual meaning? Is a poem\'s cultural life independent of its author\'s intention?' },
    { type: 'text-self', label: 'Text ↔ Self', question: 'Have you ever made a choice, then later told the story of that choice as more deliberate or meaningful than it actually was? What does Frost\'s poem reveal about this tendency?', scaffold: 'Think of a specific moment — a school choice, a friendship, a path taken or not taken. How do you narrate it now? Is it more heroic in the retelling?' },
  ],
  writingPrompts: [
    { type: 'Evaluation Essay', prompt: '"The Road Not Taken is not about the courage to be different — it is about the human need to make random choices feel significant." To what extent do you agree?', guidance: 'Use evidence from stanzas 2, 3, and 4. Address "really about the same" vs. the final claim. A strong answer engages with the poem\'s irony rather than accepting the popular misreading.' },
    { type: 'Comparative Essay', prompt: 'Compare how Frost in "The Road Not Taken" and Angelou in "Caged Bird" use a single extended metaphor to explore complex emotional realities.', guidance: 'Frost: roads = life choices. Angelou: caged bird = oppressed person. How does each metaphor create layers of meaning? What are its limits?' },
  ],
}

const asIGrewOlder: PoemMeta = {
  id: 'as-i-grew-older',
  type: 'poem',
  title: 'As I Grew Older',
  author: 'Langston Hughes',
  year: 1926,
  accentColor: '#7B4FC8',
  bgColor: '#120826',
  themes: ['Dreams Deferred', 'Racial Barriers', 'Hope & Resistance', 'Light vs. Darkness'],
  form: 'Free verse · 4 movements',
  keyFeature: 'Visual structure mirrors theme · Harlem Renaissance',
  copyrightFree: true,
  specialNote: 'Structural Design',
  specialNoteContent: 'Hughes\'s poem uses visual structure as a literary device. The indentation of "Rose slowly, / Slowly" enacts the wall\'s physical rising on the page. The poem moves from "I have almost forgotten my dream" to "a thousand whirling dreams of sun" — the single dream multiplied by resistance into infinity.',
  stanzas: [
    { label: 'The Dream', lines: [{ text: 'It was a long time ago.' }, { text: 'I have almost forgotten my dream.' }, { text: 'But it was there then,' }, { text: 'In front of me,' }, { text: 'Bright like a sun—', annotation: 'The dream as sun: the poem\'s central image established. Light = dream = hope = life. Everything that follows is measured against this opening brightness.' }, { text: 'My dream.' }] },
    { label: 'The Wall Rises', lines: [{ text: 'And then the wall rose,' }, { text: '    Rose slowly,', annotation: 'The indentation enacts the wall rising on the page. The poem\'s form mirrors its content.' }, { text: '        Slowly,' }, { text: 'Between me and my dream.' }, { text: 'Rose until it touched the sky—' }, { text: 'The wall.' }] },
    { label: 'The Shadow', lines: [{ text: 'Shadow.' }, { text: 'I am black.', annotation: 'The shortest, most powerful line. Hughes names the cause directly — three syllables that carry the full weight of the poem\'s political meaning.' }, { text: 'I lie down in the shadow.' }, { text: 'No longer the light of my dream before me,' }, { text: 'Above me.' }, { text: 'Only the thick wall.' }, { text: 'Only the shadow.' }] },
    { label: 'The Resistance', lines: [{ text: 'My hands!', annotation: 'The exclamation marks signal the emotional turn: from passive resignation to active resistance. "My hands!" — the speaker calls on his own body to act.' }, { text: 'My dark hands!' }, { text: 'Break through the wall!' }, { text: 'Find my dream!' }, { text: 'Help me to shatter this darkness,' }, { text: 'To smash this night,' }, { text: 'To break this shadow' }, { text: 'Into a thousand lights of sun,' }, { text: 'Into a thousand whirling dreams' }, { text: 'Of sun!' }] },
  ],
  stanzaAnalysis: [
    { number: 1, title: 'The Dream', analysis: 'The poem opens in the past: "it was a long time ago." The dream is described as bright like a sun — the poem\'s central image. The speaker has "almost forgotten" it, but not quite. The dream exists as a memory of potential.', keyInsight: 'The dream is solar: all-powerful, all-illuminating, life-giving.' },
    { number: 2, title: 'The Wall', analysis: 'The wall rises slowly — the gradual, accumulative nature of systemic oppression, not a single blow. The visual deepening of the indentation mirrors the wall\'s physical growth on the page.', keyInsight: '"Rose until it touched the sky" — totalising oppression. The wall is complete.' },
    { number: 3, title: 'The Shadow', analysis: '"I am black." — three syllables that name the cause of the wall directly. The shadow is not metaphorical; it is racial. The speaker "lies down" — passively accepts the darkness. This is the poem\'s nadir.', keyInsight: 'Hughes makes the political explicit: the wall is racism.' },
    { number: 4, title: 'The Resistance', analysis: 'The turn: "My hands! My dark hands! Break through the wall!" The speaker addresses his own body, calling on it to act. The dream multiplies in the resistance — "a thousand whirling dreams of sun." Opposition creates abundance.', keyInsight: 'Resistance does not recover the dream — it multiplies it into thousands.' },
  ],
  devices: [
    { type: 'Imagery', name: 'Light vs. Darkness', example: '"Bright like a sun" / "shadow" / "a thousand lights of sun"', explanation: 'The entire poem is structured around light (dream, hope, aspiration) vs. darkness (oppression, despair). The final multiplication of light ("a thousand lights") is the poem\'s argument made visual: resistance creates abundance.' },
    { type: 'Symbolism', name: 'The Wall', example: '"And then the wall rose"', explanation: 'The wall simultaneously represents physical barriers, systemic racism, and internalised oppression. It is social (you cannot go there), spatial (you cannot move), and psychological (you begin to believe the wall is permanent).' },
    { type: 'Structure', name: 'Visual Form', example: 'Deepening indentation of "Rose slowly, / Slowly"', explanation: 'The poem\'s layout enacts its content. The wall literally rises on the page as the indentation deepens. This is concrete poetry — form and meaning are inseparable.' },
    { type: 'Tone', name: 'Passive to Active', example: '"I lie down" → "Break through!"', explanation: 'The tonal shift from resignation ("I lie down in the shadow") to fierce resistance ("My hands! Break through!") is the poem\'s emotional arc. The exclamation marks signal the transformation.' },
  ],
  quizQuestions: [
    { id: 'aigo-q1', type: 'analysis', question: 'What is the significance of "I am black" appearing as an isolated two-word line?', options: [
      { label: 'It breaks rhythm for musical effect', correct: false, feedback: 'The line does create a rhythmic break, but its significance goes far beyond musicality. The isolation is thematic.' },
      { label: 'Its brevity and isolation give it maximum visual and emotional weight, naming the cause of the wall directly', correct: true, feedback: 'Exactly. The shortest line carries the most weight. Hughes does not hide the cause in metaphor — he names it plainly, forces the reader to stop, and lets the statement fill the surrounding space.' },
      { label: 'It shows the speaker is ashamed of his identity', correct: false, feedback: 'The poem ends with "My dark hands!" — dark is not shameful but powerful. Hughes is naming a social fact that causes the wall, not expressing shame.' },
      { label: 'Hughes uses short lines throughout, so this is not significant', correct: false, feedback: 'While the poem does use short lines, "I am black" is among the shortest and most isolated. Its placement after "Shadow." creates maximum impact.' },
    ] },
    { id: 'aigo-q2', type: 'hots', question: 'The poem ends with "a thousand whirling dreams of sun" rather than the single dream it began with. What is the significance of this change?', options: [
      { label: 'The speaker has given up his original dream and replaced it with many smaller ones', correct: false, feedback: 'The multiplication is not a consolation prize — it is an expansion. The resistance against oppression does not diminish the dream; it amplifies it.' },
      { label: 'Resistance transforms the single dream into thousands — oppression cannot destroy the dream; it multiplies it through the act of fighting back', correct: true, feedback: 'Excellent. This is the poem\'s most powerful insight: the act of resistance against oppression does not merely recover what was lost — it creates more. The individual dream becomes collective possibility. One sun becomes thousands.' },
      { label: 'The speaker is confused about what his dream is', correct: false, feedback: 'The speaker knows exactly what his dream is — it is bright like a sun. The multiplication is not confusion but expansion.' },
      { label: 'The plural dreams show the speaker has become less focused', correct: false, feedback: 'The plural dreams are not unfocused — they are all dreams "of sun." The core aspiration remains; only its scale has grown.' },
    ] },
  ],
  bridging: [
    { type: 'text-text', label: 'Text ↔ Text', question: 'Compare how Hughes in "As I Grew Older" and Angelou in "Caged Bird" use bird or natural images to explore racial oppression and the persistence of hope.', scaffold: 'Hughes uses the sun as the symbol of human aspiration. Angelou uses the caged bird\'s song. Both explore what survives oppression. Compare what each text argues about the human spirit under constraint.' },
    { type: 'text-author', label: 'Text ↔ Author', question: 'Hughes wrote during the Harlem Renaissance — a period when Black artists claimed cultural visibility and political resistance through art. How does this context shape the poem\'s movement from resignation to resistance?', scaffold: 'The Harlem Renaissance was itself a "breaking through." Hughes\'s poem enacts the Renaissance\'s core argument: cultural and spiritual resistance to systemic oppression.' },
    { type: 'text-world', label: 'Text ↔ World', question: 'Hughes wrote in 1926, four decades before the Civil Rights Act. In what ways does the poem\'s wall remain relevant to experiences of systemic inequality today?', scaffold: 'Structural barriers to education, housing, healthcare. The wall as systemic (not personal). The poem\'s relevance is not historical — it describes a structure that persists in different forms.' },
    { type: 'text-self', label: 'Text ↔ Self', question: 'Have you ever felt that something — a person, a system, a circumstance — stood between you and a dream? Did you lie down in the shadow, or did you find a way to break through?', scaffold: 'The wall does not have to be racial to be real. Any systemic barrier creates the same dynamic.' },
  ],
  writingPrompts: [
    { type: 'Thematic Essay', prompt: '"Hughes uses light and darkness not just as imagery, but as the poem\'s structural argument." Discuss with close reference to the poem.', guidance: 'Show how the light/dark contrast maps onto the poem\'s emotional arc: dream (sun) → wall (shadow) → resistance (thousand lights of sun). The final multiplication of sun is the argument made visual.' },
    { type: 'Comparative Essay', prompt: 'Compare how Hughes in "As I Grew Older" and Teasdale in "There Will Come Soft Rains" use nature imagery (sun, rain) for opposite purposes.', guidance: 'Hughes uses the sun as the symbol of human aspiration. Teasdale uses nature as the symbol of human insignificance. What does each reveal about the relationship between humanity and the natural world?' },
  ],
}

const thereWillCome: PoemMeta = {
  id: 'there-will-come-soft-rains',
  type: 'poem',
  title: 'There Will Come Soft Rains',
  author: 'Sara Teasdale',
  year: 1920,
  accentColor: '#2E86C1',
  bgColor: '#051020',
  themes: ['Nature vs. Humanity', 'War & Destruction', 'Indifference', 'Human Insignificance'],
  form: '6 rhyming couplets · AABB',
  keyFeature: 'Pastoral opening → devastating conclusion',
  copyrightFree: true,
  specialNote: 'Connection to Bradbury',
  specialNoteContent: 'Ray Bradbury used this poem in his 1950 story "There Will Come Soft Rains" — a smart house that continues its routines after nuclear war has killed everyone. Eventually the house reads this poem aloud to an empty room. Bradbury extended Teasdale\'s WWI meditation to the nuclear age — and the poem, in both contexts, says the same thing: the natural world will outlast our violence against ourselves.',
  stanzas: [
    { label: 'Stanzas 1–3 · The Pastoral World', lines: [
      { text: 'There will come soft rains and the smell of the ground,', annotation: '"There will come" — future tense. This is prophecy, not description. The gentle pastoral opening creates a false sense of peace.' },
      { text: 'And swallows circling with their shimmering sound;' },
      { text: 'And frogs in the pools singing at night,' },
      { text: 'And wild plum trees in tremulous white;' },
      { text: 'Robins will wear their feathery fire,' },
      { text: 'Whistling their whims on a low fence-wire;' },
    ] },
    { label: 'Stanza 4 · The Turn', lines: [
      { text: 'And not one will know of the war, not one', annotation: 'THE TURN. After three stanzas of pastoral beauty, "war" arrives. The repetition "not one... not one" emphasises nature\'s total indifference.' },
      { text: 'Will care at last when it is done.' },
    ] },
    { label: 'Stanzas 5–6 · The Conclusion', lines: [
      { text: 'Not one would mind, either bird or tree,' },
      { text: 'If mankind perished utterly;', annotation: '"Utterly" — completely, entirely, without remainder. The extinction of the human species as something nature would barely notice.' },
      { text: 'And Spring herself, when she woke at dawn' },
      { text: 'Would scarcely know that we were gone.', annotation: '"Scarcely know" — not "would not care" (cruel) but "scarcely know" (worse). We are so minor that Spring would barely register our absence.' },
    ] },
  ],
  stanzaAnalysis: [
    { number: 1, title: 'The Pastoral Setup', analysis: 'Three stanzas of specific, sensory nature images: soft rains, shimmering swallows, singing frogs, tremulous plum trees, robins with feathery fire. Every image is beautiful and alive. This is deliberate — the more beautiful the natural world appears, the more devastating the revelation that it will continue this way after we are gone.', keyInsight: 'The pastoral is not the poem\'s subject — it is its weapon.' },
    { number: 2, title: 'The Turn', analysis: 'Line 7: "And not one will know of the war, not one." After three stanzas of pastoral beauty, the word "war" arrives without warning. Everything that seemed beautiful is now quietly ominous — this beautiful world will continue as the war destroys humanity.', keyInsight: 'The single word "war" transforms the entire poem retroactively.' },
    { number: 3, title: 'The Conclusion', analysis: '"If mankind perished utterly" — the extinction of humanity described calmly, in the middle of a poem about spring. "Would scarcely know" — the understatement is the poem\'s most devastating choice. Not dramatic horror but quiet indifference.', keyInsight: '"Scarcely know" is more disturbing than "would not care." We do not even rise to the level of being mourned.' },
  ],
  devices: [
    { type: 'Irony', name: 'Structural Irony', example: 'Pastoral beauty → human extinction', explanation: 'The more beautiful Teasdale makes the natural world, the more devastating the implication that it will continue without us. The comfort of the opening becomes the horror of the ending.' },
    { type: 'Understatement', name: '"Scarcely know"', example: '"Would scarcely know that we were gone"', explanation: 'The extinction of humanity described as something Spring would "scarcely" notice. The deliberate understatement is more disturbing than explicit horror.' },
    { type: 'Personification', name: 'Spring as a Person', example: '"Spring herself, when she woke at dawn"', explanation: 'Spring is personified as a woman who might notice or not notice humanity\'s absence. The personification makes the indifference feel personal — and thus more painful.' },
    { type: 'Tone', name: 'Pastoral → Unsettling', example: 'Soft rains, swallows, frogs → "mankind perished utterly"', explanation: 'The tonal journey is the poem\'s central technique. The AABB rhyme scheme — almost nursery-rhyme-like — maintains the pastoral tone even as the content becomes devastating.' },
  ],
  quizQuestions: [
    { id: 'twcsr-q1', type: 'analysis', question: 'Why does Teasdale fill three stanzas with beautiful pastoral imagery before mentioning war in line 7?', options: [
      { label: 'To show that nature heals the wounds of war', correct: false, feedback: 'The poem\'s argument is not that nature heals — but that nature does not notice.' },
      { label: 'The pastoral beauty sets up a structural contrast — the more abundant nature appears, the more devastating the revelation that it will continue unchanged after humanity is gone', correct: true, feedback: 'Exactly. The pastoral is a setup. Every beautiful detail makes the final reveal more powerful: this beauty will continue — and it needs nothing from us.' },
      { label: 'She includes pastoral imagery because she is primarily a nature poet', correct: false, feedback: 'While Teasdale wrote nature poetry, the imagery here has a specific structural purpose: to establish what will outlast us.' },
      { label: 'The pastoral imagery represents the pre-war world', correct: false, feedback: 'The imagery is not in the past — it is in the future tense ("there will come"). This nature is what is coming after us, not what existed before the war.' },
    ] },
    { id: 'twcsr-q2', type: 'hots', question: '"Would scarcely know that we were gone" — is this line comforting, terrifying, or both? Justify your answer.', options: [
      { label: 'Comforting — nature will survive even if humanity destroys itself', correct: false, feedback: 'This reading captures only half the poem. There is comfort in nature\'s survival — but the word "scarcely" contains the horror: we matter so little that our extinction would barely be noticed.' },
      { label: 'Terrifying — nature actively wants humanity to disappear', correct: false, feedback: 'Nature does not want humanity to disappear — it simply does not notice us. Indifference, not hostility, is the poem\'s point.' },
      { label: 'Both — comforting (nature endures) and terrifying (we are so insignificant our extinction would barely register). The poem holds both simultaneously.', correct: true, feedback: 'Excellent. The poem is deliberately double. The comfort (nature survives our worst destruction) and the horror (we barely exist in nature\'s register) coexist. Teasdale does not resolve the tension — and that irresolution is what makes the poem great.' },
      { label: 'Neither — it is factual and Teasdale intends no emotional impact', correct: false, feedback: 'Every word choice in this poem is calculated for emotional impact. "Scarcely know" is not neutral description — it is the poem\'s most precise emotional cut.' },
    ] },
  ],
  bridging: [
    { type: 'text-text', label: 'Text ↔ Text', question: 'Compare how Teasdale and Hughes use nature imagery for opposite purposes — one as a symbol of human aspiration, the other as a symbol of human insignificance.', scaffold: 'Hughes: the sun is what the speaker fights toward. Teasdale: the soft rains will continue regardless. Compare what each poet\'s use of nature reveals about the relationship between humanity and the natural world.' },
    { type: 'text-author', label: 'Text ↔ Author', question: 'Teasdale wrote this poem in 1920, two years after WWI. How does the historical context of industrial-scale warfare shape the poem\'s pastoral imagery and final conclusion?', scaffold: 'The pastoral images (swallows, frogs, plum trees) contrast with readers\' memories of gas, mud, and machine guns. The poem\'s natural world is everything the war destroyed — and will reclaim.' },
    { type: 'text-world', label: 'Text ↔ World', question: 'Ray Bradbury extended Teasdale\'s poem to the nuclear age in his 1950 story. In what ways does the poem\'s argument remain relevant to climate change and the human impact on the natural world?', scaffold: 'The poem\'s claim: the natural world will outlast our destructive capacity. But does climate change challenge this? Can nature survive if we destroy the conditions for its existence?' },
    { type: 'text-self', label: 'Text ↔ Self', question: 'Have you experienced a moment in nature that made human concerns feel small or temporary? Was this comforting, unsettling, or both?', scaffold: 'Teasdale creates a specific emotional experience: human insignificance in the face of the natural world. Connect to a personal experience — a storm, a forest, the sea — where this feeling arose.' },
  ],
  writingPrompts: [
    { type: 'Evaluation Essay', prompt: '"Teasdale\'s poem is more disturbing than any poem about violence could be, because it describes not cruelty but indifference." Do you agree?', guidance: 'Compare the emotional effect of indifference vs. cruelty. Why might "scarcely knowing" be more unsettling than active mourning or destruction?' },
    { type: 'Comparative Essay', prompt: 'Compare how Angelou and Teasdale use the natural world to explore radically different relationships between humanity and nature.', guidance: 'Angelou: humans as caged within nature (birds as symbols of human potential and oppression). Teasdale: humans as invisible within nature. Compare what each positioning says about human value.' },
  ],
}

const bluebird: PoemMeta = {
  id: 'bluebird',
  type: 'poem',
  title: 'Bluebird',
  author: 'Charles Bukowski',
  year: 1992,
  accentColor: '#C0392B',
  bgColor: '#200808',
  themes: ['Hidden Emotion', 'Masculinity & Tenderness', 'Persona vs. Self', 'Vulnerability'],
  form: 'Free verse · Confessional',
  keyFeature: 'Copyrighted — analysis mode',
  copyrightFree: false,
  specialNote: 'Note on Access',
  specialNoteContent: '"Bluebird" (1992) is protected by copyright and appears in Bukowski\'s collection The Last Night of the Earth Poems. This module uses paraphrase and analysis to guide your study. Read the full poem at the Poetry Foundation or a licensed lyrics site before completing this module.',
  stanzaAnalysis: [
    { number: 1, title: 'Movement 1 — The Confession', analysis: 'The speaker opens with a startling admission: inside his tough exterior, there is a bluebird — a symbol of tenderness and genuine emotion. He speaks to the bluebird directly, telling it to stay hidden. He performs a "hard man" role for the world, and he knows it.', keyInsight: 'The speaker is not self-deceived. He knows the bluebird exists. The suppression is deliberate — which makes it more interesting than denial.' },
    { number: 2, title: 'Movement 2 — The Private Moments', analysis: 'Late at night, alone, the speaker lets the bluebird out briefly. He acknowledges the relationship between his public persona (the hard-drinking, cynical Bukowski figure) and his hidden inner self. He drinks, he talks to the bluebird, he allows it to exist — then puts it back.', keyInsight: 'The bluebird exists in the private self only. The public performance requires its suppression.' },
    { number: 3, title: 'Movement 3 — Defiant Tenderness', analysis: 'The poem ends with the speaker addressing the bluebird again. The suppression is no longer purely about social performance — there is something the speaker wants to protect. Keeping the bluebird hidden is, paradoxically, an act of love.', keyInsight: 'By writing this poem, Bukowski lets the bluebird out — even as he describes keeping it in. The poem is simultaneously concealment and exposure.' },
  ],
  devices: [
    { type: 'Symbolism', name: 'The Bluebird', example: '"there\'s a bluebird in my heart"', explanation: 'The bluebird is the speaker\'s hidden tender self — the part that feels genuinely, that could weep, that cares. It contrasts with the public persona of toughness Bukowski spent his career cultivating.' },
    { type: 'Voice', name: 'Confessional', example: 'First person, direct, colloquial', explanation: 'Bukowski writes in the first person with brutal directness. No metaphorical distance: "there\'s a bluebird in my heart." The colloquial language suits the subject — the tender self hidden beneath everyday language.' },
    { type: 'Irony', name: 'Performative Contradiction', example: 'Writing a poem about keeping the bluebird hidden', explanation: 'By writing this poem, Bukowski exposes the very thing he describes concealing. The poem is simultaneously the act of keeping the bluebird secret and the act of revealing it.' },
    { type: 'Tone', name: 'Defiant Tenderness', example: 'Hard-drinking persona + bluebird admission', explanation: 'The tone combines toughness (the drinking, the persona) with surprising gentleness (the bluebird, the private moments). The defiance is in the combination — being tender AND tough, refusing to choose.' },
  ],
  quizQuestions: [
    { id: 'bb-q1', type: 'analysis', question: 'What does the bluebird symbolise in Bukowski\'s poem — and how does this compare to the bird symbol in Angelou\'s "Caged Bird"?', options: [
      { label: 'Both birds symbolise freedom and both poets argue the birds should be released', correct: false, feedback: 'Angelou\'s bird wants to be released — it sings of freedom despite captivity. Bukowski\'s bluebird is kept hidden by its keeper\'s deliberate choice. The relationship between bird and keeper is fundamentally different.' },
      { label: 'Angelou\'s bird is caged by external oppression against its will; Bukowski\'s bluebird is suppressed by internal choice. Both address restriction, but the cause and agent of confinement are opposite.', correct: true, feedback: 'Excellent comparative analysis. The cage structure is shared — but Angelou\'s bird did not choose its cage, while Bukowski\'s speaker deliberately suppresses the bluebird. One cage is political; the other is psychological and chosen.' },
      { label: 'Both birds symbolise hope and both poets use them identically', correct: false, feedback: 'The birds serve very different functions. Angelou\'s bird sings of freedom despite captivity. Bukowski\'s bluebird is kept deliberately hidden. The relationship with the containing space is different in each poem.' },
      { label: 'Neither bird is symbolic — both represent actual birds', correct: false, feedback: 'Both birds are clearly symbolic. Angelou\'s caged bird represents oppressed people; Bukowski\'s bluebird represents the speaker\'s hidden tender self.' },
    ] },
    { id: 'bb-q2', type: 'hots', question: 'Is the speaker\'s decision to keep the bluebird hidden a sign of emotional failure or a form of wisdom? Defend your reading.', options: [
      { label: 'Emotional failure — the speaker cannot be vulnerable and this limits him', correct: false, feedback: 'This reading is too simple. The poem\'s power lies in its refusal to resolve this question cleanly. Calling it pure failure misses the poem\'s complexity.' },
      { label: 'Pure wisdom — the world is harsh and protecting tenderness is always correct', correct: false, feedback: 'This reading is also too simple. The poem does not celebrate the suppression — it describes it. The cost of hiding the bluebird (inability to connect authentically) is part of the poem\'s meaning.' },
      { label: 'The poem holds both readings: suppression protects the tender self from a harsh world (wisdom) while also preventing authentic connection (limitation). Bukowski does not resolve this tension.', correct: true, feedback: 'This is the strongest reading. The poem is not a lesson — it is a portrait. It shows both the sense in hiding (protection) and the loss in hiding (isolation). The ambiguity is deliberate and is the poem\'s greatest strength.' },
      { label: 'The poem does not deal with wisdom or failure — it is simply descriptive', correct: false, feedback: 'Every poem about a moral dilemma invites evaluation. Bukowski is explicitly asking the reader to consider the relationship between public performance and private self.' },
    ] },
  ],
  bridging: [
    { type: 'text-text', label: 'Text ↔ Text', question: 'Both Bukowski\'s "Bluebird" and Angelou\'s "Caged Bird" use a bird in a restricted space as a central symbol. Compare the nature of the restriction, who controls it, and what the bird\'s situation reveals about the poem\'s theme.', scaffold: 'Angelou: external restriction (racism). Bukowski: self-imposed restriction (persona, self-protection). Both birds are confined. Both find a form of expression. But the meaning of the cage is entirely different.' },
    { type: 'text-author', label: 'Text ↔ Author', question: 'Bukowski spent his career cultivating a "hard man" persona. How does "Bluebird" complicate this persona — and what does writing this poem cost him?', scaffold: 'By writing this poem, Bukowski lets the bluebird out in the very act of describing keeping it in. The poem undermines the persona it describes.' },
    { type: 'text-world', label: 'Text ↔ World', question: 'The poem explores the social expectation that men suppress emotion. To what extent does "Bluebird" challenge this expectation, and to what extent does it reinforce it?', scaffold: 'Challenges: admits tenderness exists and is real. Reinforces: the speaker still keeps the bluebird hidden. The poem describes the problem without resolving it.' },
    { type: 'text-self', label: 'Text ↔ Self', question: 'Do you have a "bluebird" — an aspect of yourself you keep hidden from most people? What would it cost you to show it more publicly?', scaffold: 'The bluebird does not have to be about gender. It can be any tender, vulnerable, or "unacceptable" aspect of the self that social performance requires hiding.' },
  ],
  writingPrompts: [
    { type: 'Comparative Essay', prompt: 'Compare how Bukowski in "Bluebird" and Angelou in "Caged Bird" use the image of a restricted bird to explore the relationship between confinement and authentic self-expression.', guidance: 'Focus on: who controls the restriction, what the bird represents, whether expression continues despite restriction, and what the poem argues about the human spirit under constraint.' },
    { type: 'Evaluation Essay', prompt: '"In \'Bluebird,\' suppression of emotion is simultaneously a limitation and a form of self-preservation." Discuss with reference to structure, imagery, and voice.', guidance: 'Use the three movements of the poem. Develop both sides: limitation (inability to connect) and preservation (protecting something fragile).' },
  ],
}

// ── STORIES ────────────────────────────────────────────────────────

const summersReading: StoryMeta = {
  id: 'summers-reading',
  type: 'story',
  title: "A Summer's Reading",
  author: 'Bernard Malamud',
  year: 1956,
  accentColor: '#B7410E',
  bgColor: '#1A0800',
  themes: ["Education & Aspiration", "Shame & Redemption", "The American Dream", "Reputation vs. Reality"],
  setting: 'The Bronx, New York — a hot summer',
  narrator: 'Third person limited (close to George)',
  synopsis: "George Stoyonovich, 20, dropped out of high school and can't find work. To impress his neighbour Mr. Cattanzara, he claims he is reading 100 books over the summer. He isn't. The neighbourhood believes him, treats him with new respect — and George discovers that living up to a false reputation might be more powerful than the lie itself.",
  sections: [
    { title: 'Introduction — The Dead Summer', summary: "George is unemployed, aimless, drifting through hot Bronx nights. His father works in a fish market; his sister works in a Bronx cafeteria. George has big dreams but no direction.", keyQuote: "He had quit school many years ago, before finishing, and had not been able to find a satisfying job.", analysis: "The opening establishes George\'s stasis. The summer heat is literal and metaphorical — the world is paralysed, nothing moves. Malamud presents George with sympathy but without illusion: he has potential he is not using." },
    { title: 'The Lie', summary: "George tells Mr. Cattanzara — an educated, respected man he admires — that he is reading 100 books from a list. He is reading nothing.", analysis: "The lie is not malicious — it is aspirational. George wants to be the person Cattanzara would respect. The 100 books represent everything George wishes he had done. The lie is the dream taking a shortcut." },
    { title: 'The Reputation', summary: "Word spreads. The neighbourhood treats George differently — with respect, with expectation. People nod to him, acknowledge him. George has never been treated this way.", analysis: "The community\'s belief in George\'s reading transforms his social status. Malamud asks: what is the relationship between reputation and reality? George discovers that being believed to be educated changes how people treat you — and perhaps how you treat yourself." },
    { title: 'Cattanzara Knows', summary: "George realises that Cattanzara almost certainly knows the truth — the old man is perceptive and educated. Yet Cattanzara says nothing. He maintains the fiction.", analysis: "Cattanzara\'s silence is the story\'s most generous act. He chooses to preserve George\'s reputation — not because he believes the lie, but because he believes in George\'s potential. This is a kind of teaching: showing someone who they could be." },
    { title: 'The Crisis', summary: "George hears a rumour that Cattanzara has been telling people George is reading nothing. The neighbourhood\'s respect evaporates. George retreats to his room.", analysis: "Whether Cattanzara actually said this is ambiguous. The story suggests the rumour may be false. But George\'s reaction is instructive: he cannot sustain a false identity." },
    { title: 'The Library — Redemption', summary: "After weeks of hiding, George runs to the library. He begins to read for real. The story ends with him returning, running up the stairs — finally starting.", analysis: "The ending is deliberately minimal — we do not see George read 100 books. We see him begin. Malamud\'s point: redemption is not achievement but the decision to act. The running is the most important image in the story." },
    { title: 'The Title — A Summer\'s Reading', summary: "The title is ironic — George does almost no reading in his \'reading summer.\' But the summer teaches him something more important: what shame feels like, what respect feels like, and what it costs to earn one vs. fake the other.", analysis: "A \'summer\'s reading\' suggests a leisurely cultural enrichment. Malamud gives us the opposite — and then gives George the chance to begin." },
  ],
  characters: [
    { name: 'George Stoyonovich', role: 'Protagonist', description: '20 years old, dropped out of high school. Son of working-class immigrants. Intelligent but directionless — potential unrealised through inaction.', arc: 'Stasis → Lie → False reputation → Shame → Decision to act. George moves from passivity to the first step of authentic action.' },
    { name: 'Mr. Cattanzara', role: 'Moral Centre', description: 'Older, educated man in the neighbourhood. Works a modest job but is widely respected. Knows George has not read the books.', arc: 'Cattanzara does not change — he is the story\'s standard. His decision to maintain the fiction (rather than expose George) is the act of kindness that makes George\'s eventual redemption possible.' },
    { name: "George\'s Sister", role: 'Foil', description: 'Works in a Bronx cafeteria. Represents the reality George is trying to escape — honest labour, modest circumstances.', arc: 'Minor character. Her presence reminds us of the family context George comes from and the American Dream\'s demands.' },
  ],
  devices: [
    { type: 'Irony', name: 'The Summer\'s Reading', example: 'George reads nothing yet is celebrated for reading', explanation: 'The central situational irony: a summer devoted to reading in which no reading occurs. The irony is not cruel but instructive — the false reputation teaches George more than the books might have.' },
    { type: 'Symbolism', name: 'The Library / Running', example: '"George ran up the stairs..."', explanation: 'The library represents genuine learning, authentic aspiration. George\'s running at the end is the story\'s most important symbol: the decision to act is the beginning of change.' },
    { type: 'Character', name: 'Cattanzara\'s Silence', example: 'Knowing but not exposing', explanation: 'Cattanzara\'s silence is the story\'s most sophisticated moral act. By not exposing George, he preserves the possibility of George becoming who he claimed to be.' },
  ],
  quizQuestions: [
    { id: 'sr-q1', type: 'lots', question: 'Why did George tell Mr. Cattanzara he was reading 100 books?', options: [
      { label: 'He wanted to borrow the books from Cattanzara', correct: false, feedback: 'George does not ask for books from Cattanzara. The lie is about status and respect, not practical need.' },
      { label: 'He wanted to be the person Cattanzara would respect — and the 100 books represented his aspirations', correct: true, feedback: 'Correct. The lie is aspirational, not cynical. George wants Cattanzara\'s respect, and the reading represents everything he wishes he had done with his summer and his life.' },
      { label: 'He was trying to impress a girl in the neighbourhood', correct: false, feedback: 'There is no romantic motivation in the story. The relationship with Cattanzara is about mentorship and respect.' },
      { label: 'He genuinely forgot that he had not read the books', correct: false, feedback: 'George knows he has not read anything. The lie is deliberate — an aspiration presented as fact.' },
    ] },
    { id: 'sr-q2', type: 'hots', question: 'Why does Cattanzara choose not to expose George\'s lie? What does his silence reveal about his character?', options: [
      { label: 'Cattanzara is too kind to hurt George\'s feelings', correct: false, feedback: 'While Cattanzara is kind, "not wanting to hurt feelings" is too simple. His silence is more purposeful than this.' },
      { label: 'Cattanzara believes that preserving George\'s false reputation gives George the chance to become who he claimed to be — his silence is a form of faith', correct: true, feedback: 'Excellent. Cattanzara\'s silence is not passive — it is an active investment in George\'s potential. By not exposing the lie, Cattanzara forces George to choose: live up to the reputation or live with the shame.' },
      { label: 'Cattanzara does not realise George is lying', correct: false, feedback: 'Cattanzara is clearly perceptive and educated. The story strongly implies he knows the truth. His silence is chosen, not ignorant.' },
      { label: 'Cattanzara is afraid of George\'s reaction', correct: false, feedback: 'There is no suggestion of fear. Cattanzara is a respected, grounded figure. His silence comes from generosity, not fear.' },
    ] },
    { id: 'sr-q3', type: 'hots', question: 'Malamud ends the story with George running to the library. Why is the decision to act — not the actual reading — the story\'s true climax?', options: [
      { label: 'Because we need to see George start before we can believe he will finish', correct: false, feedback: 'This is a practical reading, but misses the story\'s deeper argument about the nature of change.' },
      { label: 'Because Malamud argues that redemption is not achievement but the decision to begin — the running itself is the moral transformation', correct: true, feedback: 'Precisely. Malamud is not writing a success story — he is writing a story about the moment when a person decides to become who they might be. The running is more powerful than the reading would be. The decision is the redemption.' },
      { label: 'Because showing 100 books would make the story too long', correct: false, feedback: 'The ending is minimal by deliberate choice, not practical constraint. Malamud has made a thematic argument about where the story\'s meaning lies.' },
      { label: 'Because George will probably fail again anyway', correct: false, feedback: 'The story does not invite this pessimistic reading. The running is presented as genuine — a real turning point, however modest.' },
    ] },
  ],
  bridging: [
    { type: 'text-text', label: 'Text ↔ Text', question: 'Compare how Malamud in "A Summer\'s Reading" and Frost in "The Road Not Taken" explore the human need to construct a flattering narrative about oneself.', scaffold: 'George invents a heroic present (reading 100 books). Frost\'s speaker invents a heroic past (the brave choice). Both manage identity through false self-presentation. Compare the motivation and the cost.' },
    { type: 'text-author', label: 'Text ↔ Author', question: 'Bernard Malamud was born in Brooklyn, son of Russian-Jewish immigrants. He was 15 at the start of the Great Depression and had to work in his twenties to support his widowed mother while attending college. How does this biographical information help you understand George?', scaffold: '①  Explain the new information in your own words. ② Connect to George\'s background with 2 specific examples (fish market father, sister in cafeteria / lie about reading). ③ State the connection explicitly: they are both sons of poor immigrants who realise education is the only way out.' },
    { type: 'text-world', label: 'Text ↔ World', question: 'Malamud writes about the American Dream — the belief that education and hard work lead to social mobility. To what extent does George\'s story support or challenge this dream?', scaffold: 'The story supports the dream (reading = possibility of escape) while showing its complexity (the dream requires actual work, not just performance of it).' },
    { type: 'text-self', label: 'Text ↔ Self', question: 'Have you ever created a false impression of yourself — in school, with friends, online — to seem more capable or impressive than you felt? What happened when the gap between the impression and reality became uncomfortable?', scaffold: 'George\'s situation is universal: the gap between who we present ourselves as and who we actually are. Connect to a specific experience, then return to the text.' },
  ],
  writingPrompts: [
    { type: 'Character Analysis Essay', prompt: '"Cattanzara\'s silence is the most important act in the story." Do you agree? Use evidence from the text to support your answer.', guidance: 'Analyse what Cattanzara\'s silence achieves. Compare what would have happened if he had exposed George. What does his silence reveal about his understanding of how people change?' },
    { type: 'Thematic Essay', prompt: '"In \'A Summer\'s Reading,\' shame is more educational than reading could ever be." To what extent do you agree?', guidance: 'George learns nothing from the books he did not read. He learns everything from the shame of being (possibly) exposed. Evaluate what this suggests about how people actually change.' },
  ],
}

const mrKnowAll: StoryMeta = {
  id: 'mr-know-all',
  type: 'story',
  title: 'Mr. Know-All',
  author: 'W. Somerset Maugham',
  year: 1947,
  accentColor: '#1F4E79',
  bgColor: '#050F1A',
  themes: ['Prejudice & First Impressions', 'Appearance vs. Reality', 'Honour & Sacrifice', 'Moral Reversal'],
  setting: 'Ocean liner, Pacific · Post-WWII',
  narrator: 'First person — a deeply unreliable, prejudiced narrator',
  synopsis: 'The narrator, who shares a cabin with Mr. Kelada, despises him immediately — he is too talkative, too confident, "not really British," Levantine. At a dinner table bet about a pearl necklace, Kelada is about to win and humiliate a woman\'s husband when he notices something — and deliberately loses, absorbing the humiliation himself. The narrator receives a note he cannot understand. The reader understands everything.',
  sections: [
    { title: 'The Narrator\'s Prejudice', summary: "The narrator is assigned to share a cabin with Mr. Kelada and is immediately hostile. Kelada is Levantine (Middle Eastern descent), British passport, too sociable, too confident — everything the narrator finds offensive in someone who is 'not quite\'.", analysis: "Maugham establishes the narrator as an unreliable observer whose prejudice shapes every description. The reader must learn to read against the narrator — understanding that everything he dislikes about Kelada may actually be Kelada\'s virtue." },
    { title: 'The Pearl Necklace Bet', summary: "At dinner, Mr. Ramsey (an American diplomat) bets that his wife\'s pearl necklace is artificial. Kelada, a pearl expert, offers to adjudicate. He handles the necklace and is about to pronounce it real — worth $15,000 — which would prove Mrs. Ramsey lied to her husband about its source.", analysis: "The bet seems like a trivial social dispute. But Kelada\'s expertise is genuine. His about-to-win position will expose Mrs. Ramsey — she is having (or has had) an affair. The real pearl is her secret." },
    { title: 'The Reversal', summary: "Kelada catches Mrs. Ramsey\'s desperate look. He immediately changes course: \'No, I was wrong. It\'s a very good imitation.\' He pays Ramsey the hundred dollars — losing publicly, absorbing humiliation from the narrator and others.", analysis: "This is the story\'s moral centre. Kelada understands everything in an instant and chooses to protect Mrs. Ramsey. He sacrifices his reputation — which the narrator has already attacked — to preserve a marriage and possibly a life." },
    { title: 'The Note', summary: "That night, an envelope slides under Kelada\'s door. Inside: a hundred-dollar bill. Mrs. Ramsey is repaying him. The narrator watches Kelada look at the bill and understands something — but is too limited to understand what.", analysis: "The narrator\'s incomprehension is the story\'s final irony. He cannot understand the moral transaction he has witnessed. His prejudice blinds him to Kelada\'s extraordinary generosity and moral intelligence." },
    { title: 'Moral Reversal', summary: "The story ends with the narrator going to sleep while Kelada 'had a look on his face that I didn\'t quite understand.' The reader understands perfectly. The narrator never will.", analysis: "Maugham\'s technique: the narrator reports everything without understanding it. The gap between what the narrator says and what the reader understands is the story\'s entire moral argument." },
  ],
  characters: [
    { name: 'The Narrator', role: 'Narrator / Antagonist', description: 'British, prejudiced, class-conscious. His dislike of Kelada is immediate and racial/social. He narrates the story but understands very little of what he reports.', arc: 'The narrator does not change. His final incomprehension is the story\'s point: prejudice prevents moral perception.' },
    { name: 'Mr. Kelada', role: 'Protagonist (though not the narrator)', description: 'British passport, Levantine descent. Pearl expert. Loud, sociable, generous. Everything the narrator dislikes. Actually the story\'s moral hero.', arc: 'Kelada appears as a braggart; is revealed as a man of extraordinary moral intelligence and sacrifice. The reversal is total.' },
    { name: 'Mrs. Ramsey', role: 'Catalyst', description: 'American diplomat\'s wife. The pearl necklace is her secret — a gift from a man other than her husband. Her desperate look triggers Kelada\'s decision.', arc: 'Mrs. Ramsey does not speak in the key scene. Her look communicates everything. She repays Kelada quietly, privately — the only gesture available to her.' },
  ],
  devices: [
    { type: 'Irony', name: 'Unreliable Narrator', example: 'Narrator reports without understanding', explanation: 'The narrator\'s prejudice makes him unable to interpret what he observes. The reader sees clearly what the narrator cannot: Kelada\'s moral heroism. The gap between narrator and reader is Maugham\'s technique.' },
    { type: 'Character Reversal', name: 'Appearance vs. Reality', example: 'Kelada: braggart → moral hero', explanation: 'Everything the narrator disliked about Kelada (confidence, talkativeness, social ease) is reframed by the reversal. These qualities are not flaws — they were Kelada\'s public face, behind which lies a private moral seriousness.' },
    { type: 'Symbolism', name: 'The Pearl', example: 'Real vs. imitation pearl', explanation: 'The pearl is literally real but declared imitation. Like Kelada: genuinely valuable but dismissed as counterfeit by a prejudiced observer. The pearl is the story\'s central symbol.' },
    { type: 'Structure', name: 'The Final Note', example: 'The hundred-dollar bill', explanation: 'The story\'s final image: Kelada receives repayment in secret. He has paid $100 and absorbed public humiliation to protect a woman he barely knows. The narrator goes to sleep without understanding. The reader cannot.' },
  ],
  quizQuestions: [
    { id: 'mka-q1', type: 'lots', question: 'Why does Mr. Kelada change his verdict about the pearl necklace?', options: [
      { label: 'He realises he made a mistake and the pearls are actually fake', correct: false, feedback: 'The pearls are real — Kelada is a pearl expert and knows it. He changes his verdict not because he was wrong, but to protect Mrs. Ramsey.' },
      { label: 'He sees Mrs. Ramsey\'s desperate look and understands that declaring the pearls real would expose her secret and destroy her marriage', correct: true, feedback: 'Correct. Kelada understands everything in an instant. His expertise tells him the pearls are real. Mrs. Ramsey\'s look tells him what is at stake. He chooses to protect her.' },
      { label: 'He is afraid of the narrator and wants to avoid conflict', correct: false, feedback: 'Kelada is not afraid of the narrator — if anything, he has been consistently friendly throughout. His reversal is entirely about Mrs. Ramsey.' },
      { label: 'He wants to win people\'s approval by appearing to be wrong', correct: false, feedback: 'The reversal does the opposite — it makes Kelada look wrong and foolish in front of the table. He absorbs humiliation, not approval.' },
    ] },
    { id: 'mka-q2', type: 'hots', question: 'What does the narrator\'s incomprehension at the story\'s end reveal about the effects of prejudice?', options: [
      { label: 'It shows the narrator is simply not very intelligent', correct: false, feedback: 'The narrator\'s failure is not one of intelligence but of moral imagination. He cannot understand Kelada\'s act because his prejudice has prevented him from seeing Kelada as fully human.' },
      { label: 'Prejudice prevents moral perception — the narrator cannot understand Kelada\'s heroism because he has already decided who Kelada is', correct: true, feedback: 'Precisely. The narrator reports every detail that would allow understanding, but cannot interpret them because his prejudice has already reached its verdict. This is Maugham\'s argument: prejudice is not just unfair to its target — it blinds the person who holds it.' },
      { label: 'The narrator understands but pretends not to', correct: false, feedback: 'There is no evidence of deliberate pretence. The final sentence — "a look I didn\'t quite understand" — reads as genuine incomprehension.' },
      { label: 'The story is ambiguous and the narrator may understand', correct: false, feedback: 'The story does not invite this reading. Maugham makes the narrator\'s limitations clear throughout. The final incomprehension is the story\'s ironic conclusion.' },
    ] },
    { id: 'mka-q3', type: 'hots', question: 'Is Mr. Kelada a villain, a fool, or a hero? Use evidence from the whole story to defend your reading.', options: [
      { label: 'A villain — he deliberately causes conflict throughout the voyage', correct: false, feedback: 'The narrator describes Kelada as irritating, but the story\'s evidence reframes this. What the narrator calls "showing off" is actually confidence and competence. The reversal reveals Kelada\'s true character.' },
      { label: 'A fool — he loses $100 unnecessarily', correct: false, feedback: 'Kelada knows exactly what he is doing. Choosing to lose $100 and absorb public humiliation to protect a stranger\'s secret is not foolish — it is morally intelligent at a high cost.' },
      { label: 'A hero — despite public humiliation and financial loss, he sacrifices his already-damaged reputation to protect a woman\'s marriage and possibly her life', correct: true, feedback: 'The strongest reading. Kelada\'s act is heroic in the classical sense: it requires sacrifice, it protects someone else, and it is performed without expectation of recognition. The narrator will never understand it. Maugham does, and so does the reader.' },
      { label: 'The story is ambiguous about Kelada\'s character', correct: false, feedback: 'The reversal is deliberate and total. Maugham structures the story specifically to reframe everything the narrator has said about Kelada. The moral verdict is clear.' },
    ] },
  ],
  bridging: [
    { type: 'text-text', label: 'Text ↔ Text', question: 'Compare how Maugham in "Mr. Know-All" and Malamud in "A Summer\'s Reading" use the theme of reputation — one to be protected by a lie, one to be sacrificed for truth.', scaffold: 'George protects his false reputation by maintaining a lie. Kelada sacrifices his (already damaged) reputation to protect another\'s secret. Compare the relationship between reputation, truth, and moral integrity in each text.' },
    { type: 'text-author', label: 'Text ↔ Author', question: 'Maugham was himself a social outsider — gay in an era when this was illegal in Britain, and of mixed heritage. How might his own experience of prejudice shape how he portrays Kelada and the narrator?', scaffold: 'Maugham understood what it felt like to be judged by surface. His narrator\'s prejudice against Kelada maps onto social prejudices Maugham himself experienced. The story may be his argument against exactly this kind of dismissal.' },
    { type: 'text-world', label: 'Text ↔ World', question: 'Kelada is dismissed partly because he is "not really British" — he has a British passport but Levantine (Middle Eastern) origins. In what ways does this reflect historical and contemporary attitudes to belonging and identity?', scaffold: 'The question of who "counts" as belonging to a nation is still alive. Kelada\'s passport does not protect him from the narrator\'s hostility. Connect to contemporary debates about citizenship, identity, and who belongs.' },
    { type: 'text-self', label: 'Text ↔ Self', question: 'Have you ever judged someone quickly based on first impressions, only to discover that your judgment was wrong? What did you learn about the gap between appearance and reality?', scaffold: 'The narrator never revises his view of Kelada even after witnessing his heroism. Think about a moment when you did revise a judgment — and what it took to do so.' },
  ],
  writingPrompts: [
    { type: 'Character Essay', prompt: '"The most important character in \'Mr. Know-All\' is not Kelada but the narrator." To what extent do you agree?', guidance: 'Consider: whose moral failure drives the story? Whose incomprehension is the story\'s conclusion? Whose prejudice Maugham is anatomising? You can argue for Kelada as the moral centre while acknowledging the narrator is the story\'s lens.' },
    { type: 'Comparative Essay', prompt: 'Compare how Maugham in "Mr. Know-All" and Malamud in "A Summer\'s Reading" use irony to expose the gap between how characters present themselves and who they really are.', guidance: 'Maugham: narrator presents as reliable; is revealed as prejudiced and morally blind. George: presents as reader; is not. Compare how each author uses the gap between presentation and reality to make their argument.' },
  ],
}

// ── EXPORT ──────────────────────────────────────────────────────────

export const allTexts: TextMeta[] = [
  cagedBird,
  roadNotTaken,
  asIGrewOlder,
  thereWillCome,
  bluebird,
  summersReading,
  mrKnowAll,
]

export const poems = allTexts.filter(t => t.type === 'poem') as PoemMeta[]
export const stories = allTexts.filter(t => t.type === 'story') as StoryMeta[]

export function getTextById(id: string): TextMeta | undefined {
  return allTexts.find(t => t.id === id)
}
