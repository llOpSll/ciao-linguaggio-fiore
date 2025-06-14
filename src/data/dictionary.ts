
export interface WordTranslation {
  translation: string;
  pronunciation?: string;
  type?: string;
  examples?: string[];
}

export const wordTranslations: Record<string, WordTranslation> = {
  // Saudações e expressões básicas
  'ciao': {
    translation: 'oi, tchau',
    pronunciation: 'tshau',
    type: 'interj.',
    examples: ['Ciao, come stai?', 'Ciao, a presto!']
  },
  'buongiorno': {
    translation: 'bom dia',
    pronunciation: 'buon-dzhór-no',
    type: 'escl.',
    examples: ['Buongiorno, dottore!']
  },
  'buonasera': {
    translation: 'boa tarde/noite',
    pronunciation: 'buo-na-sé-ra',
    type: 'escl.',
    examples: ['Buonasera signora!']
  },
  'buonanotte': {
    translation: 'boa noite',
    pronunciation: 'buo-na-nót-te',
    type: 'escl.',
    examples: ['Buonanotte, sogni d\'oro!']
  },
  'arrivederci': {
    translation: 'até logo',
    pronunciation: 'ar-ri-ve-dér-tshi',
    type: 'escl.',
    examples: ['Arrivederci e buona giornata!']
  },
  'salve': {
    translation: 'olá',
    pronunciation: 'sál-ve',
    type: 'escl.',
    examples: ['Salve, come va?']
  },
  'grazie': {
    translation: 'obrigado',
    pronunciation: 'grá-tsi-e',
    type: 'escl.',
    examples: ['Grazie mille!', 'Grazie tante!']
  },
  'prego': {
    translation: 'de nada, por favor',
    pronunciation: 'pré-go',
    type: 'escl.',
    examples: ['Prego, si accomodi!']
  },
  'scusa': {
    translation: 'desculpa',
    pronunciation: 'skú-za',
    type: 'escl.',
    examples: ['Scusa il ritardo!']
  },
  'scusi': {
    translation: 'desculpe (formal)',
    pronunciation: 'skú-zi',
    type: 'escl.',
    examples: ['Scusi, dov\'è la stazione?']
  },
  
  // Números 1-20
  'uno': {
    translation: 'um',
    pronunciation: 'ú-no',
    type: 'num.',
    examples: ['Ho un cane', 'Uno più uno fa due']
  },
  'due': {
    translation: 'dois',
    pronunciation: 'dú-e',
    type: 'num.',
    examples: ['Due caffè, per favore']
  },
  'tre': {
    translation: 'três',
    pronunciation: 'tre',
    type: 'num.',
    examples: ['Tre volte al giorno']
  },
  'quattro': {
    translation: 'quatro',
    pronunciation: 'kuát-tro',
    type: 'num.',
    examples: ['Alle quattro e mezzo']
  },
  'cinque': {
    translation: 'cinco',
    pronunciation: 'tshín-kue',
    type: 'num.',
    examples: ['Cinque minuti di pausa']
  },
  'sei': {
    translation: 'seis',
    pronunciation: 'séi',
    type: 'num.',
    examples: ['Sei ore di lavoro']
  },
  'sette': {
    translation: 'sete',
    pronunciation: 'sét-te',
    type: 'num.',
    examples: ['Sette giorni alla settimana']
  },
  'otto': {
    translation: 'oito',
    pronunciation: 'ót-to',
    type: 'num.',
    examples: ['Otto e mezzo']
  },
  'nove': {
    translation: 'nove',
    pronunciation: 'nó-ve',
    type: 'num.',
    examples: ['Nove mesi']
  },
  'dieci': {
    translation: 'dez',
    pronunciation: 'dié-tshi',
    type: 'num.',
    examples: ['Dieci euro']
  },
  'undici': {
    translation: 'onze',
    pronunciation: 'ún-di-tshi',
    type: 'num.'
  },
  'dodici': {
    translation: 'doze',
    pronunciation: 'dó-di-tshi',
    type: 'num.'
  },
  'tredici': {
    translation: 'treze',
    pronunciation: 'tré-di-tshi',
    type: 'num.'
  },
  'quattordici': {
    translation: 'quatorze',
    pronunciation: 'kuat-tór-di-tshi',
    type: 'num.'
  },
  'quindici': {
    translation: 'quinze',
    pronunciation: 'kuín-di-tshi',
    type: 'num.'
  },
  'sedici': {
    translation: 'dezesseis',
    pronunciation: 'sé-di-tshi',
    type: 'num.'
  },
  'diciassette': {
    translation: 'dezessete',
    pronunciation: 'di-tshás-set-te',
    type: 'num.'
  },
  'diciotto': {
    translation: 'dezoito',
    pronunciation: 'di-tshót-to',
    type: 'num.'
  },
  'diciannove': {
    translation: 'dezenove',
    pronunciation: 'di-tshan-nó-ve',
    type: 'num.'
  },
  'venti': {
    translation: 'vinte',
    pronunciation: 'vén-ti',
    type: 'num.'
  },
  
  // Família
  'famiglia': {
    translation: 'família',
    pronunciation: 'fa-mí-glia',
    type: 's.f.',
    examples: ['La mia famiglia è grande']
  },
  'padre': {
    translation: 'pai',
    pronunciation: 'pá-dre',
    type: 's.m.',
    examples: ['Mio padre lavora in banca']
  },
  'madre': {
    translation: 'mãe',
    pronunciation: 'má-dre',
    type: 's.f.',
    examples: ['Mia madre cucina bene']
  },
  'figlio': {
    translation: 'filho',
    pronunciation: 'fí-glio',
    type: 's.m.',
    examples: ['Ho un figlio maschio']
  },
  'figlia': {
    translation: 'filha',
    pronunciation: 'fí-glia',
    type: 's.f.',
    examples: ['Mia figlia studia medicina']
  },
  'figli': {
    translation: 'filhos',
    pronunciation: 'fí-gli',
    type: 's.m.pl.',
    examples: ['I nostri figli sono bravi']
  },
  'fratello': {
    translation: 'irmão',
    pronunciation: 'fra-tél-lo',
    type: 's.m.',
    examples: ['Mio fratello è più giovane']
  },
  'sorella': {
    translation: 'irmã',
    pronunciation: 'so-rél-la',
    type: 's.f.',
    examples: ['Mia sorella vive a Roma']
  },
  'nonno': {
    translation: 'avô',
    pronunciation: 'nón-no',
    type: 's.m.',
    examples: ['Il nonno racconta storie']
  },
  'nonna': {
    translation: 'avó',
    pronunciation: 'nón-na',
    type: 's.f.',
    examples: ['La nonna fa i biscotti']
  },
  'zio': {
    translation: 'tio',
    pronunciation: 'tsí-o',
    type: 's.m.',
    examples: ['Zio Mario è simpatico']
  },
  'zia': {
    translation: 'tia',
    pronunciation: 'tsí-a',
    type: 's.f.',
    examples: ['Zia Anna abita lontano']
  },
  'cugino': {
    translation: 'primo',
    pronunciation: 'ku-dzhí-no',
    type: 's.m.',
    examples: ['Il mio cugino suona la chitarra']
  },
  'cugina': {
    translation: 'prima',
    pronunciation: 'ku-dzhí-na',
    type: 's.f.',
    examples: ['Mia cugina è molto intelligente']
  },
  
  // Cores
  'colore': {
    translation: 'cor',
    pronunciation: 'ko-ló-re',
    type: 's.m.',
    examples: ['Che colore preferisci?']
  },
  'rosso': {
    translation: 'vermelho',
    pronunciation: 'rós-so',
    type: 'agg.',
    examples: ['Una rosa rossa', 'Il semaforo è rosso']
  },
  'blu': {
    translation: 'azul',
    pronunciation: 'blu',
    type: 'agg.',
    examples: ['Il cielo è blu', 'Una camicia blu']
  },
  'verde': {
    translation: 'verde',
    pronunciation: 'vér-de',
    type: 'agg.',
    examples: ['L\'erba è verde', 'Occhi verdi']
  },
  'giallo': {
    translation: 'amarelo',
    pronunciation: 'dzhal-lo',
    type: 'agg.',
    examples: ['Il sole è giallo', 'Un fiore giallo']
  },
  'nero': {
    translation: 'preto',
    pronunciation: 'né-ro',
    type: 'agg.',
    examples: ['Un gatto nero', 'Capelli neri']
  },
  'bianco': {
    translation: 'branco',
    pronunciation: 'biàn-ko',
    type: 'agg.',
    examples: ['Neve bianca', 'Una casa bianca']
  },
  'rosa': {
    translation: 'rosa',
    pronunciation: 'ró-za',
    type: 'agg.',
    examples: ['Un vestito rosa', 'Guance rosa']
  },
  'viola': {
    translation: 'roxo',
    pronunciation: 'vi-ó-la',
    type: 'agg.',
    examples: ['Un fiore viola', 'Maglia viola']
  },
  'arancione': {
    translation: 'laranja',
    pronunciation: 'a-ran-tshó-ne',
    type: 'agg.',
    examples: ['Un\'arancia arancione']
  },
  'grigio': {
    translation: 'cinza',
    pronunciation: 'grí-dzho',
    type: 'agg.',
    examples: ['Un cielo grigio', 'Capelli grigi']
  },
  'marrone': {
    translation: 'marrom',
    pronunciation: 'mar-ró-ne',
    type: 'agg.',
    examples: ['Occhi marroni', 'Scarpe marroni']
  },
  
  // Comidas e bebidas
  'cibo': {
    translation: 'comida',
    pronunciation: 'tshí-bo',
    type: 's.m.',
    examples: ['Il cibo italiano è buono']
  },
  'pizza': {
    translation: 'pizza',
    pronunciation: 'pít-tsa',
    type: 's.f.',
    examples: ['Una pizza margherita']
  },
  'pasta': {
    translation: 'massa',
    pronunciation: 'pás-ta',
    type: 's.f.',
    examples: ['Pasta al pomodoro']
  },
  'pane': {
    translation: 'pão',
    pronunciation: 'pá-ne',
    type: 's.m.',
    examples: ['Pane fresco di giornata']
  },
  'formaggio': {
    translation: 'queijo',
    pronunciation: 'for-ádz-dzho',
    type: 's.m.',
    examples: ['Formaggio parmigiano']
  },
  'vino': {
    translation: 'vinho',
    pronunciation: 'ví-no',
    type: 's.m.',
    examples: ['Un bicchiere di vino rosso']
  },
  'acqua': {
    translation: 'água',
    pronunciation: 'ák-kua',
    type: 's.f.',
    examples: ['Un bicchiere d\'acqua']
  },
  'caffè': {
    translation: 'café',
    pronunciation: 'kaf-fè',
    type: 's.m.',
    examples: ['Un caffè espresso']
  },
  'gelato': {
    translation: 'sorvete',
    pronunciation: 'dzhe-lá-to',
    type: 's.m.',
    examples: ['Gelato al cioccolato']
  },
  'carne': {
    translation: 'carne',
    pronunciation: 'kár-ne',
    type: 's.f.',
    examples: ['Carne alla griglia']
  },
  'pesce': {
    translation: 'peixe',
    pronunciation: 'pé-she',
    type: 's.m.',
    examples: ['Pesce fresco del mare']
  },
  'pollo': {
    translation: 'frango',
    pronunciation: 'pól-lo',
    type: 's.m.',
    examples: ['Pollo arrosto']
  },
  'verdura': {
    translation: 'verdura',
    pronunciation: 'ver-dú-ra',
    type: 's.f.',
    examples: ['Verdura fresca']
  },
  'frutta': {
    translation: 'fruta',
    pronunciation: 'frút-ta',
    type: 's.f.',
    examples: ['Frutta di stagione']
  },
  'dolce': {
    translation: 'doce',
    pronunciation: 'dól-tse',
    type: 's.m./agg.',
    examples: ['Un dolce al cioccolato', 'Sapore dolce']
  },
  
  // Dias da semana
  'settimana': {
    translation: 'semana',
    pronunciation: 'set-ti-má-na',
    type: 's.f.',
    examples: ['Una settimana di vacanza']
  },
  'lunedì': {
    translation: 'segunda-feira',
    pronunciation: 'lu-ne-dì',
    type: 's.m.',
    examples: ['Lunedì inizio a lavorare']
  },
  'martedì': {
    translation: 'terça-feira',
    pronunciation: 'mar-te-dì',
    type: 's.m.',
    examples: ['Martedì vado dal medico']
  },
  'mercoledì': {
    translation: 'quarta-feira',
    pronunciation: 'mer-ko-le-dì',
    type: 's.m.',
    examples: ['Mercoledì è metà settimana']
  },
  'giovedì': {
    translation: 'quinta-feira',
    pronunciation: 'dzho-ve-dì',
    type: 's.m.',
    examples: ['Giovedì ceno fuori']
  },
  'venerdì': {
    translation: 'sexta-feira',
    pronunciation: 've-ner-dì',
    type: 's.m.',
    examples: ['Venerdì sera esco']
  },
  'sabato': {
    translation: 'sábado',
    pronunciation: 'sá-ba-to',
    type: 's.m.',
    examples: ['Sabato dormo fino a tardi']
  },
  'domenica': {
    translation: 'domingo',
    pronunciation: 'do-mé-ni-ka',
    type: 's.f.',
    examples: ['Domenica vado in chiesa']
  },
  
  // Verbos comuns
  'essere': {
    translation: 'ser/estar',
    pronunciation: 'és-se-re',
    type: 'v.',
    examples: ['Io sono italiano', 'Lei è a casa']
  },
  'avere': {
    translation: 'ter',
    pronunciation: 'a-vé-re',
    type: 'v.',
    examples: ['Ho una macchina', 'Hai fame?']
  },
  'fare': {
    translation: 'fazer',
    pronunciation: 'fá-re',
    type: 'v.',
    examples: ['Faccio colazione', 'Cosa fai?']
  },
  'andare': {
    translation: 'ir',
    pronunciation: 'an-dá-re',
    type: 'v.',
    examples: ['Vado a casa', 'Andiamo al cinema']
  },
  'venire': {
    translation: 'vir',
    pronunciation: 've-ní-re',
    type: 'v.',
    examples: ['Vengo domani', 'Viene anche lui']
  },
  'stare': {
    translation: 'estar/ficar',
    pronunciation: 'stá-re',
    type: 'v.',
    examples: ['Come stai?', 'Sto bene']
  },
  'dire': {
    translation: 'dizer',
    pronunciation: 'dí-re',
    type: 'v.',
    examples: ['Dimmi la verità', 'Cosa dici?']
  },
  'vedere': {
    translation: 'ver',
    pronunciation: 've-dé-re',
    type: 'v.',
    examples: ['Vedo un gatto', 'Ci vediamo domani']
  },
  'sapere': {
    translation: 'saber',
    pronunciation: 'sa-pé-re',
    type: 'v.',
    examples: ['So parlare italiano', 'Non so niente']
  },
  'volere': {
    translation: 'querer',
    pronunciation: 'vo-lé-re',
    type: 'v.',
    examples: ['Voglio mangiare', 'Cosa vuoi?']
  },
  'potere': {
    translation: 'poder',
    pronunciation: 'po-té-re',
    type: 'v.',
    examples: ['Posso aiutarti?', 'Non può venire']
  },
  'dovere': {
    translation: 'dever',
    pronunciation: 'do-vé-re',
    type: 'v.',
    examples: ['Devo studiare', 'Deve partire']
  },
  'parlare': {
    translation: 'falar',
    pronunciation: 'par-lá-re',
    type: 'v.',
    examples: ['Parlo italiano', 'Parliamo domani']
  },
  'mangiare': {
    translation: 'comer',
    pronunciation: 'man-dzha-re',
    type: 'v.',
    examples: ['Mangio la pizza', 'Cosa mangiamo?']
  },
  'bere': {
    translation: 'beber',
    pronunciation: 'bé-re',
    type: 'v.',
    examples: ['Bevo un caffè', 'Beviamo insieme']
  },
  'dormire': {
    translation: 'dormir',
    pronunciation: 'dor-mí-re',
    type: 'v.',
    examples: ['Dormo otto ore', 'Buon dormire!']
  },
  'lavorare': {
    translation: 'trabalhar',
    pronunciation: 'la-vo-rá-re',
    type: 'v.',
    examples: ['Lavoro in ufficio', 'Dove lavori?']
  },
  'studiare': {
    translation: 'estudar',
    pronunciation: 'stu-diá-re',
    type: 'v.',
    examples: ['Studio italiano', 'Studiamo insieme']
  },
  'giocare': {
    translation: 'jogar/brincar',
    pronunciation: 'dzho-ká-re',
    type: 'v.',
    examples: ['Gioco a calcio', 'I bambini giocano']
  },
  'leggere': {
    translation: 'ler',
    pronunciation: 'léd-dzhe-re',
    type: 'v.',
    examples: ['Leggo un libro', 'Leggiamo il giornale']
  },
  'scrivere': {
    translation: 'escrever',
    pronunciation: 'skrí-ve-re',
    type: 'v.',
    examples: ['Scrivo una lettera', 'Scrive bene']
  },
  'ascoltare': {
    translation: 'escutar',
    pronunciation: 'a-skol-tá-re',
    type: 'v.',
    examples: ['Ascolto musica', 'Ascolta me!']
  },
  'guardare': {
    translation: 'olhar/assistir',
    pronunciation: 'guar-dá-re',
    type: 'v.',
    examples: ['Guardo la TV', 'Guardami!']
  },
  'aprire': {
    translation: 'abrir',
    pronunciation: 'a-prí-re',
    type: 'v.',
    examples: ['Apro la porta', 'Aprite i libri']
  },
  'chiudere': {
    translation: 'fechar',
    pronunciation: 'kiú-de-re',
    type: 'v.',
    examples: ['Chiudo la finestra', 'Chiude alle otto']
  },
  'comprare': {
    translation: 'comprar',
    pronunciation: 'kom-prá-re',
    type: 'v.',
    examples: ['Compro il pane', 'Cosa compri?']
  },
  'vendere': {
    translation: 'vender',
    pronunciation: 'vén-de-re',
    type: 'v.',
    examples: ['Vendo la macchina', 'Vendono frutta']
  },
  
  // Profissões
  'dottore': {
    translation: 'médico/doutor',
    pronunciation: 'dot-tó-re',
    type: 's.m.',
    examples: ['Il dottore visita i pazienti']
  },
  'dottoressa': {
    translation: 'médica/doutora',
    pronunciation: 'dot-to-rés-sa',
    type: 's.f.',
    examples: ['La dottoressa è molto brava']
  },
  'insegnante': {
    translation: 'professor(a)',
    pronunciation: 'in-se-gnán-te',
    type: 's.m./f.',
    examples: ['L\'insegnante spiega la lezione']
  },
  'cuoco': {
    translation: 'cozinheiro',
    pronunciation: 'kuó-ko',
    type: 's.m.',
    examples: ['Il cuoco prepara la cena']
  },
  'cuoca': {
    translation: 'cozinheira',
    pronunciation: 'kuó-ka',
    type: 's.f.',
    examples: ['La cuoca è molto brava']
  },
  'autista': {
    translation: 'motorista',
    pronunciation: 'au-tí-sta',
    type: 's.m./f.',
    examples: ['L\'autista guida l\'autobus']
  },
  'infermiere': {
    translation: 'enfermeiro',
    pronunciation: 'in-fer-mié-re',
    type: 's.m.',
    examples: ['L\'infermiere aiuta il dottore']
  },
  'infermiera': {
    translation: 'enfermeira',
    pronunciation: 'in-fer-mié-ra',
    type: 's.f.',
    examples: ['L\'infermiera è gentile']
  },
  'poliziotto': {
    translation: 'policial',
    pronunciation: 'po-li-tsyót-to',
    type: 's.m.',
    examples: ['Il poliziotto dirige il traffico']
  },
  'commesso': {
    translation: 'vendedor',
    pronunciation: 'kom-més-so',
    type: 's.m.',
    examples: ['Il commesso vende scarpe']
  },
  'commessa': {
    translation: 'vendedora',
    pronunciation: 'kom-més-sa',
    type: 's.f.',
    examples: ['La commessa è molto gentile']
  },
  'parrucchiere': {
    translation: 'cabeleireiro',
    pronunciation: 'par-ruk-kié-re',
    type: 's.m.',
    examples: ['Vado dal parrucchiere']
  },
  'parrucchiera': {
    translation: 'cabeleireira',
    pronunciation: 'par-ruk-kié-ra',
    type: 's.f.',
    examples: ['La parrucchiera taglia i capelli']
  },
  'pompiere': {
    translation: 'bombeiro',
    pronunciation: 'pom-pié-re',
    type: 's.m.',
    examples: ['Il pompiere spegne il fuoco']
  },
  'avvocato': {
    translation: 'advogado',
    pronunciation: 'av-vo-ká-to',
    type: 's.m.',
    examples: ['L\'avvocato difende il cliente']
  },
  
  // Tempo e advérbios
  'oggi': {
    translation: 'hoje',
    pronunciation: 'ódz-dzhi',
    type: 'avv.',
    examples: ['Oggi fa bel tempo']
  },
  'ieri': {
    translation: 'ontem',
    pronunciation: 'ié-ri',
    type: 'avv.',
    examples: ['Ieri sono andato al cinema']
  },
  'domani': {
    translation: 'amanhã',
    pronunciation: 'do-má-ni',
    type: 'avv.',
    examples: ['Domani vado a Roma']
  },
  'ora': {
    translation: 'agora/hora',
    pronunciation: 'ó-ra',
    type: 'avv./s.f.',
    examples: ['Ora devo andare', 'Che ora è?']
  },
  'sempre': {
    translation: 'sempre',
    pronunciation: 'sém-pre',
    type: 'avv.',
    examples: ['Arrivo sempre in orario']
  },
  'mai': {
    translation: 'nunca',
    pronunciation: 'mái',
    type: 'avv.',
    examples: ['Non fumo mai']
  },
  'spesso': {
    translation: 'frequentemente',
    pronunciation: 'spés-so',
    type: 'avv.',
    examples: ['Vado spesso al cinema']
  },
  'raramente': {
    translation: 'raramente',
    pronunciation: 'ra-ra-mén-te',
    type: 'avv.',
    examples: ['Mangio raramente dolci']
  },
  'presto': {
    translation: 'cedo',
    pronunciation: 'pré-sto',
    type: 'avv.',
    examples: ['Mi alzo presto la mattina']
  },
  'tardi': {
    translation: 'tarde',
    pronunciation: 'tár-di',
    type: 'avv.',
    examples: ['Arrivo sempre tardi']
  },
  
  // Lugares
  'casa': {
    translation: 'casa',
    pronunciation: 'ká-za',
    type: 's.f.',
    examples: ['Vado a casa', 'La mia casa è grande']
  },
  'scuola': {
    translation: 'escola',
    pronunciation: 'sku-ó-la',
    type: 's.f.',
    examples: ['I bambini vanno a scuola']
  },
  'università': {
    translation: 'universidade',
    pronunciation: 'u-ni-ver-si-tà',
    type: 's.f.',
    examples: ['Studio all\'università']
  },
  'ospedale': {
    translation: 'hospital',
    pronunciation: 'o-spe-dá-le',
    type: 's.m.',
    examples: ['Il dottore lavora in ospedale']
  },
  'farmacia': {
    translation: 'farmácia',
    pronunciation: 'far-ma-tshí-a',
    type: 's.f.',
    examples: ['Compro medicine in farmacia']
  },
  'supermercato': {
    translation: 'supermercado',
    pronunciation: 'su-per-mer-ká-to',
    type: 's.m.',
    examples: ['Faccio la spesa al supermercato']
  },
  'ristorante': {
    translation: 'restaurante',
    pronunciation: 'ri-sto-rán-te',
    type: 's.m.',
    examples: ['Ceniamo al ristorante']
  },
  'stazione': {
    translation: 'estação',
    pronunciation: 'sta-tsyó-ne',
    type: 's.f.',
    examples: ['Prendo il treno alla stazione']
  },
  'aeroporto': {
    translation: 'aeroporto',
    pronunciation: 'a-e-ro-pór-to',
    type: 's.m.',
    examples: ['Volo dall\'aeroporto di Roma']
  },
  'chiesa': {
    translation: 'igreja',
    pronunciation: 'kié-za',
    type: 's.f.',
    examples: ['Vado in chiesa la domenica']
  },
  'piazza': {
    translation: 'praça',
    pronunciation: 'pyát-tsa',
    type: 's.f.',
    examples: ['Ci incontriamo in piazza']
  },
  'museo': {
    translation: 'museu',
    pronunciation: 'mu-zé-o',
    type: 's.m.',
    examples: ['Visito il museo d\'arte']
  },
  'parco': {
    translation: 'parque',
    pronunciation: 'pár-ko',
    type: 's.m.',
    examples: ['Corro nel parco']
  },
  'banca': {
    translation: 'banco',
    pronunciation: 'bán-ka',
    type: 's.f.',
    examples: ['Ritiro soldi in banca']
  },
  'ufficio': {
    translation: 'escritório',
    pronunciation: 'uf-fí-tsho',
    type: 's.m.',
    examples: ['Lavoro in ufficio']
  },
  
  // Roupas
  'vestito': {
    translation: 'vestido',
    pronunciation: 've-stí-to',
    type: 's.m.',
    examples: ['Indosso un vestito elegante']
  },
  'camicia': {
    translation: 'camisa',
    pronunciation: 'ka-mí-sha',
    type: 's.f.',
    examples: ['Una camicia bianca']
  },
  'pantaloni': {
    translation: 'calças',
    pronunciation: 'pan-ta-ló-ni',
    type: 's.m.pl.',
    examples: ['Pantaloni blu']
  },
  'gonna': {
    translation: 'saia',
    pronunciation: 'gón-na',
    type: 's.f.',
    examples: ['Una gonna corta']
  },
  'giacca': {
    translation: 'jaqueta',
    pronunciation: 'dzhák-ka',
    type: 's.f.',
    examples: ['Metto la giacca']
  },
  'cappotto': {
    translation: 'casaco',
    pronunciation: 'kap-pót-to',
    type: 's.m.',
    examples: ['Il cappotto è caldo']
  },
  'scarpe': {
    translation: 'sapatos',
    pronunciation: 'skár-pe',
    type: 's.f.pl.',
    examples: ['Scarpe comode']
  },
  'guanti': {
    translation: 'luvas',
    pronunciation: 'guan-ti',
    type: 's.m.pl.',
    examples: ['Guanti di lana']
  },
  'cappello': {
    translation: 'chapéu',
    pronunciation: 'kap-pél-lo',
    type: 's.m.',
    examples: ['Un cappello elegante']
  },
  'sciarpa': {
    translation: 'cachecol',
    pronunciation: 'shar-pa',
    type: 's.f.',
    examples: ['Sciarpa calda']
  },
  
  // Transportes
  'macchina': {
    translation: 'carro',
    pronunciation: 'mák-ki-na',
    type: 's.f.',
    examples: ['Vado in macchina']
  },
  'auto': {
    translation: 'carro',
    pronunciation: 'áu-to',
    type: 's.f.',
    examples: ['Un\'auto veloce']
  },
  'bicicletta': {
    translation: 'bicicleta',
    pronunciation: 'bi-tshi-klét-ta',
    type: 's.f.',
    examples: ['Vado in bicicletta']
  },
  'treno': {
    translation: 'trem',
    pronunciation: 'tré-no',
    type: 's.m.',
    examples: ['Prendo il treno']
  },
  'aereo': {
    translation: 'avião',
    pronunciation: 'a-é-re-o',
    type: 's.m.',
    examples: ['Viaggio in aereo']
  },
  'autobus': {
    translation: 'ônibus',
    pronunciation: 'áu-to-bus',
    type: 's.m.',
    examples: ['Aspetto l\'autobus']
  },
  'nave': {
    translation: 'navio',
    pronunciation: 'ná-ve',
    type: 's.f.',
    examples: ['La nave attraversa il mare']
  },
  'moto': {
    translation: 'moto',
    pronunciation: 'mó-to',
    type: 's.f.',
    examples: ['Guido la moto']
  },
  'metrò': {
    translation: 'metrô',
    pronunciation: 'me-trò',
    type: 's.m.',
    examples: ['Prendo la metropolitana']
  },
  'taxi': {
    translation: 'táxi',
    pronunciation: 'ták-si',
    type: 's.m.',
    examples: ['Chiamo un taxi']
  },
  'elicottero': {
    translation: 'helicóptero',
    pronunciation: 'e-li-kót-te-ro',
    type: 's.m.',
    examples: ['L\'elicottero vola alto']
  },
  
  // Expressões e conectivos
  'come': {
    translation: 'como',
    pronunciation: 'kó-me',
    type: 'avv./cong.',
    examples: ['Come stai?', 'Bianco come la neve']
  },
  'quando': {
    translation: 'quando',
    pronunciation: 'kuán-do',
    type: 'avv./cong.',
    examples: ['Quando parti?', 'Quando arriva, chiamami']
  },
  'dove': {
    translation: 'onde',
    pronunciation: 'dó-ve',
    type: 'avv.',
    examples: ['Dove vai?', 'Non so dove sia']
  },
  'che': {
    translation: 'que',
    pronunciation: 'ke',
    type: 'pron./cong.',
    examples: ['Che cosa fai?', 'Penso che sia vero']
  },
  'cosa': {
    translation: 'coisa',
    pronunciation: 'kó-za',
    type: 's.f.',
    examples: ['Che cosa è?', 'Una cosa importante']
  },
  'perché': {
    translation: 'porque/por que',
    pronunciation: 'per-ké',
    type: 'avv./cong.',
    examples: ['Perché non vieni?', 'Vengo perché mi piace']
  },
  'ma': {
    translation: 'mas',
    pronunciation: 'ma',
    type: 'cong.',
    examples: ['Voglio venire ma non posso']
  },
  'però': {
    translation: 'porém',
    pronunciation: 'pe-ró',
    type: 'cong.',
    examples: ['È caro, però mi piace']
  },
  'anche': {
    translation: 'também',
    pronunciation: 'án-ke',
    type: 'avv.',
    examples: ['Vengo anche io']
  },
  'ancora': {
    translation: 'ainda',
    pronunciation: 'an-kó-ra',
    type: 'avv.',
    examples: ['Non è ancora arrivato']
  },
  'già': {
    translation: 'já',
    pronunciation: 'dzhà',
    type: 'avv.',
    examples: ['Ho già mangiato']
  },
  'allora': {
    translation: 'então',
    pronunciation: 'al-ló-ra',
    type: 'avv.',
    examples: ['Allora, andiamo?']
  },
  'bene': {
    translation: 'bem',
    pronunciation: 'bé-ne',
    type: 'avv.',
    examples: ['Sto bene', 'Parli bene italiano']
  },
  'male': {
    translation: 'mal',
    pronunciation: 'má-le',
    type: 'avv.',
    examples: ['Mi sento male']
  },
  'molto': {
    translation: 'muito',
    pronunciation: 'mól-to',
    type: 'avv./agg.',
    examples: ['Molto bene!', 'Ho molto tempo']
  },
  'poco': {
    translation: 'pouco',
    pronunciation: 'pó-ko',
    type: 'avv./agg.',
    examples: ['Parlo poco italiano', 'Poco tempo']
  },
  'tanto': {
    translation: 'tanto',
    pronunciation: 'tán-to',
    type: 'avv./agg.',
    examples: ['Grazie tanto!', 'Tanto tempo fa']
  },
  'più': {
    translation: 'mais',
    pronunciation: 'pyù',
    type: 'avv.',
    examples: ['Più veloce', 'Non c\'è più tempo']
  },
  'meno': {
    translation: 'menos',
    pronunciation: 'mé-no',
    type: 'avv.',
    examples: ['Meno caro', 'Sono le cinque meno dieci']
  }
};
