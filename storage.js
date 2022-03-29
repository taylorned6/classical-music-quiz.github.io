

let highScoresList = [
    {Name: 'Ned', Score: '40/50'},
]

function getHighScoresList() {
 let listOfScores = highScoresList;
 return listOfScores;
}

function appendScore(name,score) {
highScoresList.push({Name: name, Score: score})
}


function addBlankEntries(arrayOfQuestions) {

    for (i = 0; i < arrayOfQuestions.length; i++) {
        for (j=0; j < Number(arrayOfQuestions[i].numButtons)-1; j++){
            arrayOfQuestions[i].answers.push({text: 'pushed', correct: false})
        }
    }
}
function getParentCategories() {

    const parentCategoryEntries = {
        piano: [
            "Wolfgang Amadeus Mozart - Piano Concerto No 21",
            "Tchaikovsky - Piano Concerto 1 (B Flat Minor)",
            'Moonlight Sonata - Ludwig van Beethoven',
            'Piano Sonata No. 16 - Mozart',
            'Rondo Alla Turca - Mozart',
            'Fur Elise - Beethoven',
            "Funeral March - Chopin",
            "Joy of Man's Desiring - Bach",
            'Liszt - Liebestraum',
            'Henry Purcell - Ground in C Minor',
            'Beethoven - Pathetique Sonata',
            'Paganini_Liszt - Etude No. 6',
            'Scott Joplin - The Entertainer',
            'Rachmaninoff - Prelude in G Minor',
            'Dvořák  Humoresque No. 7 in G Flat',
            'Chopin - Minute Waltz',
            'Beethoven - Appassionata',
            'Chopin - Prelude Op.28 No.16 in B flat minor',
            'Chopin - Polonaise, Op. 53 (heroic)',

            ],
        orchestra: [
            'Eine kleine Nachtmusik - Mozart',
            'Symphony No. 6 - Ludwig Van Beethoven',
            'Symphony No. 5 - Ludwig van Beethoven',
            'In the Hall of the Mountain King - Grieg',
            'The Barber of Seville - Gioachino Rossini',
            'Mozart - The Marriage of Figaro (Overture)',
            "Symphony No. 9 (New World): IV",
            "Beethoven - 7th Symphony",
            'Verdi - La Traviata - Drinking Song',
            'Haendel - Sarabande',
            'Mendelssohn - Symphony No. 4 in A (Italian)',
            'Waltz "Snowstorm - Georgy Sviridov',
            'Johann Christian Bach - Symphony in G-minor',
            ],
        russian: [
            '1812 Overture - Tchaikovsky',
            'William Tell Overture - Rossini',
            'Sabre Dance - Aram Khachaturian',
            'Bolero - André Rieu',
            'Dance of the Sugar Plum Fairy - Tchaikovsky',
            'Infernal Galop - Offenbach',
            'Walts of the Flowers - Tchkaikovsky',
            'Tchaikovsky Nutcracker Suite - Russian Dance Trepak',
            "P. Tchaikovsky - Pas de Deux ('The Nutcracker')",
            'Schubert - Military March'
            ],
        theatre: [
            "Adagio for Strings - Samuel Barber",
            "Joy of Man's Desiring - Bach",
            'Cello Suite No 1 - Bach',
            'Canon In D Major - Pachelbel',
            'Mendelssohn  - Spring Song',
            'Felix Mendelssohn - Violin Concerto in E minor',
            "Mendelssohn A Midsummer Night's Dream - Wedding March",
            'Entry of the Gladiators - Julius Fucik',
            'Habanera - Georges Bizet',
            'The Ride of the Valkries - Richard Wagner',
            'Dance of the Knights - Prokofiev',
            "Hallelujah Chorus' from Handel's Messiah",
            'Colonel Bogey March',
            'Stars and Stripes Forever - John Philip Sousa',
            'Ave Maria - Franz Schubert',
            'Requiem in D Minor - Mozart',
            'Schubert - Serenade',
            "Sobre las Olas - Juventino Rosas",
            'Astor Piazzolla - Libertango',
            ],
        strings: [
            'Niko Polka - Johann Strauss II',
            'Radetszky March - Johann Strauss II',
            'Farewell to my Homeland',
            'Kaiser Walzer - Johann Strauss II',
            'Tritsch Tratcsh Polka - Johann Strauss II',
            'The Blue Danube - Johann Strauss II',
            'Annen Polka op. 117 - Johann Strauss II',
            'Kaiser Walzer - Johann Strauss II',
            'Tales from the Vienna Woods - Johann Strauss II',
            "Johann Strauss II - Artist's Life",
            "Adagio for Strings - Samuel Barber",
            "The Thieving Magpie - Gioachino Rossini",
            'The Barber of Seville - Gioachino Rossini',
            'La Gioconda - The Dance of the Hours (Ponchielli)',
            "Mussorgsky's Promenade Pictures at an Exhibition",
            'Declaration of Love - Alfred Schnittke',
            "Vivaldi - The Four Seasons (Spring)",
            'Vivaldi - The Four Seasons (Summer)',
            'Vivaldi - The Four Seasons (Winter)',
            "Johann Strauss II - Voices of Spring",

            ],
        bach: [
            "Air on G String - Bach",
            "Joy of Man's Desiring - Bach",
            'Toccata and Fugue in D Minor - Mozart',
            'Johann Sebastian Bach - Bouree In E Minor',
            'Karl Jenkins- Palladio',
            'Henry Purcell - Trumpet Tune and Air',
            'Henry Purcell - Rondeau from Abdelazer',
            'Bach - Brandenburg Concerto No. 1',
            'Bach - Concerto in D Minor',
            'Bach - Concerto for violin and oboe in C Minor',
            'Oboe Concerto in D Minor - Handel'
            ],
        }
    return parentCategoryEntries;
    }

