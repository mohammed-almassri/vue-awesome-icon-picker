'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopNamespace(e){if(e&&e.__esModule){return e;}else{var n={};if(e){Object.keys(e).forEach(function(k){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k];}});});}n['default']=e;return n;}}var solid = ['ad', 'address-book', 'address-card', 'adjust', 'air-freshener', 'align-center', 'align-justify', 'align-left', 'align-right', 'allergies', 'ambulance', 'american-sign-language-interpreting', 'anchor', 'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'angry', 'ankh', 'apple-alt', 'archive', 'archway', 'arrow-alt-circle-down', 'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-right', 'arrow-circle-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'arrows-alt-h', 'arrows-alt-v', 'assistive-listening-systems', 'asterisk', 'at', 'atlas', 'atom', 'audio-description', 'award', 'baby', 'baby-carriage', 'backspace', 'backward', 'bacon', 'balance-scale', 'balance-scale-left', 'balance-scale-right', 'ban', 'band-aid', 'barcode', 'bars', 'baseball-ball', 'basketball-ball', 'bath', 'battery-empty', 'battery-full', 'battery-half', 'battery-quarter', 'battery-three-quarters', 'bed', 'beer', 'bell', 'bell-slash', 'bezier-curve', 'bible', 'bicycle', 'biking', 'binoculars', 'biohazard', 'birthday-cake', 'blender', 'blender-phone', 'blind', 'blog', 'bold', 'bolt', 'bomb', 'bone', 'bong', 'book', 'book-dead', 'book-medical', 'book-open', 'book-reader', 'bookmark', 'border-all', 'border-none', 'border-style', 'bowling-ball', 'box', 'box-open', 'boxes', 'braille', 'brain', 'bread-slice', 'briefcase', 'briefcase-medical', 'broadcast-tower', 'broom', 'brush', 'bug', 'building', 'bullhorn', 'bullseye', 'burn', 'bus', 'bus-alt', 'business-time', 'calculator', 'calendar', 'calendar-alt', 'calendar-check', 'calendar-day', 'calendar-minus', 'calendar-plus', 'calendar-times', 'calendar-week', 'camera', 'camera-retro', 'campground', 'candy-cane', 'cannabis', 'capsules', 'car', 'car-alt', 'car-battery', 'car-crash', 'car-side', 'caret-down', 'caret-left', 'caret-right', 'caret-square-down', 'caret-square-left', 'caret-square-right', 'caret-square-up', 'caret-up', 'carrot', 'cart-arrow-down', 'cart-plus', 'cash-register', 'cat', 'certificate', 'chair', 'chalkboard', 'chalkboard-teacher', 'charging-station', 'chart-area', 'chart-bar', 'chart-line', 'chart-pie', 'check', 'check-circle', 'check-double', 'check-square', 'cheese', 'chess', 'chess-bishop', 'chess-board', 'chess-king', 'chess-knight', 'chess-pawn', 'chess-queen', 'chess-rook', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-right', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'child', 'church', 'circle', 'circle-notch', 'city', 'clinic-medical', 'clipboard', 'clipboard-check', 'clipboard-list', 'clock', 'clone', 'closed-captioning', 'cloud', 'cloud-download-alt', 'cloud-meatball', 'cloud-moon', 'cloud-moon-rain', 'cloud-rain', 'cloud-showers-heavy', 'cloud-sun', 'cloud-sun-rain', 'cloud-upload-alt', 'cocktail', 'code', 'code-branch', 'coffee', 'cog', 'cogs', 'coins', 'columns', 'comment', 'comment-alt', 'comment-dollar', 'comment-dots', 'comment-medical', 'comment-slash', 'comments', 'comments-dollar', 'compact-disc', 'compass', 'compress', 'compress-arrows-alt', 'concierge-bell', 'cookie', 'cookie-bite', 'copy', 'copyright', 'couch', 'credit-card', 'crop', 'crop-alt', 'cross', 'crosshairs', 'crow', 'crown', 'crutch', 'cube', 'cubes', 'cut', 'database', 'deaf', 'democrat', 'desktop', 'dharmachakra', 'diagnoses', 'dice', 'dice-d20', 'dice-d6', 'dice-five', 'dice-four', 'dice-one', 'dice-six', 'dice-three', 'dice-two', 'digital-tachograph', 'directions', 'divide', 'dizzy', 'dna', 'dog', 'dollar-sign', 'dolly', 'dolly-flatbed', 'donate', 'door-closed', 'door-open', 'dot-circle', 'dove', 'download', 'drafting-compass', 'dragon', 'draw-polygon', 'drum', 'drum-steelpan', 'drumstick-bite', 'dumbbell', 'dumpster', 'dumpster-fire', 'dungeon', 'edit', 'egg', 'eject', 'ellipsis-h', 'ellipsis-v', 'envelope', 'envelope-open', 'envelope-open-text', 'envelope-square', 'equals', 'eraser', 'ethernet', 'euro-sign', 'exchange-alt', 'exclamation', 'exclamation-circle', 'exclamation-triangle', 'expand', 'expand-arrows-alt', 'external-link-alt', 'external-link-square-alt', 'eye', 'eye-dropper', 'eye-slash', 'fan', 'fast-backward', 'fast-forward', 'fax', 'feather', 'feather-alt', 'female', 'fighter-jet', 'file', 'file-alt', 'file-archive', 'file-audio', 'file-code', 'file-contract', 'file-csv', 'file-download', 'file-excel', 'file-export', 'file-image', 'file-import', 'file-invoice', 'file-invoice-dollar', 'file-medical', 'file-medical-alt', 'file-pdf', 'file-powerpoint', 'file-prescription', 'file-signature', 'file-upload', 'file-video', 'file-word', 'fill', 'fill-drip', 'film', 'filter', 'fingerprint', 'fire', 'fire-alt', 'fire-extinguisher', 'first-aid', 'fish', 'fist-raised', 'flag', 'flag-checkered', 'flag-usa', 'flask', 'flushed', 'folder', 'folder-minus', 'folder-open', 'folder-plus', 'font', 'football-ball', 'forward', 'frog', 'frown', 'frown-open', 'funnel-dollar', 'futbol', 'gamepad', 'gas-pump', 'gavel', 'gem', 'genderless', 'ghost', 'gift', 'gifts', 'glass-cheers', 'glass-martini', 'glass-martini-alt', 'glass-whiskey', 'glasses', 'globe', 'globe-africa', 'globe-americas', 'globe-asia', 'globe-europe', 'golf-ball', 'gopuram', 'graduation-cap', 'greater-than', 'greater-than-equal', 'grimace', 'grin', 'grin-alt', 'grin-beam', 'grin-beam-sweat', 'grin-hearts', 'grin-squint', 'grin-squint-tears', 'grin-stars', 'grin-tears', 'grin-tongue', 'grin-tongue-squint', 'grin-tongue-wink', 'grin-wink', 'grip-horizontal', 'grip-lines', 'grip-lines-vertical', 'grip-vertical', 'guitar', 'h-square', 'hamburger', 'hammer', 'hamsa', 'hand-holding', 'hand-holding-heart', 'hand-holding-usd', 'hand-lizard', 'hand-middle-finger', 'hand-paper', 'hand-peace', 'hand-point-down', 'hand-point-left', 'hand-point-right', 'hand-point-up', 'hand-pointer', 'hand-rock', 'hand-scissors', 'hand-spock', 'hands', 'hands-helping', 'handshake', 'hanukiah', 'hard-hat', 'hashtag', 'hat-cowboy', 'hat-cowboy-side', 'hat-wizard', 'heading', 'headphones', 'headphones-alt', 'headset', 'heart', 'heart-broken', 'heartbeat', 'helicopter', 'highlighter', 'hiking', 'hippo', 'history', 'hockey-puck', 'holly-berry', 'home', 'horse', 'horse-head', 'hospital', 'hospital-alt', 'hospital-symbol', 'hot-tub', 'hotdog', 'hotel', 'hourglass', 'hourglass-end', 'hourglass-half', 'hourglass-start', 'house-damage', 'hryvnia', 'i-cursor', 'ice-cream', 'icicles', 'icons', 'id-badge', 'id-card', 'id-card-alt', 'igloo', 'image', 'images', 'inbox', 'indent', 'industry', 'infinity', 'info', 'info-circle', 'italic', 'jedi', 'joint', 'journal-whills', 'kaaba', 'key', 'keyboard', 'khanda', 'kiss', 'kiss-beam', 'kiss-wink-heart', 'kiwi-bird', 'landmark', 'language', 'laptop', 'laptop-code', 'laptop-medical', 'laugh', 'laugh-beam', 'laugh-squint', 'laugh-wink', 'layer-group', 'leaf', 'lemon', 'less-than', 'less-than-equal', 'level-down-alt', 'level-up-alt', 'life-ring', 'lightbulb', 'link', 'lira-sign', 'list', 'list-alt', 'list-ol', 'list-ul', 'location-arrow', 'lock', 'lock-open', 'long-arrow-alt-down', 'long-arrow-alt-left', 'long-arrow-alt-right', 'long-arrow-alt-up', 'low-vision', 'luggage-cart', 'magic', 'magnet', 'mail-bulk', 'male', 'map', 'map-marked', 'map-marked-alt', 'map-marker', 'map-marker-alt', 'map-pin', 'map-signs', 'marker', 'mars', 'mars-double', 'mars-stroke', 'mars-stroke-h', 'mars-stroke-v', 'mask', 'medal', 'medkit', 'meh', 'meh-blank', 'meh-rolling-eyes', 'memory', 'menorah', 'mercury', 'meteor', 'microchip', 'microphone', 'microphone-alt', 'microphone-alt-slash', 'microphone-slash', 'microscope', 'minus', 'minus-circle', 'minus-square', 'mitten', 'mobile', 'mobile-alt', 'money-bill', 'money-bill-alt', 'money-bill-wave', 'money-bill-wave-alt', 'money-check', 'money-check-alt', 'monument', 'moon', 'mortar-pestle', 'mosque', 'motorcycle', 'mountain', 'mouse', 'mouse-pointer', 'mug-hot', 'music', 'network-wired', 'neuter', 'newspaper', 'not-equal', 'notes-medical', 'object-group', 'object-ungroup', 'oil-can', 'om', 'otter', 'outdent', 'pager', 'paint-brush', 'paint-roller', 'palette', 'pallet', 'paper-plane', 'paperclip', 'parachute-box', 'paragraph', 'parking', 'passport', 'pastafarianism', 'paste', 'pause', 'pause-circle', 'paw', 'peace', 'pen', 'pen-alt', 'pen-fancy', 'pen-nib', 'pen-square', 'pencil-alt', 'pencil-ruler', 'people-carry', 'pepper-hot', 'percent', 'percentage', 'person-booth', 'phone', 'phone-alt', 'phone-slash', 'phone-square', 'phone-square-alt', 'phone-volume', 'photo-video', 'piggy-bank', 'pills', 'pizza-slice', 'place-of-worship', 'plane', 'plane-arrival', 'plane-departure', 'play', 'play-circle', 'plug', 'plus', 'plus-circle', 'plus-square', 'podcast', 'poll', 'poll-h', 'poo', 'poo-storm', 'poop', 'portrait', 'pound-sign', 'power-off', 'pray', 'praying-hands', 'prescription', 'prescription-bottle', 'prescription-bottle-alt', 'print', 'procedures', 'project-diagram', 'puzzle-piece', 'qrcode', 'question', 'question-circle', 'quidditch', 'quote-left', 'quote-right', 'quran', 'radiation', 'radiation-alt', 'rainbow', 'random', 'receipt', 'record-vinyl', 'recycle', 'redo', 'redo-alt', 'registered', 'remove-format', 'reply', 'reply-all', 'republican', 'restroom', 'retweet', 'ribbon', 'ring', 'road', 'robot', 'rocket', 'route', 'rss', 'rss-square', 'ruble-sign', 'ruler', 'ruler-combined', 'ruler-horizontal', 'ruler-vertical', 'running', 'rupee-sign', 'sad-cry', 'sad-tear', 'satellite', 'satellite-dish', 'save', 'school', 'screwdriver', 'scroll', 'sd-card', 'search', 'search-dollar', 'search-location', 'search-minus', 'search-plus', 'seedling', 'server', 'shapes', 'share', 'share-alt', 'share-alt-square', 'share-square', 'shekel-sign', 'shield-alt', 'ship', 'shipping-fast', 'shoe-prints', 'shopping-bag', 'shopping-basket', 'shopping-cart', 'shower', 'shuttle-van', 'sign', 'sign-in-alt', 'sign-language', 'sign-out-alt', 'signal', 'signature', 'sim-card', 'sitemap', 'skating', 'skiing', 'skiing-nordic', 'skull', 'skull-crossbones', 'slash', 'sleigh', 'sliders-h', 'smile', 'smile-beam', 'smile-wink', 'smog', 'smoking', 'smoking-ban', 'sms', 'snowboarding', 'snowflake', 'snowman', 'snowplow', 'socks', 'solar-panel', 'sort', 'sort-alpha-down', 'sort-alpha-down-alt', 'sort-alpha-up', 'sort-alpha-up-alt', 'sort-amount-down', 'sort-amount-down-alt', 'sort-amount-up', 'sort-amount-up-alt', 'sort-down', 'sort-numeric-down', 'sort-numeric-down-alt', 'sort-numeric-up', 'sort-numeric-up-alt', 'sort-up', 'spa', 'space-shuttle', 'spell-check', 'spider', 'spinner', 'splotch', 'spray-can', 'square', 'square-full', 'square-root-alt', 'stamp', 'star', 'star-and-crescent', 'star-half', 'star-half-alt', 'star-of-david', 'star-of-life', 'step-backward', 'step-forward', 'stethoscope', 'sticky-note', 'stop', 'stop-circle', 'stopwatch', 'store', 'store-alt', 'stream', 'street-view', 'strikethrough', 'stroopwafel', 'subscript', 'subway', 'suitcase', 'suitcase-rolling', 'sun', 'superscript', 'surprise', 'swatchbook', 'swimmer', 'swimming-pool', 'synagogue', 'sync', 'sync-alt', 'syringe', 'table', 'table-tennis', 'tablet', 'tablet-alt', 'tablets', 'tachometer-alt', 'tag', 'tags', 'tape', 'tasks', 'taxi', 'teeth', 'teeth-open', 'temperature-high', 'temperature-low', 'tenge', 'terminal', 'text-height', 'text-width', 'th', 'th-large', 'th-list', 'theater-masks', 'thermometer', 'thermometer-empty', 'thermometer-full', 'thermometer-half', 'thermometer-quarter', 'thermometer-three-quarters', 'thumbs-down', 'thumbs-up', 'thumbtack', 'ticket-alt', 'times', 'times-circle', 'tint', 'tint-slash', 'tired', 'toggle-off', 'toggle-on', 'toilet', 'toilet-paper', 'toolbox', 'tools', 'tooth', 'torah', 'torii-gate', 'tractor', 'trademark', 'traffic-light', 'train', 'tram', 'transgender', 'transgender-alt', 'trash', 'trash-alt', 'trash-restore', 'trash-restore-alt', 'tree', 'trophy', 'truck', 'truck-loading', 'truck-monster', 'truck-moving', 'truck-pickup', 'tshirt', 'tty', 'tv', 'umbrella', 'umbrella-beach', 'underline', 'undo', 'undo-alt', 'universal-access', 'university', 'unlink', 'unlock', 'unlock-alt', 'upload', 'user', 'user-alt', 'user-alt-slash', 'user-astronaut', 'user-check', 'user-circle', 'user-clock', 'user-cog', 'user-edit', 'user-friends', 'user-graduate', 'user-injured', 'user-lock', 'user-md', 'user-minus', 'user-ninja', 'user-nurse', 'user-plus', 'user-secret', 'user-shield', 'user-slash', 'user-tag', 'user-tie', 'user-times', 'users', 'users-cog', 'utensil-spoon', 'utensils', 'vector-square', 'venus', 'venus-double', 'venus-mars', 'vial', 'vials', 'video', 'video-slash', 'vihara', 'voicemail', 'volleyball-ball', 'volume-down', 'volume-mute', 'volume-off', 'volume-up', 'vote-yea', 'vr-cardboard', 'walking', 'wallet', 'warehouse', 'water', 'wave-square', 'weight', 'weight-hanging', 'wheelchair', 'wifi', 'wind', 'window-close', 'window-maximize', 'window-minimize', 'window-restore', 'wine-bottle', 'wine-glass', 'wine-glass-alt', 'won-sign', 'wrench', 'x-ray', 'yen-sign', 'yin-yang'];var regular = ['address-book', 'address-card', 'angry', 'arrow-alt-circle-down', 'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up', 'bell', 'bell-slash', 'bookmark', 'building', 'calendar', 'calendar-alt', 'calendar-check', 'calendar-minus', 'calendar-plus', 'calendar-times', 'caret-square-down', 'caret-square-left', 'caret-square-right', 'caret-square-up', 'chart-bar', 'check-circle', 'check-square', 'circle', 'clipboard', 'clock', 'clone', 'closed-captioning', 'comment', 'comment-alt', 'comment-dots', 'comments', 'compass', 'copy', 'copyright', 'credit-card', 'dizzy', 'dot-circle', 'edit', 'envelope', 'envelope-open', 'eye', 'eye-slash', 'file', 'file-alt', 'file-archive', 'file-audio', 'file-code', 'file-excel', 'file-image', 'file-pdf', 'file-powerpoint', 'file-video', 'file-word', 'flag', 'flushed', 'folder', 'folder-open', 'frown', 'frown-open', 'futbol', 'gem', 'grimace', 'grin', 'grin-alt', 'grin-beam', 'grin-beam-sweat', 'grin-hearts', 'grin-squint', 'grin-squint-tears', 'grin-stars', 'grin-tears', 'grin-tongue', 'grin-tongue-squint', 'grin-tongue-wink', 'grin-wink', 'hand-lizard', 'hand-paper', 'hand-peace', 'hand-point-down', 'hand-point-left', 'hand-point-right', 'hand-point-up', 'hand-pointer', 'hand-rock', 'hand-scissors', 'hand-spock', 'handshake', 'hdd', 'heart', 'hospital', 'hourglass', 'id-badge', 'id-card', 'image', 'images', 'keyboard', 'kiss', 'kiss-beam', 'kiss-wink-heart', 'laugh', 'laugh-beam', 'laugh-squint', 'laugh-wink', 'lemon', 'life-ring', 'lightbulb', 'list-alt', 'map', 'meh', 'meh-blank', 'meh-rolling-eyes', 'minus-square', 'money-bill-alt', 'moon', 'newspaper', 'object-group', 'object-ungroup', 'paper-plane', 'pause-circle', 'play-circle', 'plus-square', 'question-circle', 'registered', 'sad-cry', 'sad-tear', 'save', 'share-square', 'smile', 'smile-beam', 'smile-wink', 'snowflake', 'square', 'star', 'star-half', 'sticky-note', 'stop-circle', 'sun', 'surprise', 'thumbs-down', 'thumbs-up', 'times-circle', 'tired', 'trash-alt', 'user', 'user-circle', 'window-close', 'window-maximize', 'window-minimize', 'window-restore'];var brand = ['500px', 'accessible-icon', 'accusoft', 'acquisitions-incorporated', 'adn', 'adobe', 'adversal', 'affiliatetheme', 'airbnb', 'algolia', 'alipay', 'amazon', 'amazon-pay', 'amilia', 'android', 'angellist', 'angrycreative', 'angular', 'app-store', 'app-store-ios', 'apper', 'apple', 'apple-pay', 'artstation', 'asymmetrik', 'atlassian', 'audible', 'autoprefixer', 'avianex', 'aviato', 'aws', 'bandcamp', 'battle-net', 'behance', 'behance-square', 'bimobject', 'bitbucket', 'bitcoin', 'bity', 'black-tie', 'blackberry', 'blogger', 'blogger-b', 'bluetooth', 'bluetooth-b', 'bootstrap', 'btc', 'buffer', 'buromobelexperte', 'buy-n-large', 'buysellads', 'canadian-maple-leaf', 'cc-amazon-pay', 'cc-amex', 'cc-apple-pay', 'cc-diners-club', 'cc-discover', 'cc-jcb', 'cc-mastercard', 'cc-paypal', 'cc-stripe', 'cc-visa', 'centercode', 'centos', 'chrome', 'chromecast', 'cloudscale', 'cloudsmith', 'cloudversify', 'codepen', 'codiepie', 'confluence', 'connectdevelop', 'contao', 'cotton-bureau', 'cpanel', 'creative-commons', 'creative-commons-by', 'creative-commons-nc', 'creative-commons-nc-eu', 'creative-commons-nc-jp', 'creative-commons-nd', 'creative-commons-pd', 'creative-commons-pd-alt', 'creative-commons-remix', 'creative-commons-sa', 'creative-commons-sampling', 'creative-commons-sampling-plus', 'creative-commons-share', 'creative-commons-zero', 'critical-role', 'css3', 'css3-alt', 'cuttlefish', 'd-and-d', 'd-and-d-beyond', 'dashcube', 'delicious', 'deploydog', 'deskpro', 'dev', 'deviantart', 'dhl', 'diaspora', 'digg', 'digital-ocean', 'discord', 'discourse', 'dochub', 'docker', 'draft2digital', 'dribbble', 'dribbble-square', 'dropbox', 'drupal', 'dyalog', 'earlybirds', 'ebay', 'edge', 'elementor', 'ello', 'ember', 'empire', 'envira', 'erlang', 'ethereum', 'etsy', 'evernote', 'expeditedssl', 'facebook', 'facebook-f', 'facebook-messenger', 'facebook-square', 'fantasy-flight-games', 'fedex', 'fedora', 'figma', 'firefox', 'first-order', 'first-order-alt', 'firstdraft', 'flickr', 'flipboard', 'fly', 'font-awesome', 'font-awesome-alt', 'font-awesome-flag', 'fonticons', 'fonticons-fi', 'fort-awesome', 'fort-awesome-alt', 'forumbee', 'foursquare', 'free-code-camp', 'freebsd', 'fulcrum', 'galactic-republic', 'galactic-senate', 'get-pocket', 'gg', 'gg-circle', 'git', 'git-alt', 'git-square', 'github', 'github-alt', 'github-square', 'gitkraken', 'gitlab', 'gitter', 'glide', 'glide-g', 'gofore', 'goodreads', 'goodreads-g', 'google', 'google-drive', 'google-play', 'google-plus', 'google-plus-g', 'google-plus-square', 'google-wallet', 'gratipay', 'grav', 'gripfire', 'grunt', 'gulp', 'hacker-news', 'hacker-news-square', 'hackerrank', 'hips', 'hire-a-helper', 'hooli', 'hornbill', 'hotjar', 'houzz', 'html5', 'hubspot', 'imdb', 'instagram', 'intercom', 'internet-explorer', 'invision', 'ioxhost', 'itch-io', 'itunes', 'itunes-note', 'java', 'jedi-order', 'jenkins', 'jira', 'joget', 'joomla', 'js', 'js-square', 'jsfiddle', 'kaggle', 'keybase', 'keycdn', 'kickstarter', 'kickstarter-k', 'korvue', 'laravel', 'lastfm', 'lastfm-square', 'leanpub', 'less', 'line', 'linkedin', 'linkedin-in', 'linode', 'linux', 'lyft', 'magento', 'mailchimp', 'mandalorian', 'markdown', 'mastodon', 'maxcdn', 'mdb', 'medapps', 'medium', 'medium-m', 'medrt', 'meetup', 'megaport', 'mendeley', 'microsoft', 'mix', 'mixcloud', 'mizuni', 'modx', 'monero', 'napster', 'neos', 'nimblr', 'node', 'node-js', 'npm', 'ns8', 'nutritionix', 'odnoklassniki', 'odnoklassniki-square', 'old-republic', 'opencart', 'openid', 'opera', 'optin-monster', 'orcid', 'osi', 'page4', 'pagelines', 'palfed', 'patreon', 'paypal', 'penny-arcade', 'periscope', 'phabricator', 'phoenix-framework', 'phoenix-squadron', 'php', 'pied-piper', 'pied-piper-alt', 'pied-piper-hat', 'pied-piper-pp', 'pinterest', 'pinterest-p', 'pinterest-square', 'playstation', 'product-hunt', 'pushed', 'python', 'qq', 'quinscape', 'quora', 'r-project', 'raspberry-pi', 'ravelry', 'react', 'reacteurope', 'readme', 'rebel', 'red-river', 'reddit', 'reddit-alien', 'reddit-square', 'redhat', 'renren', 'replyd', 'researchgate', 'resolving', 'rev', 'rocketchat', 'rockrms', 'safari', 'salesforce', 'sass', 'schlix', 'scribd', 'searchengin', 'sellcast', 'sellsy', 'servicestack', 'shirtsinbulk', 'shopware', 'simplybuilt', 'sistrix', 'sith', 'sketch', 'skyatlas', 'skype', 'slack', 'slack-hash', 'slideshare', 'snapchat', 'snapchat-ghost', 'snapchat-square', 'soundcloud', 'sourcetree', 'speakap', 'speaker-deck', 'spotify', 'squarespace', 'stack-exchange', 'stack-overflow', 'stackpath', 'staylinked', 'steam', 'steam-square', 'steam-symbol', 'sticker-mule', 'strava', 'stripe', 'stripe-s', 'studiovinari', 'stumbleupon', 'stumbleupon-circle', 'superpowers', 'supple', 'suse', 'swift', 'symfony', 'teamspeak', 'telegram', 'telegram-plane', 'tencent-weibo', 'the-red-yeti', 'themeco', 'themeisle', 'think-peaks', 'trade-federation', 'trello', 'tripadvisor', 'tumblr', 'tumblr-square', 'twitch', 'twitter', 'twitter-square', 'typo3', 'uber', 'ubuntu', 'uikit', 'umbraco', 'uniregistry', 'untappd', 'ups', 'usb', 'usps', 'ussunnah', 'vaadin', 'viacoin', 'viadeo', 'viadeo-square', 'viber', 'vimeo', 'vimeo-square', 'vimeo-v', 'vine', 'vk', 'vnv', 'vuejs', 'waze', 'weebly', 'weibo', 'weixin', 'whatsapp', 'whatsapp-square', 'whmcs', 'wikipedia-w', 'windows', 'wix', 'wizards-of-the-coast', 'wolf-pack-battalion', 'wordpress', 'wordpress-simple', 'wpbeginner', 'wpexplorer', 'wpforms', 'wpressr', 'xbox', 'xing', 'xing-square', 'y-combinator', 'yahoo', 'yammer', 'yandex', 'yandex-international', 'yarn', 'yelp', 'yoast', 'youtube', 'youtube-square', 'zhihu'];var icons = {
  solid: solid,
  brand: brand,
  regular: regular
};//
Promise.resolve().then(function(){return _interopNamespace(require('@fortawesome/fontawesome-free/js/all'))});
var script = {
  name: 'VueAwesomeIconPicker',
  props: {
    button: {
      type: String,
      default: 'Pick A Icon'
    },
    title: {
      type: String,
      default: 'Vue Awesome Icon Picker'
    },
    iconPreview: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      loading: false,
      allIcons: {
        brand: [],
        regular: [],
        solid: []
      },
      popUpActive: false,
      selectedIcon: {
        name: null,
        type: null
      },
      searchText: '',
      searchIconNotFound: false
    };
  },
  methods: {
    selectIcon: function selectIcon(icon, type) {
      this.selectedIcon.type = type;
      this.selectedIcon.name = icon;
      this.popUpActive = false;
      this.$emit('selected', this.selectedIcon);
    },
    searchTextChanged: function searchTextChanged() {
      this.searchIcon(this.searchText);
    },
    setDefaultIcons: function setDefaultIcons() {
      this.allIcons.brand = icons.brand;
      this.allIcons.regular = icons.regular;
      this.allIcons.solid = icons.solid;
    },
    searchIcon: function searchIcon(txt) {
      var _this = this;

      this.loading = true;

      if (txt && txt.length > 0) {
        setTimeout(function () {
          _this.loading = false;
        }, 950);
        txt = txt.toLowerCase();
        Object.keys(icons).forEach(function (key) {
          setTimeout(function () {
            var icons$1 = icons[key].filter(function (ico) {
              return ico.indexOf(txt) > -1;
            });

            if (icons$1 && icons$1.length > 0) {
              _this.allIcons[key] = icons$1;
            } else {
              _this.allIcons[key] = [];
            }
          }, 320);
        });
      } else {
        setTimeout(function () {
          _this.setDefaultIcons();

          _this.loading = false;
        }, 950);
      }
    }
  },
  created: function created() {
    this.setDefaultIcons();
  },
  computed: {
    popupActiveStyle: function popupActiveStyle() {
      return !this.popUpActive ? 'display: none;' : '';
    },
    brandIcons: function brandIcons() {
      return this.loading ? [] : this.allIcons.brand;
    },
    solidIcons: function solidIcons() {
      return this.loading ? [] : this.allIcons.solid;
    },
    regularIcons: function regularIcons() {
      return this.loading ? [] : this.allIcons.regular;
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "rbt-icon-picker"
  }, [_vm._ssrNode((_vm.iconPreview && _vm.selectedIcon.name ? "<span class=\"icon-preview\" data-v-526c1b06><i" + _vm._ssrClass(null, _vm.selectedIcon.type + " fa-" + _vm.selectedIcon.name) + " data-v-526c1b06></i></span>" : "<!---->") + " <button class=\"picker-btn\" data-v-526c1b06>" + _vm._ssrEscape("\n    " + _vm._s(_vm.button) + "\n  ") + "</button> <div class=\"rip-popup-component\"" + _vm._ssrStyle(null, _vm.popupActiveStyle, null) + " data-v-526c1b06><div class=\"rip-popup-bg\" data-v-526c1b06></div> <div class=\"rip-popup\" data-v-526c1b06><header class=\"rip-popup-header\" data-v-526c1b06><h2 data-v-526c1b06>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h2> <span data-v-526c1b06>×</span></header> <div class=\"rip-popup-content\" data-v-526c1b06><div class=\"rip-search\" data-v-526c1b06><div class=\"rip-input\" data-v-526c1b06><label for=\"ripSearch\" style=\"display: none;\" data-v-526c1b06>Search for Icon</label> <input id=\"ripSearch\" placeholder=\"Search for Icon\"" + _vm._ssrAttr("value", _vm.searchText) + " data-v-526c1b06> <span class=\"input-append\" data-v-526c1b06><i class=\"fas fa-search\" data-v-526c1b06></i></span></div></div> <div class=\"rip-content\" data-v-526c1b06><div class=\"rip-not-found\"" + _vm._ssrStyle(null, null, {
    display: _vm.loading ? '' : 'none'
  }) + " data-v-526c1b06><i class=\"fas fa-spinner fa-pulse\" data-v-526c1b06></i></div> <div class=\"rip-icons\"" + _vm._ssrStyle(null, null, {
    display: !_vm.loading ? '' : 'none'
  }) + " data-v-526c1b06><h4 class=\"icon-title\" data-v-526c1b06>\n              Regular Icons\n            </h4> " + (_vm.regularIcons.length <= 0 ? "<p style=\"text-align: center;\" data-v-526c1b06><i class=\"fas fa-eye-slash\" data-v-526c1b06></i>\n              Sorry, No icons found!\n            </p>" : "<!---->") + " " + (_vm.regularIcons.length > 0 ? "<ul class=\"rip-row\" data-v-526c1b06>" + _vm._ssrList(_vm.regularIcons, function (icon, index) {
    return "<li class=\"rip-col\" data-v-526c1b06><div class=\"icon-content text-center\" data-v-526c1b06><div class=\"icon-el\" data-v-526c1b06><i" + _vm._ssrClass(null, "far fa-" + icon) + " data-v-526c1b06></i></div> <div class=\"icon-title\" data-v-526c1b06>" + _vm._ssrEscape("\n                    " + _vm._s(icon) + "\n                  ") + "</div></div></li>";
  }) + "</ul>" : "<!---->") + " <h4 class=\"icon-title\" data-v-526c1b06>\n              Brand Icons\n            </h4> " + (_vm.brandIcons.length <= 0 ? "<p style=\"text-align: center;\" data-v-526c1b06><i class=\"fas fa-eye-slash\" data-v-526c1b06></i>\n              Sorry, No Brand icons found!\n            </p>" : "<!---->") + " " + (_vm.brandIcons.length > 0 ? "<ul class=\"rip-row\" data-v-526c1b06>" + _vm._ssrList(_vm.brandIcons, function (icon, index) {
    return "<li class=\"rip-col\" data-v-526c1b06><div class=\"icon-content text-center\" data-v-526c1b06><div class=\"icon-el\" data-v-526c1b06><i" + _vm._ssrClass(null, "fab fa-" + icon) + " data-v-526c1b06></i></div> <div class=\"icon-title\" data-v-526c1b06>" + _vm._ssrEscape("\n                    " + _vm._s(icon) + "\n                  ") + "</div></div></li>";
  }) + "</ul>" : "<!---->") + " <h4 class=\"icon-title\" data-v-526c1b06>\n              Solid Icons\n            </h4> " + (_vm.solidIcons.length <= 0 ? "<p style=\"text-align: center;\" data-v-526c1b06><i class=\"fas fa-eye-slash\" data-v-526c1b06></i>\n              Sorry, No Solid icons found!\n            </p>" : "<!---->") + " " + (_vm.solidIcons.length > 0 ? "<ul class=\"rip-row\" data-v-526c1b06>" + _vm._ssrList(_vm.solidIcons, function (icon, index) {
    return "<li class=\"rip-col\" data-v-526c1b06><div class=\"icon-content text-center\" data-v-526c1b06><div class=\"icon-el\" data-v-526c1b06><i" + _vm._ssrClass(null, "fas fa-" + icon) + " data-v-526c1b06></i></div> <div class=\"icon-title\" data-v-526c1b06>" + _vm._ssrEscape("\n                    " + _vm._s(icon) + "\n                  ") + "</div></div></li>";
  }) + "</ul>" : "<!---->") + "</div></div></div></div></div>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-526c1b06_0", {
    source: ".rbt-icon-picker .icon-preview[data-v-526c1b06]{font-size:22px;padding:10px 20px 0;display:inline-block}.rbt-icon-picker .picker-btn[data-v-526c1b06]{color:#fff;background:#339af0;padding:12px 25px;border:0;border-radius:2px;font-weight:600;text-transform:uppercase;letter-spacing:.02em;cursor:pointer;transition:all .25s ease-in}.rbt-icon-picker .picker-btn[data-v-526c1b06]:hover{background:#2c89d6}.rip-popup-component[data-v-526c1b06]{text-align:center;z-index:5999999;transition:all .2s;width:100%;height:100%;position:fixed;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:1}.rip-popup-component .rip-popup-bg[data-v-526c1b06]{width:100%;background:rgba(0,0,0,.4);position:absolute;top:0;height:100%;z-index:10;transition:all .25s ease;opacity:1;left:0}.rip-popup-component .rip-popup[data-v-526c1b06]{transition:all .2s;z-index:100;margin:10px;width:calc(100% - 30px);height:calc(100% - 30px);border-radius:6px;box-shadow:0 5px 20px 0 rgba(0,0,0,.1);background:#f8f9fa;animation:rebound-data-v-526c1b06 .3s}.rip-popup-component .rip-popup .rip-popup-header[data-v-526c1b06]{width:100%;display:flex;align-items:center;justify-content:space-between;background:rgba(0,0,0,.05);border-radius:5px 5px;position:relative}.rip-popup-component .rip-popup .rip-popup-header h2[data-v-526c1b06]{transition:all .23s ease .1s;padding:8px 8px 8px 12px;font-size:18px;text-align:center;width:100%}.rip-popup-component .rip-popup .rip-popup-header span[data-v-526c1b06]{background:#fff;transition:all .23s ease .1s;position:relative;padding:8px;cursor:pointer;box-shadow:0 5px 20px 0 rgba(0,0,0,.1);border-radius:5px;color:rgba(0,0,0,.6);transform:translate(8px,-8px);line-height:16px;font-size:30px}.rip-popup-component .rip-popup .rip-popup-header span[data-v-526c1b06]:hover{box-shadow:0 0 0 0 rgba(0,0,0,.1);transform:translate(5px,-5px)}.rip-popup-component .rip-popup .rip-popup-content[data-v-526c1b06]{padding:14px;font-size:14px;transition:all .23s ease .1s;overflow:auto;max-height:calc(100vh - 100px);margin-top:5px;margin-bottom:5px}.rip-popup-component .rip-popup .rip-popup-content .rip-search .rip-input[data-v-526c1b06]{display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-bottom:20px;border-bottom:1px dashed #e5e5e5;margin-bottom:20px}.rip-popup-component .rip-popup .rip-popup-content .rip-search .rip-input input[data-v-526c1b06]{width:100%!important;transition:all .1s ease-in-out;padding:16px 48px 16px 24px;font-size:25px;border:2px solid #dee2e6;box-shadow:inset 0 .25rem .125rem 0 rgba(0,0,0,.05);color:#495057;border-radius:4px}.rip-popup-component .rip-popup .rip-popup-content .rip-search .rip-input input[data-v-526c1b06]::placeholder{color:#c9cbcd}.rip-popup-component .rip-popup .rip-popup-content .rip-search .rip-input span[data-v-526c1b06]{position:absolute;right:25px;font-size:28px;color:#caccce;opacity:.4}.rip-popup-component .rip-popup .rip-popup-content .rip-content[data-v-526c1b06]{width:100%}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-not-found[data-v-526c1b06]{min-height:75vh;display:flex;align-items:center;align-self:center;align-content:center;min-width:100%;text-align:center}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-not-found svg[data-v-526c1b06]{margin:0 auto;font-size:50px;color:#adb5bd}.rip-popup-component .rip-popup .rip-popup-content .rip-content h4.icon-title[data-v-526c1b06]{font-size:20px;text-transform:uppercase;letter-spacing:.03em;margin-bottom:25px}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row[data-v-526c1b06]{width:100%;display:flex;flex-wrap:wrap;margin:0;padding:0}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col[data-v-526c1b06]{text-align:center;padding:0 0 16px;width:25%;list-style:none}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col .icon-content[data-v-526c1b06]{border-radius:3px;transition:all .5s cubic-bezier(.165,.84,.44,1);transform:translateZ(0)}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col .icon-content .icon-el[data-v-526c1b06]{padding:8px;font-size:35px;font-weight:900;color:#495057;cursor:pointer;transition:all;border-top-left-radius:3px;border-top-right-radius:3px}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col .icon-content .icon-el[data-v-526c1b06]:hover{color:#fff;background:#339af0}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col .icon-content .icon-title[data-v-526c1b06]{padding:8px 4px;font-size:13px;color:#adb5bd}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col .icon-content .icon-title[data-v-526c1b06]:hover{color:#495057}.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col .icon-content[data-v-526c1b06]:hover{background:#fff;box-shadow:0 .25rem .125rem 0 rgba(0,0,0,.05)}@media (min-width:576px){.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col[data-v-526c1b06]{width:20%}}@media (min-width:768px){.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col[data-v-526c1b06]{width:16.6667%}}@media (min-width:1200px){.rip-popup-component .rip-popup .rip-popup-content .rip-content .rip-row .rip-col[data-v-526c1b06]{width:11.1111%}}@keyframes rebound-data-v-526c1b06{0%{-webkit-transform:scale(.9);transform:scale(.9)}50%{-webkit-transform:scale(1.08);transform:scale(1.08)}100%{-webkit-transform:scale(1);transform:scale(1)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-526c1b06";
/* module identifier */

var __vue_module_identifier__ = "data-v-526c1b06";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function installVueAwesomeIconPicker(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueAwesomeIconPicker', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;