export interface Personaje {
    id?: number,
    name?: string,
    ki?: string,
    maxKi?: string; // Máxima fuerza (KI)
    race?: string; // Raza: [ Saiyan, Namekian, Human, Majin, Frieza Race, Jiren Race, Android, God, Angel, Evil, Unknown, Nucleico benigno, Nucleico ]
    gender?: string; // Género: [ Male, Female, Other, Unknown ]
    description?: string; // Descripción del personaje
    image?: string; // Imagen del personaje
    affiliation?: string; // Afiliación: [ Z Fighter, Red Ribbon Army, Namekian Warrior, Freelancer, Army of Frieza, Other, Pride Troopers, Assistant of Vermoud, Assistant of Beerus, Villain ]
}