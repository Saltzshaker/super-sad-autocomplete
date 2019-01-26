function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}console.clear();

var data = [
'feeling sick from drinking alone',
"why can\'t i sleep", 
"why can\'t i poop", 
"why can\'t i cry", 
"why can\'t i lose weight", 
"why can't i pee", 
'why cant i hold my pee', 
"why can\'t i focus", 
"why can\'t i find a job", 
"why can\'t i burp", 
"why can\'t i breathe", 
"why can\'t i sleep", 
"why can\'t i be happy", 
'why do i feel dizzy', 
'why do i have a headache', 
'why do i sleep so much', 
'why do i sweat so much', 
'why do i hate myself', 
'baby won\'t leave me alone', 
'baby won\'t leave mom alone in the bathroom', 
'can\'t feel anything', 
'can\'t feel anger', 
'can\'t feel empathy anymore', 
'can\'t feel god\'s presence anymore', 
'can\'t feel joy anymore', 
'can dogs feel jealously', 
'never been in a relationship 21', 
'never had a girlfriend 25', 
'never had sex before what should i do', 
'only dated one person 27', 
'only kissed one person', 
'only been in love once', 
'only been with one person', 
'never had a boyfriend',  
'never been in a long term relationship', 
'can\'t feel attraction', 
'baby is cross-eyed', 
'baby is crying all the time', 
'baby is cranky all the time', 
'baby is crying when pooping', 
'why do i fart so much', 
'why do i keep getting sick', 
'why do i snore', 
'why do i keep farting', 
'why do i pee so much', 
'can i be pregnant', 
'can i be your friend', 
'can i be a model', 
'did i really love him', 
'did i really love her', 
'did i really need a root canal', 
'did i really love my ex quiz', 
'did i really have a miscarriage', 
'diet of worms', 
'emotional abuse is worse than physical', 
'will i ever find love', 
'will i ever be good enough', 
'will i get into college', 
'will i ever get over my ex', 
'will i ever get a job', 
'who will i marry', 
'who will i look like', 
'who will i fall in love with', 
'emotional abuse isolation from family', 
'eating is a chore', 
'eating is overrated', 
'eating issues', 
'eating is fun eating is serious', 
'eating is cheating', 
'eating is out of control', 
'eating my feelings', 
'eating my words', 
'eating myself to death', 
'eating my placenta', 
'failing my classes', 
'failing my college classes', 
"feeling cold", 
"feeling chills", 
"feeling confused", 
"feeling clammy", 
"feeling weak", 
"feeling worthless", 
"feeling weird", 
"feeling weak and tired", 
"feeling vulnerable", 
"feeling very tired", 
"feeling very depressed", 
"feeling very sleepy", 
"feeling very dizzy", 
"feeling very cold", 
"feeling very hot", 
"feeling under the weather", 
"feeling unwanted", 
"feeling under the weather meaning", 
"feeling unappreciated", 
"feeling unloved", 
"feeling used", 
"feeling uneasy", 
"feeling ugly", 
"feeling useless", 
"feeling unmotivated", 
"feeling tired", 
"feeling tired all the time", 
"feeling tired and weak", 
"feeling tired after eating", 
"feeling trapped", 
"feeling thirsty", 
"feeling sick", 
"feeling sad", 
"feeling suicidal", 
"feeling shaky", 
"feeling sleepy", 
"feeling sorry for yourself", 
"feeling run down", 
"feeling restless", 
"feeling randy", 
"feeling rejected", 
"feeling really tired", 
"feeling really dizzy", 
"feeling resentful", 
"feeling really cold", 
"feeling queasy", 
"feeling quiz", 
"feeling quickening", 
"feeling quiet", 
"feeling pregnant", 
"feeling pressure in head", 
"feeling pressure in eyes", 
"feeling pain in dreams", 
"feeling proud", 
"feeling pumped", 
"feeling puny", 
"feeling peachy", 
"feeling peckish", 
"feeling pretty", 
"feeling overwhelmed", 
"feeling of impending doom", 
"feeling of anxiety", 
"feeling off balance", 
"feeling out of breath", 
"feeling out of it", 
"feeling of fullness", 
"feeling of falling", 
"feeling of lump in throat", 
"feeling nausea", 
"feeling numb", 
"feeling nostalgic", 
"feeling nauseated", 
"feeling nervous", 
"feeling nauseous after eating", 
"feeling not good enough", 
"feeling nothing", 
"feeling nauseous all the time", 
"feeling neglected", 
"feeling meaning", 
"feeling miserable", 
"feeling lonely", 
"feeling light headed", 
"feeling lost", 
"feeling lucky", 
"feeling lost in life", 
"feeling like a failure", 
"feeling left out", 
"feeling lethargic", 
"feeling loved", 
"feeling kinda blue", 
"feeling keyed up", 
"feeling kinda lonely", 
"feeling jittery", 
"feeling jipped", 
"feeling jaded", 
"feeling jealous", 
"feeling judged", 
"feeling jumpy", 
"feeling joy", 
"feeling inadequate", 
"feeling insecure", 
"feeling invisible", 
"feeling is mutual", 
"feeling ill", 
"feeling isolated", 
"feeling irritable", 
"feeling indifferent", 
"feeling hopeless", 
"feeling hot and cold", 
"feeling helpless", 
"feeling hurt", 
"feeling hungry", 
"feeling heavy", 
"feeling hot all the time", 
'failing myself', 
'failing my drivers test', 
'failing my major', 
'failing my math class in college', 
'failing my senior year of college', 
'failing my driving test', 
'going alone to concerts', 
'going alone to a bar', 
'going alone to disney world', 
'going alone to a wedding', 
'going alone to a club', 
'going alone to a party', 
'hate my job', 
'hate my life', 
'hate myself for loving you', 
'hate myself', 
'hate my husband', 
'hate my new job', 
'hate my wife', 
'heartbreak that lasts years', 
"heartbreak that won\'t stop hurting", 
"heartbreak that i can\'t escape", 
'heartbreak that never heals', 
"heartbreak that don\'t stop hurting", 
"heartbreak that won\'t heal", 
'heartbreak that lasts a lifetime', 
'hating yourself', 
'hating your job', 
'hating your life', 
'hating your husband', 
'hating your body', 
'hating your ex', 
'hating your parents', 
'hating your mother', 
'hating your family', 
'jealous of my friend', 
'jealous of my boyfriend', 
'jealous of my best friend', 
'jealous of my sister', 
'jealous of my friends success', 
'jealous of my boyfriends friends', 
'jealous of my girlfriend', 
'jealous of my twin sister', 
'jobs for failures', 
'jobs for failed teachers', 
'jobs for failed artists', 
'jobs for failed entrepreneurs', 
'jobs for failed engineers', 
'jobs for failed medical students', 
'jobs for failed lawyers', 
'jobs for failed actuaries', 
'jobs for failed musicians', 
'jobs for failed nursing students', 
'killing your parents', 
'killing your old self', 
'lying in bed', 
'lying in bed all day', 
'lying in bed staring at the ceiling', 
'lying in bed awake', 
'lying in bed thinking', 
"yawning all day", 
"yawning anxiety", 
"yawning animals", 
"yawning and empathy", 
"yawning abyss", 
"yawning after eating", 
"yawning and heart", 
"yawning and migraines", 
"yawning and tears", 
"yawning and shortness of breath", 
"xanax isn't working anymore", 
"xanax isn't helping my anxiety", 
"zits on your labia normal", 
"zits a sign of pregnancy", 
"zits a sign of pregnancy", 
"zits smell like onions", 
"killing yourself with", 
"killing yourself with tylenol", 
"killing yourself with carbon monoxide", 
"killing yourself with alcohol", 
"killing yourself with nitrogen", 
"killing yourself with insulin", 
"killing yourself with benadryl", 
"killing yourself with food", 
"killing yourself with a sword", 
"killing yourself with a bag", 
"killing yourself with your car", 
"jealous of my friend", 
"jealous of my friends success", 
"jealous of my friends life", 
"jealous of my friends in relationships", 
"jealous of my friend reddit", 
"jealous of my friends husband", 
"jealous of my friends boyfriend", 
"jealous of my friend\'s pregnancy", 
"jealous of my friends girlfriend", 
"jealous of my friends other friends", 
'groups for people who can\'t talk to people',
'haven\'t been to doctor in years what to look pcp',
'how many days can i get away with taking off work',
'maximum prison term norway',
'how to open a can',
'why am i so tired',
'why am i always tired',
'why am i always cold',
'why am i so gassy',
'why am i always hungry',
'why am i dizzy',
'why am i tired all the time',
'why am i depressed',
'why am i so tired all the time',
'am i too skinny',
'am i too sensitive',
'am i too clingy',
'am i too nice',
"am i a joke to you",
"am i pregnant",
"am i depressed",
"is there a cure for herpes",
"what is wrong with me mentally",
"is it a crime to spit on someone",
"is my dog depressed",
"when to see a therapist",
"where am i right now",
"where do people go when they die",
"when is it too late to have an abortion",
"when will i be loved",
"am i gay quiz",
"am i pretty",
"am i bipolar",
"am i a sociopath",
"am i ugly",
'am i too needy',
'am i too old to join the military',
'am i too old',
'am i too picky',
'am i too old for tinder',
'why am i not losing weight',    
'how to flirt better with guys at bars',
'how to flirt over text with a guy',
'sick from eating old brie',
'what it means obsessed with dogs psychology',
'why few matches online dating female',
'my ex\'s wedding', 
'my ex\'s marriage', 
'my ex\'s net worth',
'i have no friends', 
'why do i have no friends',
'dog separation anxiety support group',
'top 5 movies to watch during an existential crisis',
'why am i always depressed on saturdays',
'depression meetups in brooklyn',
'how long will it take to notice antidepressants are working',
'how to have friends when you have a boyfriend?',
'the name of a project i was in competition with',
'how can I have intention',
'herpes or ingrown hair',
'never paid taxes',
'what should I do when everybody is at home and I want to runaway?',
'how can I fall sick in one minute?',
'how to cry when you are short of tears in your eyes?',
'can you abort one twin',
'who will inherit my money if I have no living relatives?',
'how can I be likable?',
'how to be a happier person',
'how to make friends',
'how to marry google',
'does marrying a chimpanzee make me happier',
'help accidentally build a shelf',
'my cat doesn\'t love me',
'how not to care',
'why did my cat poop in a circle?',
'how to get a girlfriend',
'how to tie a noose that\'s for a prop I\'m not trying to kill myself please don\'t judge me Google :(',
'how to tie a noose',
'mommy wont wake up',
'dinner for one recipes',
'different dinner for one recipes',
'interesting dinner for one recipes',
'healthy dinner for one recipes',
'different healthy dinner for one recipes',
'how much should one person eat per day?',
'small dinner for one recipes',
'how to meet other people',
'how long do you live without a pancreas',
'maritime caskets',
'health benefits of eating pickles',
'i just moved into a new house and hate it',
'why am I still lonely in my dreams',
'how to make friends in your 20s'];var