function getCategories() {
    const categories = [
        {
            text: [    //Strauss 0
            'Niko Polka - Johann Strauss II',
            'Radetszky March - Johann Strauss II',
            'Farewell to my Homeland',
            'Kaiser Walzer - Johann Strauss II',
            'Tritsch Tratcsh Polka - Johann Strauss II',
            'The Blue Danube - Johann Strauss II',
            'Annen Polka op. 117 - Johann Strauss II',
            'Kaiser Walzer - Johann Strauss II',
            'Tales from the Vienna Woods - Johann Strauss II',
            "Johann Strauss II - Voices of Spring",
            "Johann Strauss II - Artist's Life"
        ],
            numToAppend: 5,
            appendFrom: 'theatre'
        },
        {
            text: [    //Easy Piano 1
            'Rondo Alla Turca - Mozart',
            'Fur Elise - Beethoven',
            'Moonlight Sonata - Ludwig van Beethoven',
            'Piano Sonata No. 16 - Mozart',
        ],
            numToAppend: 6,
            appendFrom: 'piano'
        },
        {
            text: [    //Schubert/Ave Maria (max dif = medium) 2 
            'Ave Maria - Franz Schubert',
            'Requiem in D Minor - Mozart',
            'Schubert - Serenade',
        ],
            numToAppend: 6,
            appendFrom: 'theatre'
        },
        {
            text: [    //Symphony No.5 and similar 3
            'Eine kleine Nachtmusik - Mozart',
            'Symphony No. 6 - Ludwig Van Beethoven',
            'Symphony No. 5 - Ludwig van Beethoven',
            'In the Hall of the Mountain King - Grieg',
            'The Barber of Seville - Gioachino Rossini',
            'Mozart - The Marriage of Figaro (Overture)'
        ],
            numToAppend: 4,
            appendFrom: 'theatre'
        },
        {
            text:  [    //Tchaikovsky and other russian composers 4
            '1812 Overture - Tchaikovsky',
            'William Tell Overture - Rossini',
            'Sabre Dance - Aram Khachaturian',
            'Bolero - André Rieu',
            'Dance of the Sugar Plum Fairy - Tchaikovsky',
            'Infernal Galop - Offenbach',
            'Walts of the Flowers - Tchkaikovsky',
            'Tchaikovsky Nutcracker Suite - Russian Dance Trepak',
            "P. Tchaikovsky - Pas de Deux ('The Nutcracker')",
            'Schubert - Military March'
        ],
            numToAppend: 7,
            appendFrom: 'orchestra'
        },
        {
            text:  [    //Wedding and circus pieces 5
            "Mendelssohn A Midsummer Night's Dream - Wedding March",
            'Entry of the Gladiators - Julius Fucik',
            'Habanera - Georges Bizet',
            'The Ride of the Valkries - Richard Wagner',
            'Dance of the Knights - Prokofiev',
            "Hallelujah Chorus' from Handel's Messiah",
            'Colonel Bogey March',
            'Stars and Stripes Forever - John Philip Sousa'
        ],
            numToAppend: 5,
            appendFrom: 'russian' 
        },
        {
            text: [    //Paino (chopin and similar) 6
            "Chopin - Polonaise, Op. 53 (heroic)",

        ], 
            numToAppend: 10,
            appendFrom: 'piano'
        },
        {
            text: [    //Hungarian rhapdosy and dances(max dif = hard) 7
            "Hungarian Rhapsody No. 2 - Franz Liszt",
            'Johannes Brahms - Hungarian Dance No 6',
            'Johannes Brahms - Hungarian Dance No 1',
            'Johannes Brahms - Hungarian Dance No 5',
        ], 
            numToAppend: 7,
            appendFrom: 'theatre'
        },
        {
            text: [    //Spanish 8
            "Sobre las Olas - Juventino Rosas",
            'Astor Piazzolla - Libertango',

        ], 
            numToAppend: 11,
            appendFrom: 'strings'
        },
        {
            text: [    //Back (Air on G string and similar) 9
            "Air on G String - Bach",
            "Joy of Man's Desiring - Bach",
            'Toccata and Fugue in D Minor - Mozart',
            'Johann Sebastian Bach - Bouree In E Minor',
            'Karl Jenkins- Palladio',
            'Henry Purcell - Trumpet Tune and Air',
            'Henry Purcell - Rondeau from Abdelazer',
            'Bach - Brandenburg Concerto No. 1',
            'Bach - Concerto in D Minor',
            'Bach - Concerto for violin and oboe in C Minor',
            'Oboe Concerto in D Minor - Handel'
        ], 
            numToAppend: 5,
            appendFrom: 'orchestra'
        },
        {
            text: [    //Hard piano 10
            "Funeral March - Chopin",
            "Joy of Man's Desiring - Bach",
            'Liszt - Liebestraum',
            'Henry Purcell - Ground in C Minor',
            'Beethoven - Pathetique Sonata',
            'Paganini_Liszt - Etude No. 6',
            'Scott Joplin - The Entertainer',
            'Rachmaninoff - Prelude in G Minor',
            'Dvořák  Humoresque No. 7 in G Flat',
            'Chopin - Minute Waltz',
            'Beethoven - Appassionata',
            'Chopin - Prelude Op.28 No.16 in B flat minor',
            'Chopin - Polonaise, Op. 53 (heroic)',
    
        ], 
            numToAppend: 5,
            appendFrom: 'bach'
        },
        {
            text: [    //Sad cello/strings 11
            "Adagio for Strings - Samuel Barber",
            "Joy of Man's Desiring - Bach",
            'Cello Suite No 1 - Bach',
            'Canon In D Major - Pachelbel',
            'Mendelssohn  - Spring Song',
            'Felix Mendelssohn - Violin Concerto in E minor',
        ], 
            numToAppend: 8,
            appendFrom: 'strings'
        },
        {
            text: [    //Thieving magpie and similar 12
            "Adagio for Strings - Samuel Barber",
            "The Thieving Magpie - Gioachino Rossini",
            'The Barber of Seville - Gioachino Rossini',
            'La Gioconda - The Dance of the Hours (Ponchielli)',
            "Mussorgsky's Promenade Pictures at an Exhibition",
            'Declaration of Love - Alfred Schnittke',
        ], 
            numToAppend: 8,
            appendFrom: 'russian'
        },
        {
            text: [    //Symphonies hard 13
            "Symphony No. 9 (New World): IV",
            "Beethoven - 7th Symphony",
            'Verdi - La Traviata - Drinking Song',
            'Haendel - Sarabande',
            'Mendelssohn - Symphony No. 4 in A (Italian)',
            'Waltz "Snowstorm - Georgy Sviridov',
            'Eine kleine Nachtmusik - Mozart',
            'Johann Christian Bach - Symphony in G-minor'
            
        ], 
            numToAppend: 7,
            appendFrom: 'strings'
        },
        {
            text: [    //Piano concertos 14
            "Wolfgang Amadeus Mozart - Piano Concerto No 21",
            "Tchaikovsky - Piano Concerto 1 (B Flat Minor)",
            
        ], 
            numToAppend: 11,
            appendFrom: 'piano'
        },
        {
            text: [    //four seasons 15
            "Johann Strauss II - Voices of Spring",
            "Vivaldi - The Four Seasons (Spring)",
            'Vivaldi - The Four Seasons (Summer)',
            'Vivaldi - The Four Seasons (Winter)'
            
        ], 
            numToAppend: 5,
            appendFrom: 'orchestra'
        },
    ]
    return categories;
}




