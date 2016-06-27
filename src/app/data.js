'use strict'

const data = {
  '13': {
    'id': 13,
    'data': [
      {
        'id': 1,
        'word': 'acceptance.n',
        'support_words': ' belief; approval; ',
        'definition': 'the act of recieving something ',
        'building_words': 'adoption; tolerance; credence; acquiescence; '
      },
      {
        'id': 2,
        'word': 'accurate.j',
        'support_words': 'perfect; ',
        'definition': 'able to produce results that are correct; not making mistakes',
        'building_words': 'precise; authentic; rigorous; factual; factual'
      },
      {
        'id': 3,
        'word': 'adapt.v',
        'support_words': 'vary; adjust; fit; ',
        'definition': 'to change something so that it functions better or is better suited for a purpose',
        'building_words': 'modify; orient; conform; assimilate; tailor; attune; modulate'
      },
      {
        'id': 4,
        'word': 'adequate.j',
        'support_words': '',
        'definition': 'enough for some requirement; good enough; ',
        'building_words': 'acceptable; satisfactory; commensurate'
      },
      {
        'id': 5,
        'word': 'advance.v',
        'support_words': 'improve; enhance; expand; ',
        'definition': ' to move forward',
        'building_words': 'foster; progress; posit; precipitate; postulate; further; '
      },
      {
        'id': 6,
        'word': 'alter.v',
        'support_words': ' vary; adjust; ',
        'definition': 'to change something;',
        'building_words': 'convert; modify; revise; distort; tailor; reorganize; fluctuate; modulate; '
      },
      {
        'id': 7,
        'word': 'assembly.n',
        'support_words': 'association; community; construction; ',
        'definition': 'the act of connecting together the parts of something; a group of people',
        'building_words': 'forum; multitude; manufacture'
      },
      {
        'id': 8,
        'word': 'attribute.v',
        'support_words': '',
        'definition': 'to say that something is because of something; to think of something as being a quality of something',
        'building_words': 'ascribe; impute'
      },
      {
        'id': 9,
        'word': 'collective.j',
        'support_words': 'joint; ',
        'definition': 'done by a group of people; involving all members of a group',
        'building_words': 'shared; combined; societal; cumulative; aggregate'
      },
      {
        'id': 10,
        'word': 'communicate.v',
        'support_words': 'reveal; link; connect; speak; write; ',
        'definition': 'to give information about something to someone; to get someone to understand your feelings',
        'building_words': 'correspond; convey; articulate; formulate; transmit; impart; interconnect'
      },
      {
        'id': 11,
        'word': 'detailed.j',
        'support_words': ' comprehensive; complete; ',
        'definition': 'including a lot of information',
        'building_words': 'precise; thorough; '
      },
      {
        'id': 12,
        'word': 'encounter.v',
        'support_words': '',
        'definition': 'to have or experience difficulties; to meet someone ',
        'building_words': 'sustain; incur; '
      },
      {
        'id': 13,
        'word': 'exclude.v',
        'support_words': 'prevent; ',
        'definition': 'to prevent someone from doing something; to leave out something; ',
        'building_words': 'preclude; proscribe; disallow'
      },
      {
        'id': 14,
        'word': 'exhibit.v',
        'support_words': 'reveal; demonstrate; display; expose; ',
        'definition': 'to make something available for people to see; to reveal',
        'building_words': 'model; manifest; '
      },
      {
        'id': 15,
        'word': 'guideline.n',
        'support_words': ' standard; recommendation; regulation; rule; ',
        'definition': 'an instruction that tells how something should be done',
        'building_words': 'precept; bylaw; '
      },
      {
        'id': 16,
        'word': 'ideal.j',
        'support_words': ' perfect; ultimate; ',
        'definition': 'exactly right for a particular purpose;  perfect',
        'building_words': 'optimal; preferred; '
      },
      {
        'id': 17,
        'word': 'initiate.v',
        'support_words': ' start; train; ',
        'definition': 'to start or begin something',
        'building_words': 'originate; activate; instigate'
      },
      {
        'id': 18,
        'word': 'intention.n',
        'support_words': ' goal; purpose; objective; target; ',
        'definition': 'the thing that you plan to do or achieve; an aim or purpose',
        'building_words': 'aim; calculation; '
      },
      {
        'id': 19,
        'word': 'justify.v',
        'support_words': ' support; defend; ',
        'definition': 'to be a good reason for something; to prove something to be right',
        'building_words': 'fulfill; validate; rationalize; '
      },
      {
        'id': 20,
        'word': 'mutual.j',
        'support_words': 'joint; ',
        'definition': 'shared by two or more people or groups',
        'building_words': 'shared; combined; reciprocal; concerted; '
      },
      {
        'id': 21,
        'word': 'ongoing.j',
        'support_words': 'constant; ',
        'definition': 'continuing to happen; continuing without reaching an end',
        'building_words': 'progressive; continuing; gradual; habitual; existent'
      },
      {
        'id': 22,
        'word': 'rapid.j',
        'support_words': '',
        'definition': 'happening in a short amount of time; happening quickly',
        'building_words': 'instantaneous; prompt; cursory'
      },
      {
        'id': 23,
        'word': 'rapidly.r',
        'support_words': '',
        'definition': 'having a fast rate; moving quickly',
        'building_words': 'superficially; summarily; '
      },
      {
        'id': 24,
        'word': 'reinforce.v',
        'support_words': '',
        'definition': 'to strengthen something by adding to it; to give support to something.',
        'building_words': 'strengthen; heighten; underpin; formalize; regenerate; buttress; '
      },
      {
        'id': 25,
        'word': 'stable.j',
        'support_words': 'constant; ',
        'definition': 'in a good state that is not easily changed; not easily moved; calm and reasonable',
        'building_words': 'fixed; enduring; '
      },
      {
        'id': 26,
        'word': 'strengthen.v',
        'support_words': 'reinforce; ',
        'definition': 'to make something stronger, more forceful, more effective, etc.',
        'building_words': 'consolidate amplify; underpin; buttress; '
      },
      {
        'id': 27,
        'word': 'stress.v',
        'support_words': '',
        'definition': 'to give special attention to something; ',
        'building_words': 'highlight; underscore; underline; accentuate; '
      },
      {
        'id': 28,
        'word': 'sustain.v',
        'support_words': 'bear; support; maintain; maintain; experience;  ',
        'definition': 'to provide what is needed for someone to exist, continue, etc.; to hold up the weight of something',
        'building_words': 'aid; incur; conserve'
      },
      {
        'id': 29,
        'word': 'valuable.j',
        'support_words': ' effective; useful; ',
        'definition': 'worth a lot of money; very useful or helpful; ',
        'building_words': 'helpful; productive; beneficial; invaluable; advantageous; salutary; '
      }
    ]
  }
}

export default data