Autocomplete =
function Autocomplete()







{var _this = this;var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},rootNode = _ref.rootNode,inputNode = _ref.inputNode,resultsNode = _ref.resultsNode,searchFn = _ref.searchFn,_ref$shouldAutoSelect = _ref.shouldAutoSelect,shouldAutoSelect = _ref$shouldAutoSelect === undefined ? false : _ref$shouldAutoSelect,_ref$onShow = _ref.onShow,onShow = _ref$onShow === undefined ? function () {} : _ref$onShow,_ref$onHide = _ref.onHide,onHide = _ref$onHide === undefined ? function () {} : _ref$onHide;_classCallCheck(this, Autocomplete);this.




















  handleDocumentClick = function (event) {
    if (event.target === _this.inputNode || _this.rootNode.contains(event.target)) {
      return;
    }
    _this.hideResults();
  };this.

  handleKeyup = function (event) {var
    key = event.key;

    switch (key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'Escape':
      case 'Enter':
        event.preventDefault();
        return;
      default:
        _this.updateResults();}


    if (_this.hasInlineAutocomplete) {
      switch (key) {
        case 'Backspace':
          return;
        default:
          _this.autocompleteItem();}

    }
  };this.

  handleKeydown = function (event) {var
    key = event.key;
    var activeIndex = _this.activeIndex;

    if (key === 'Escape') {
      _this.hideResults();
      _this.inputNode.value = '';
      return;
    }

    if (_this.resultsCount < 1) {
      if (_this.hasInlineAutocomplete && (key === 'ArrowDown' || key === 'ArrowUp')) {
        _this.updateResults();
      } else {
        return;
      }
    }

    var prevActive = _this.getItemAt(activeIndex);
    var activeItem = void 0;

    switch (key) {
      case 'ArrowUp':
        if (activeIndex <= 0) {
          activeIndex = _this.resultsCount - 1;
        } else {
          activeIndex -= 1;
        }
        break;
      case 'ArrowDown':
        if (activeIndex === -1 || activeIndex >= _this.resultsCount - 1) {
          activeIndex = 0;
        } else {
          activeIndex += 1;
        }
        break;
      case 'Enter':
        activeItem = _this.getItemAt(activeIndex);
        _this.selectItem(activeItem);
        return;
      case 'Tab':
        _this.checkSelection();
        _this.hideResults();
        return;
      default:
        return;}


    event.preventDefault();
    activeItem = _this.getItemAt(activeIndex);
    _this.activeIndex = activeIndex;

    if (prevActive) {
      prevActive.classList.remove('selected');
      prevActive.setAttribute('aria-selected', 'false');
    }

    if (activeItem) {
      _this.inputNode.setAttribute('aria-activedescendant', 'autocomplete-result-' + activeIndex);
      activeItem.classList.add('selected');
      activeItem.setAttribute('aria-selected', 'true');
      if (_this.hasInlineAutocomplete) {
        _this.inputNode.value = activeItem.innerText;
      }
    } else {
      _this.inputNode.setAttribute('aria-activedescendant', '');
    }
  };this.

  handleFocus = function (event) {
    _this.updateResults();
  };this.

  handleResultClick = function (event) {
    if (event.target && event.target.nodeName === 'LI') {
      _this.selectItem(event.target);
    }
  };this.

  getItemAt = function (index) {
    return _this.resultsNode.querySelector('#autocomplete-result-' + index);
  };this.

  selectItem = function (node) {
    if (node) {
      _this.inputNode.value = node.innerText;
      _this.hideResults();
    }
  };this.

  checkSelection = function () {
    if (_this.activeIndex < 0) {
      return;
    }
    var activeItem = _this.getItemAt(_this.activeIndex);
    _this.selectItem(activeItem);
  };this.

  autocompleteItem = function (event) {
    var autocompletedItem = _this.resultsNode.querySelector('.selected');
    var input = _this.inputNode.value;
    if (!autocompletedItem || !input) {
      return;
    }

    var autocomplete = autocompletedItem.innerText;
    if (input !== autocomplete) {
      _this.inputNode.value = autocomplete;
      _this.inputNode.setSelectionRange(input.length, autocomplete.length);
    }
  };this.

  updateResults = function () {
    var input = _this.inputNode.value;
    var results = _this.searchFn(input);

    _this.hideResults();
    if (results.length === 0) {
      return;
    }

    _this.resultsNode.innerHTML = results.map(function (result, index) {
      var isSelected = _this.shouldAutoSelect && index === 0;
      if (isSelected) {
        _this.activeIndex = 0;
      }
      return '\n        <li\n          id=\'autocomplete-result-' +

      index + '\'\n          class=\'autocomplete-result' + (
      isSelected ? ' selected' : '') + '\'\n          role=\'option\'\n          ' + (

      isSelected ? "aria-selected='true'" : '') + '\n        >\n          ' +

      result + '\n        </li>\n      ';


    }).join('');

    _this.resultsNode.classList.remove('hidden');
    _this.rootNode.setAttribute('aria-expanded', true);
    _this.resultsCount = results.length;
    _this.shown = true;
    _this.onShow();
  };this.

  hideResults = function () {
    _this.shown = false;
    _this.activeIndex = -1;
    _this.resultsNode.innerHTML = '';
    _this.resultsNode.classList.add('hidden');
    _this.rootNode.setAttribute('aria-expanded', 'false');
    _this.resultsCount = 0;
    _this.inputNode.setAttribute('aria-activedescendant', '');
    _this.onHide();
  };this.rootNode = rootNode;this.inputNode = inputNode;this.resultsNode = resultsNode;this.searchFn = searchFn;this.shouldAutoSelect = shouldAutoSelect;this.onShow = onShow;this.onHide = onHide;this.activeIndex = -1;this.resultsCount = 0;this.showResults = false;this.hasInlineAutocomplete = this.inputNode.getAttribute('aria-autocomplete') === 'both'; // Setup events
  document.body.addEventListener('click', this.handleDocumentClick);this.inputNode.addEventListener('keyup', this.handleKeyup);this.inputNode.addEventListener('keydown', this.handleKeydown);this.inputNode.addEventListener('focus', this.handleFocus);this.resultsNode.addEventListener('click', this.handleResultClick);};