function getQuestionsEasy() {

    let questions = [ //EASY QUESTION BELOW #######################################################
        {
            answers: [
                { text: "Eine kleine Nachtmusik - Mozart", correct: true},
            ],
            fileName: 'Audio Files2/Eine Kleine Nachtmusik - Mozart (mp3cut.net).mp3',
            playTimeStart: 0,
            numButtons: '3',
            category: 3 //No. 5 and similar
        },
        {
            answers: [
                { text: "Rondo Alla Turca - Mozart", correct: true},
            ],
            fileName: 'Audio Files/Rondo-Alla-Turca-Mozart.mp3',
            playTimeStart: 0,
            numButtons: '3',
            category: 1 //Easy piano
        },
        {
            answers: [
                { text: "Fur Elise - Beethoven", correct: true},
            ],
            fileName: 'Audio Files/Beethoven-Fr-Elise-Piano-Version.mp3',
            playTimeStart: 0,
            numButtons: '3',
            category: 1 //Easy Piano
        },
    {
        answers: [
            { text: "Moonlight Sonata - Ludwig van Beethoven", correct: true},  
        ],
        fileName: 'Audio Files/Beethoven - Moonlight Sonata (1st Movement).mp3',
        playTimeStart: 4,
        numButtons: '3',
        category: 1 //Easy Piano
    },
    {
        answers: [
            { text: "In the Hall of the Mountain King - Grieg", correct: true}, 
        ],
        fileName: 'Audio Files2/Grieg - Peer Gynt Suite No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '3',
        category: 3 //No.5 and similar
    },
    {
        answers: [
            { text: "Requiem in D Minor - Mozart", correct: true},
        ],
        fileName: 'Audio Files2/Lacrimosa - Requiem em ré menor (K (mp3cut.net).mp3',
        playTimeStart: 4,
        numButtons: '3',
        category: 2 //Schubert and Ave Maria
    },
    {
        answers: [
            { text: "Lullaby - Brahms", correct: true},   
        ],
        fileName: 'Audio Files2/Yo-Yo Ma, Kathryn Stott - Lullaby (Brahms) (mp3cut.net).mp3',
        playTimeStart: 4,
        numButtons: '3',
        category: 2 //Schubert and Ave Maria
    },
    {
        answers: [
            { text: "Vivaldi - The Four Seasons (Spring)", correct: true},   
        ],
        fileName: 'Audio Files2/Spring (mp3cut.net).mp3',
        playTimeStart: 4,
        numButtons: '3',
        category: 15 //Four seasons
    },
]
addBlankEntries(questions);
return questions;
}

function getQuestionsMedium() {

let questionsMedium = [ //MEDIUM QUESTION BELOW #######################################################
    {
        answers: [
            { text: "Ave Maria - Franz Schubert", correct: true},
        ],
        fileName: 'Audio Files/Schubert-Ave-Maria-mp3cutnet (1).mp3',
        playTimeStart: 3,
        numButtons: '6',
        category: 2 //Schubert/Ave Maria
    },
    {
        answers: [
            { text: "Symphony No. 5 - Ludwig van Beethoven", correct: true},
        ],
        fileName: 'Audio Files/Beethoven-5th-Symphony-1st-movem.mp3',
        playTimeStart: 0,
        numButtons: '6',
        category: 3 //Symphony No.5 and similar
    },
    {
        answers: [
            { text: "Symphony No. 6 - Ludwig Van Beethoven", correct: true},
        ],
        fileName: 'Audio Files/Beethoven-Symphony-6-Pastoral-1s.mp3',
        playTimeStart: 0,
        numButtons: '6',
        category: 3 //Symphony No.5 and similar
    },
    {
        answers: [
            { text: "1812 Overture - Tchaikovsky", correct: true},
        ],
        fileName: 'Audio Files/Tchaikovsky - 1812 Overture (Full with Cannons) (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '6',
        category: 4 //Tchkaivosky and other russian composers
    },
    {
        answers: [
            { text: "William Tell Overture - Rossini", correct: true},
        ],
        fileName: 'Audio Files/Rossini - William Tell Overture - Final (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '6',
        category: 4 //Tchkaivosky and other russian composers
    },
    {
        answers: [
            { text: "Sabre Dance - Aram Khachaturian", correct: true},
        ],
        fileName: 'Audio Files/Aram Khachaturian - Sabre Dance (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '6',
        category: 4 //Tchkaivosky and other russian composers
    },
    {
        answers: [
            { text: "Symphony No. 9 - Beethoven", correct: true},
        ],
        fileName: 'Audio Files/Beethoven - Symphony No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '6',
        category: 4 //Tchkaivosky and other russian composers
    },
    {
        answers: [
            { text: "Bolero - André Rieu", correct: true},
        ],
        fileName: 'Audio Files2/André Rieu - Boléro (Ravel) (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '6',
        category: 4 //Tchkaivosky and other russian composers
    },
    {
        answers: [
            { text: "Mendelssohn A Midsummer Night's Dream - Wedding March", correct: true},
        ],
        fileName: "Audio Files2/Mendelssohn A Midsummer Night's Dream - Wedding March (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 5 //Wedding and circus pieces
    },
    {
        answers: [
            { text: "Dance of the Sugar Plum Fairy - Tchaikovsky", correct: true},
        ],
        fileName: "Audio Files2/Dance of the Sugar Plum Fairy from The Nutcracker (The Royal Ballet) (mp3cut.net).mp3",
        playTimeStart: 2,
        numButtons: '6',
        category: 4 //Tchkaivosky and other russian composers
    },
    {
        answers: [
            { text: "Entry of the Gladiators - Julius Fucik", correct: true},
        ],
        fileName: "Audio Files2/Julius Fucik - Entry of the Gladiators (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 5 //Mendelssohn and circus pieces
    },
    {
        answers: [
            { text: "Funeral March - Chopin", correct: true},
        ],
        fileName: "Audio Files2/Chopin - Marche Funèbre (Funeral March) (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: "Dance of the Knights - Prokofiev", correct: true},
        ],
        fileName: "Audio Files2/Prokofiev - Dance of the Knights (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 5 //Mendelssohn and circus pieces
    },
    {
        answers: [
            { text: "Cello Suite No 1 - Bach", correct: true},
        ],
        fileName: "Audio Files2/Yo-Yo Ma - Bach - Cello Suite No (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 11 //Sad cello
    },
    {
        answers: [
            { text: "Piano Sonata No. 16 - Mozart", correct: true},
        ],
        fileName: "Audio Files2/Mozart - Piano Sonata No (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 1 //Ez piano
    },
    {
        answers: [
            { text: "Toccata and Fugue in D Minor - Mozart", correct: true},
        ],
        fileName: "Audio Files2/Toccata and Fugue in D Minor (Best Version Ever) (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 9 //Air on G (Bach)
    },
    {
        answers: [
            { text: "Canon In D Major - Pachelbel", correct: true},
        ],
        fileName: "Audio Files2/Pachelbel - Canon In D Major (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 11 //Sad Cello
    },
    {
        answers: [
            { text: "Hallelujah Chorus' from Handel's Messiah", correct: true},
        ],
        fileName: "Audio Files2/Royal Choral Society - 'Hallelujah Chorus' from Handel's Messiah (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 5 //Circus
    },
    {
        answers: [
            { text: "La Gioconda - The Dance of the Hours (Ponchielli)", correct: true},
        ],
        fileName: "Audio Files2/Amilcare Ponchielli - La Gioconda - The Dance of the Hours (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 12 //Circus
    },
    {
        answers: [
            { text: "Scott Joplin - The Entertainer", correct: true},
        ],
        fileName: "Audio Files2/Scott Joplin - The Entertainer (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: "Schubert - Serenade", correct: true},
        ],
        fileName: "Audio Files2/Schubert - Serenade (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 2 //Ave maria
    },
    {
        answers: [
            { text: "Johannes Brahms - Hungarian Dance No 5", correct: true},
        ],
        fileName: "Audio Files2/Johannes Brahms -- Hungarian Dance No (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 7 //hungarian
    },
    {
        answers: [
            { text: "Astor Piazzolla - Libertango", correct: true},
        ],
        fileName: "Audio Files2/Astor Piazzolla - Libertango (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '6',
        category: 8 //spanish
    },
]
addBlankEntries(questionsMedium);
return questionsMedium;
}