var search = function search(input) {
  if (input.length < 1) {
    return [];
  }
  return data.filter(function (item) {return item.toLowerCase().startsWith(input.toLowerCase());});
};

var autocomplete = new Autocomplete({
  rootNode: document.querySelector('.autocomplete'),
  inputNode: document.querySelector('.autocomplete-input'),
  resultsNode: document.querySelector('.autocomplete-results'),
  searchFn: search,
  shouldAutoSelect: true });

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  var result = document.querySelector('.search-result');
  var input = document.querySelector('.autocomplete-input');
  var didyoumeans = [
    "I\'m sorry. That is a sad google. I hope everything is ok. -💜 emily", 
    "Don\'t worry, that is a sad, but normal google. I may have even googled the same thing. –💜 emily",
    "LOL that\'s sad. (Sorry, is that mean?) –💜 emily" 
  ]
//  run this function to grab a random dym and append it to the search result
  var didyoumean = function () {
    var dym = didyoumeans[Math.floor(Math.random()*didyoumeans.length)];    
    document.querySelector('.search-result').append(dym);
    console.log(dym);
  }
    
  result.innerHTML = 'Did you mean to search: ' + '"<span style="color:lime;">' + input.value + "</span>? " + "I\'m sorry. That is a sad google. I hope everything is ok. -💜 emily";
});

// copy and paste the data array 