function getQuestionHard() {

    let questionsHard = [ //HARD QUESTION BELOW #######################################################
    {
        answers: [
            { text: "The Blue Danube - Johann Strauss II", correct: true},
        ],
        fileName: 'Audio Files/André Rieu - The Beautiful Blue Danube (mp3cut.net).mp3',
        playTimeStart: 1,
        numButtons: '9',
        category: 0 //Strauss
    },
    {
        answers: [
            { text: "Annen Polka op. 117 - Johann Strauss II", correct: true},
        ],
        fileName: 'Audio Files/Annen-Polka op. 117 - Johann Straus II.mp3',
        playTimeStart: 12,
        numButtons: '9',
        category: 0 //Strauss
    },
    {
        answers: [
            { text: "Kaiser Walzer - Johann Strauss II", correct: true},
        ],
        fileName: 'Audio Files/Kaiser-Walzer - Johann Strauss (mp3cut.net).mp3',
        playTimeStart: 2,
        numButtons: '9',
        category: 0 //Strauss
    },
    {
        answers: [
            { text: "Tales from the Vienna Woods - Johann Strauss II", correct: true},
        ],
        fileName: 'Audio Files/Johann Strauss II - Tales from the Vienna Woods Waltz (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 0 //Strauss
    },
    {
        answers: [
            { text: "Tritsch Tratcsh Polka - Johann Strauss II", correct: true},
        ],
        fileName: 'Audio Files/Tritsch-Tratsch-Polka - Johann Strauss II (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 0 //Strauss
    },
    {
        answers: [
            { text: "Chopin - Polonaise, Op. 53 (heroic)", correct: true},
        ],
        fileName: 'Audio Files/Chopin - Polonaise, Op (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: 'F. Chopin : Polonaise op. 40 no. 1 in A major "Military"', correct: true},
        ],
        fileName: 'Audio Files/F (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 6 //Piano (chopin and similar)
    },
    {
        answers: [
            { text: 'Infernal Galop - Offenbach', correct: true},
        ],
        fileName: 'Audio Files/Offenbach - Infernal Galop (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 4 //Tchkaivosky and other russian composers
    },
    {
        answers: [
            { text: 'Pomp and Circumstance March - Sir Edward Elgar', correct: true},
        ],
        fileName: 'Audio Files/Sir Edward Elgar - Pomp and Circumstance March No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 4 //Tchkaivosky and other russian composers
    },
    {
        answers: [
            { text: 'Hungarian Rhapsody No. 2 - Franz Liszt', correct: true},
        ],
        fileName: 'Audio Files2/Franz Liszt - Hungarian Rhapsody No (mp3cut.net) (cool part).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 7 //Hungarion Rhapsody and dances
    },
    {
        answers: [
            { text: 'Hungarian Rhapsody No. 2 - Franz Liszt', correct: true},
        ],
        fileName: 'Audio Files2/Franz Liszt - Hungarian Rhapsody No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 7 //Hungarion Rhapsody and dances
    },
    {
        answers: [
            { text: 'Sobre las Olas - Juventino Rosas', correct: true},
        ],
        fileName: 'Audio Files2/Juventino Rosas - Sobre las Olas - Over the Waves (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 8 //Spanish
    },
    {
        answers: [
            { text: 'Air on G String - Bach', correct: true},
        ],
        fileName: 'Audio Files2/Johann Sebastian Bach-Air on G String (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 9 //Bach (air on G string and similar)
    },
    {
        answers: [
            { text: 'The Ride of the Valkries - Richard Wagner', correct: true},
        ],
        fileName: "Audio Files2/Richard Wagner - The ride of the Valkyries from 'Die Walküre' (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 5 //Circus and wedding pieces
    },
    {
        answers: [
            { text: 'Habanera - Georges Bizet', correct: true},
        ],
        fileName: 'Audio Files2/Georges Bizet -Carmen Instrumental (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 5 //Circus and wedding pieces
    },
    {
        answers: [
            { text: "Joy of Man's Desiring - Bach", correct: true},
        ],
        fileName: "Audio Files2/Bach - Cantata, BWV 147, Jesu, Joy of Man's Desiring (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 9 //Back (air on G and similar)
    },
    {
        answers: [
            { text: 'Walts of the Flowers - Tchkaikovsky', correct: true},
        ],
        fileName: 'Audio Files2/Tchaikovsky - Waltz of the Flowers (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 4 //Russian
    },
    {
        answers: [
            { text: 'Tchaikovsky Nutcracker Suite - Russian Dance Trepak', correct: true},
        ],
        fileName: 'Audio Files2/Tchaikovsky Nutcracker Suite - Russian Dance Trepak (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 4 //Russian
    },
    {
        answers: [
            { text: 'Adagio for Strings - Samuel Barber', correct: true},
        ],
        fileName: 'Audio Files2/Samuel Barber - Adagio for Strings (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 11 //Sad cello/strings
    },
    {
        answers: [
            { text: 'The Barber of Seville - Gioachino Rossini', correct: true},
        ],
        fileName: 'Audio Files2/Gioachino Rossini  - The Barber Of Seville - Overture (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 12 //The thieving magpie and similar
    },
    {
        answers: [
            { text: 'The Thieving Magpie - Gioachino Rossini', correct: true},
        ],
        fileName: 'Audio Files2/Rossini - La Gazza Ladra (The Thieving Magpie) - Overture [HQ] (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 12 //The thieving magpie and similar
    },
    {
        answers: [
            { text: 'Hungarian Dance No. 5 - Brahms', correct: true},
        ],
        fileName: 'Audio Files2/Johannes Brahms - Hungarian Dance No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 12 //The thieving magpie and similar
    },
    {
        answers: [
            { text: 'Mozart - The Marriage of Figaro (Overture)', correct: true},
        ],
        fileName: 'Audio Files2/Mozart - The Marriage of Figaro (Overture) (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 3 //No. 5 and similar
    },
    {
        answers: [
            { text: 'Colonel Bogey March', correct: true},
        ],
        fileName: 'Audio Files2/Colonel Bogey March (Original) (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 5 //Circus
    },
    {
        answers: [
            { text: 'Stars and Stripes Forever - John Philip Sousa', correct: true},
        ],
        fileName: 'Audio Files2/Stars and Stripes Forever - John Philip Sousa (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 5 //Circus
    },
    {
        answers: [
            { text: 'Wolfgang Amadeus Mozart - Piano Concerto No 21', correct: true},
        ],
        fileName: 'Audio Files2/Wolfgang Amadeus Mozart - Piano Concerto No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 14 //Piano concertos
    },
    {
        answers: [
            { text: 'Rachmaninoff - Prelude in G Minor', correct: true},
        ],
        fileName: 'Audio Files2/Rachmaninoff - Prelude in G Minor (Op (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 10 //Piano concertos
    },
    {
        answers: [
            { text: 'Mendelssohn - Symphony No. 4 in A (Italian)', correct: true},
        ],
        fileName: 'Audio Files2/Felix Mendelssohn - Symphony No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 13 //Symphonies hard
    },
    {
        answers: [
            { text: 'Declaration of Love - Alfred Schnittke', correct: true},
        ],
        fileName: 'Audio Files2/Alfred Schnittke - Declaration of Love (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '9',
        category: 12 //Piano concertos
    },
    {
        answers: [
            { text: 'Waltz "Snowstorm - Georgy Sviridov', correct: true},
        ],
        fileName: "Audio Files2/Georgy Sviridov -  Waltz 'Snowstorm' (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 13 //Symphonies hard
    },
    {
        answers: [
            { text: 'Chopin - Minute Waltz', correct: true},
        ],
        fileName: "Audio Files2/Chopin - Minute Waltz (Op (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: 'Vivaldi - The Four Seasons (Summer)', correct: true},
        ],
        fileName: "Audio Files2/Vivaldi - The Four Seasons - Summer (Presto) (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 15 //four seasons
    },
    {
        answers: [
            { text: 'Vivaldi - The Four Seasons (Winter)', correct: true},
        ],
        fileName: "Audio Files2/Vivaldi Four Seasons - Winter (L'Inverno), original version (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 15 //four seasons
    },
    {
        answers: [
            { text: 'Johannes Brahms - Hungarian Dance No 6', correct: true},
        ],
        fileName: "Audio Files2/Johannes Brahms - Hungarian Dance No 6(mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 7 //hungarian
    },
    {
        answers: [
            { text: 'Johannes Brahms - Hungarian Dance No 1', correct: true},
        ],
        fileName: "Audio Files2/Johannes Brahms - Hungarian Dance No 1 (mp3cut.net) (1).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 7 //hungarian
    },
    {
        answers: [
            { text: "Johann Strauss II - Artist's Life", correct: true},
        ],
        fileName: "Audio Files2/Johann Strauss II - Artist's Life (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '9',
        category: 0 //strauss
    },
]
addBlankEntries(questionsHard);
return questionsHard;
}

function getQuestionsExtreme() {

    let questionsExtreme = [ //EXTREME QUESTIONS BELOW #######################################################
    {
        answers: [
            { text: "Beethoven - 7th Symphony", correct: true},
        ],
        fileName: 'Audio Files2/Beethoven - 7th Symphony - 2nd movement (mp3cut.net).mp3',
        playTimeStart: 1,
        numButtons: '12',
        category: 13 //Symphonies hard
    },
    {
        answers: [
            { text: "1812 Overture - Tchaikovsky", correct: true},
        ],
        fileName: 'Audio Files/Tchaikovsky - 1812 Overture (Full with Cannons) (mp3cut.net) (1) (hard).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 4 //Russian
    },
    {
        answers: [
            { text: "Symphony No. 9 (New World): IV", correct: true},
        ],
        fileName: 'Audio Files2/Dvorak - Symphony No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 13 //Symphonies hard
    },
    {
        answers: [
            { text: "Liszt - Liebestraum", correct: true},
        ],
        fileName: 'Audio Files2/Liszt - Liebestraum No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: "Johann Sebastian Bach - Bouree In E Minor", correct: true},
        ],
        fileName: 'Audio Files2/Johann Sebastian Bach - Bouree In E Minor (mp3cut.net) (1).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 9 //Air on G (Bach)
    },
    {
        answers: [
            { text: "Karl Jenkins- Palladio", correct: true},
        ],
        fileName: 'Audio Files2/Karl Jenkins- Palladio (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 9 //Air on G (Bach)
    },
    {
        answers: [
            { text: "Henry Purcell - Ground in C Minor", correct: true},
        ],
        fileName: 'Audio Files2/Henry Purcell - Ground in C Minor (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 10 //piano hard
    },
    {
        answers: [
            { text: "Henry Purcell - Trumpet Tune and Air", correct: true},
        ],
        fileName: 'Audio Files2/Henry Purcell  -Trumpet Tune and Air (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 9 //air on g - bach
    },
    {
        answers: [
            { text: "Henry Purcell - Rondeau from Abdelazer", correct: true},
        ],
        fileName: 'Audio Files2/Henry Purcell - Rondeau from Abdelazer (Z570), Voices of Music; performed on original instruments 4K (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 9 //air on g - bach
    },
    {
        answers: [
            { text: "Bach - Brandenburg Concerto No. 1", correct: true}
        ],
        fileName: 'Audio Files2/Bach - Brandenburg Concerto No (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 9 //air on g - bach
    },
    {
        answers: [
            { text: "Bach - Concerto for violin and oboe in C Minor", correct: true},
        ],
        fileName: 'Audio Files2/Concerto for violin and oboe in C Minor, BWV 1060R - I (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 9 //air on g - bach
    },
    {
        answers: [
            { text: "Bach - Concerto in D Minor", correct: true},
        ],
        fileName: 'Audio Files2/Concerto in D Minor, BWV 1059 - II (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 9 //air on g - bach
    },
    {
        answers: [
            { text: "Mendelssohn  - Spring Song", correct: true},
        ],
        fileName: 'Audio Files2/Mendelssohn  - Spring Song (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 11 //air on g - bach
    },
    {
        answers: [
            { text: "Johann Strauss II - Voices of Spring", correct: true},
        ],
        fileName: 'Audio Files2/Johann Strauss II - Voices of Spring Waltz (mp3cut.net).mp3',
        playTimeStart: 0,
        numButtons: '12',
        category: 4 //russian
    },
    {
        answers: [
            { text: "Verdi - La Traviata - Drinking Song", correct: true},
        ],
        fileName: "Audio Files2/Verdi - La Traviata - Drinking Song (Libiamo ne' lieti calici) [HQ] (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 13 //Symphonies hard
    },
    {
        answers: [
            { text: "Beethoven - Pathetique Sonata", correct: true},
        ],
        fileName: "Audio Files2/Beethoven Pathetique Sonata 2nd Movement (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: "Beethoven - Pathetique Sonata", correct: true},
        ],
        fileName: "Audio Files2/Beethoven - Pathetique Sonata 1st movement (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: "Paganini_Liszt - Etude No. 6", correct: true},
        ],
        fileName: "Audio Files2/Paganini_Liszt - Etude No (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: "Tchaikovsky - Piano Concerto 1 (B Flat Minor)", correct: true},
        ],
        fileName: "Audio Files2/Tchaikovsky - Piano Concerto 1 (B Flat Minor) (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 14 //piano concertos
    },
    {
        answers: [
            { text: "Haendel - Sarabande", correct: true},
        ],
        fileName: "Audio Files2/Haendel - Sarabande (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 13 //symphonies hard
    },
    {
        answers: [
            { text: "Mussorgsky's Promenade Pictures at an Exhibition", correct: true},
        ],
        fileName: "Audio Files2/Mussorgsky's Promenade Pictures at an Exhibition (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 12 //thieving magpie
    },
    {
        answers: [
            { text: "Dvořák  Humoresque No. 7 in G Flat", correct: true},
        ],
        fileName: "Audio Files2/Dvořák  Humoresque No (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 10 //hard piano
    },
    {
        answers: [
            { text: "Felix Mendelssohn - Violin Concerto in E minor", correct: true},
        ],
        fileName: "Audio Files2/Felix Mendelssohn - Violin Concerto in E minor, Op (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 11 //sad cello
    },
    {
        answers: [
            { text: "P. Tchaikovsky - Pas de Deux ('The Nutcracker')", correct: true},
        ],
        fileName: "Audio Files2/P (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 4 //Russian
    },
    {
        answers: [
            { text: "Schubert - Military March", correct: true},
        ],
        fileName: "Audio Files2/Schubert - Military March (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 4 //Russian
    },
    {
        answers: [
            { text: "Eine kleine Nachtmusik - Mozart", correct: true},
        ],
        fileName: "Audio Files2/Mozart - Serenade in G, K (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 13 //Symphonies hard
    },
    {
        answers: [
            { text: "Oboe Concerto in D Minor - Handel", correct: true},
        ],
        fileName: "Audio Files2/Oboe Concerto in D Minor, S (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 9 //Air/bach
    },
    {
        answers: [
            { text: "Beethoven - Appassionata", correct: true},
        ],
        fileName: "Audio Files2/Beethoven - Appassionata 3rd Movement (Op (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 10 //hard p
    },
    {
        answers: [
            { text: "Johann Christian Bach - Symphony in G-minor", correct: true},
        ],
        fileName: "Audio Files2/Johann Christian Bach - Symphony in G-minor, Op (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 13 //symphonies p
    },
    {
        answers: [
            { text: "Chopin - Prelude Op.28 No.16 in B flat minor", correct: true},
        ],
        fileName: "Audio Files2/Chopin - Prelude Op (mp3cut.net).mp3",
        playTimeStart: 0,
        numButtons: '12',
        category: 10 //hard p
    },
]
addBlankEntries(questionsExtreme);
return questionsExtreme;
}