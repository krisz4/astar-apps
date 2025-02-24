export default {
  confirm: '確認',
  cancel: 'キャンセル',
  change: '変更',
  connect: '接続',
  disconnect: '接続を切る',
  copy: 'コピー',
  from: 'From',
  to: 'To',
  add: '追加',
  estimated: 'およそ',
  forget: 'Forget',
  remove: 'Remove',
  close: 'Close',
  manage: 'Manage',
  subscan: 'Subscan',
  blockscout: 'Blockscout',
  usd: 'USD',
  'polkadot-js': 'Polkadot.js',
  'polkadot-js-app': 'Polkadot.js App',
  metamask: 'MetaMask',
  clover: 'Clover',
  mathwallet: 'Math Wallet',
  wallet3: 'Wallet 3',
  alert: 'Alert',
  max: '最大',
  native: 'Native',
  evm: 'EVM',
  wasm: 'WASM',
  addressFormat: '{network} Wallet アドレス',
  addressPlaceholder: '送金先 {network} アドレス',
  evmAddressPlaceholder: '送金先 EVM アドレス',
  ticker: 'Ticker',
  isComingSoon: '{value} is coming soon',
  amountToken: '{amount} {token}',
  select: 'Select',
  sort: {
    sortBy: 'Sort by',
    amountHightToLow: 'Amount: High to Low',
    amountLowToHigh: 'Amount: Low to High',
    alphabeticalAtoZ: 'Alphabetical: A to Z',
    alphabeticalZtoA: 'Alphabetical: Z to A',
  },
  warning: {
    insufficientBalance: '{token} の残高不足',
    insufficientFee: '<注意> 資金不足のためトランザクションが失敗する可能性があります。',
    inputtedInvalidDestAddress: '送金先アドレスが有効ではありません。',
    inputtedInvalidAddress: 'アドレスが有効ではありません。',
    selectedInvalidNetworkInWallet: 'ウォレットに対して無効なネットワークです。',
    insufficientBridgeAmount: '最小送金額は {amount} {token} です。',
    insufficientOriginChainBalance: ' {chain} network の最低必要残高は {amount} {token} です。',
    insufficientExistentialDeposit:
      '{network} network にある残高が existential depositi 以下です。',
    withdrawalNotSupport: '現在のところ {chain} への送金はサポートされていません。',
  },
  toast: {
    transactionFailed: '送金失敗: {message}',
    completedHash: '表記ブロックハッシュで完了 #{hash}',
    completedTxHash: '表記トランザクションハッシュで完了 #{hash}',
    unableCalculateMsgPayload: 'Unable to calculate the message payload',
    amountMustNotBeZero: '送金額は0以上でなければいけません。',
    copyAddressSuccessfully: 'コピー完了!',
  },
  common: {
    updateMetadata: 'Metadata をアップデートしてください。',
    metadataAlreadyInstalled: 'Metadata はインストールされています。',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    dApps: 'dApps',
    dappStaking: 'dApp Staking',
    staking: 'Staking',
    contract: 'Contract',
    plasmLockdrop: 'Plasm Lockdrop',
    closeSidebar: 'Close sidebar',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    linkedIn: 'LinkedIn',
    reddit: 'Reddit',
    facebook: 'Facebook',
    instagram: 'Instagram',
    youtube: 'YouTube',
    docs: 'Documentation',
    speed: {
      speed: 'Transaction speed',
      speedTip: 'Transaction speed (Tip)',
      average: 'Average',
      fast: 'Fast',
      superFast: 'Super Fast',
      tipHelp: 'Tipは送金スピードを上げるのに重要です。',
    },
  },
  sidenavi: {
    community: 'Community',
    discord: 'Discord',
    twitter: 'Twitter',
    telegram: 'Telegram',
    reddit: 'Reddit',
    youtube: 'Youtube',
    forum: 'Forum',
    github: 'Github',
    docs: 'Docs',
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    close: 'Close',
  },
  drawer: {
    endpoint: 'Endpoint',
    viaEndpoint: 'via {value}',
  },
  wallet: {
    connectWallet: 'Connect Wallet',
    select: '接続するウォレットを選んでください。',
    nativeAccount: 'Native Accounts',
    evmAccount: 'EVM Accounts',
    math: {
      supportsNetwork: 'Math Wallet は Shiden Network のみサポートしています。',
      switchNetwork:
        "Math Wallet エクステンションのネットワークを 'Shiden' に変更し、ページをリフレッシュしてください。",
    },
    showBalance: '{token} バランスを表示',
  },
  installWallet: {
    getWallet: 'Haven’t got a {value} yet?',
    installWallet:
      '{value} をインストールする必要があります。完了したらこのページをリフレッシュしてください。',
    installExtension: '{value} エクステンションをインストールする。',
    howToConnect: '接続方法を確認する。',
  },
  updateWallet: {
    getUpdatedWallet: 'Haven’t updated {value} yet?',
    updateWallet:
      '{value} をインストールする必要があります。完了したらこのページをリフレッシュしてください。',
    updateExtension: '{value} エクステンションをアップデートしてください。',
  },
  topMetric: {
    build2earn: 'Build2Earn',
    wayOfStaking: 'An innovative way of Staking',
    tvlInDapps: 'TVL in dApps',
    currentEra: 'Current Era',
    eraInfo: '(ETA: {eta})',
    stakersRewards: 'Stakers Rewards',
    currentBlock: 'Current Block',
    totalDapps: 'Total dApps',
    apr: 'APR',
    apy: 'APY',
  },
  myDapps: {
    index: 'Index',
    dapps: 'dApps',
    stakedAmount: 'Staked Amount',
    unbondingAmount: 'Unbonding Amount',
    remainingEra: 'Remaining Era',
    withdraw: 'Withdraw',
    rebond: 'Re-bond',
    totalEarned: 'Total Earned',
    manage: 'Manage',
    add: 'Add',
    unbond: 'Unbond',
    rebondGuide:
      'Re-bondしたら資金はステーキングに戻ります。引き出す際は再度10eraのunbond期間が必要になります。',
    rebondTitle: 'The amount you wish to rebond',
    withdrawGuide: '引き出せる資金があります。',
    withdrawTitle: 'Ready to withdraw',
    unregisteredAlert:
      'このプロジェクトの登録は解除されています。Claimをしていただくことにより、ステーキング資金が返金されます。',
    claimAndUnbond: 'ステーキング解除と請求',
  },
  myReward: {
    totalStaked: 'Total Staked',
    availableToClaim: '請求可能額',
    era: 'Era',
    claim: '請求',
    restake: '請求後に再ステーク',
    turnOff: 'Turn Off',
    totalEarned: '現在までのリワード総額',
    availableToClaimTip:
      '記載されているeraの数はdAppごとの総数になります。一度に請求できるのは５０個までで、長く放置すると複数回の請求(Claim）が必要になります。',
    restakeTip:
      'オンにすることで、請求(Claim)時に自動的にリワードが再ステークされるようになります。',
  },
  dappStaking: {
    myStaking: 'My Staking',
    myRewards: 'My Rewards',
    unbonding: 'Unbonding',
    myDapps: 'My dApps',
    dappRegistered: 'Congrats!! your contract is approved. Please submit the details',
    welcomeBanner:
      'Congratulations 🎉 Please fill in your dApp information to give users better overview of your application. Updated data will appear on the dApp page shortly.',
    registerNow: 'Register now',
    transferableBalance: '送金可能残高',
    totalStake: 'Total stake:',
    yourStake: 'Your stake: ',
    add: 'Add',
    unbond: 'Unbond',
    unstake: 'Unstake',
    stake: 'Stake',
    claim: 'Claim',
    withdraw: 'Withdraw',
    unbondingEra: '引き出し可能まで {unbondingPeriod} eras のUnbonding期間があります。',
    turnOn: 'Turn on',
    turnOff: 'Turn off',
    on: 'ON',
    off: 'OFF',
    stakeNow: 'Stake Now',
    edit: 'Edit',
    developerIncentive: 'Developer Incentive',
    tokenEra: '{token}/era',
    dappStakingEvm: 'dApp Staking is available on EVM',
    onChainData: 'On-Chain Data',
    stakingTvl: 'Staking TVL',
    cantClaimWihtoutError:
      '一定期間請求(Claim)がなかったためRe-Stakeの機能が一時的に使用できない状態です。一度Re-Stakeの機能をオフにし、Claim完了後に再度オンにしてください。',
    stakePage: {
      backToDappList: 'Back to dApps list',
      whereFundsFrom: '資金はどこから使用しますか？',
    },
    dappPage: {
      back: 'Back',
      goBackToTopPage: 'Go back to the top page',
      stakeOrSwitchTo: 'Stake or switch to',
      totalStaked: 'Total Staked',
      totalStaker: 'Total Staker',
      team: 'Team',
      projectOverview: 'Project Overview',
      projectSite: 'Project Site',
      goToApp: 'Go to App',
      goToWebsite: 'Go to website',
      virtualMachine: 'Virtual Machine',
      contractAddress: 'Contract Address',
      license: 'License',
      community: 'Community',
      wallets: 'Wallets',
      stats: 'Stats',
    },
    modals: {
      contractAddress: 'Contract address {address}',
      license: 'License',
      startUnbonding: 'Start unbonding',
      unbondFrom: 'Unbond from {name}',
      builder: {
        title: 'Builder',
        githubAccount: 'GitHub account',
        twitterAccount: 'Twitter account',
        linkedInAccount: 'LinkedIn account',
        image: "Builder's image",
        imageRecomendation: 'A square image of minimum 500px is recommended.',
        error: {
          name: 'Builder name is required.',
          nameExists: 'Given name is already used by another developer',
          invalidUrl: 'Invalid url.',
          accountRequired: 'At least one account is required.',
          builderImageRequired: 'Builder image is required',
          buildersRequired: 'At least two builders are required.',
          builderUrlRequired: 'At least one account URL is required.',
        },
      },
      builders: 'Builders information',
      communityLabel: 'Community',
      community: {
        title: 'Communities',
        discordAccount: 'Discord account',
        twitterAccount: 'Twitter account',
        redditAccount: 'Reddit account',
        facebookAccount: 'Facebook account',
        tiktokAccount: 'TikTok account',
        youtubeAccount: 'YouTube account',
        instagramAccount: 'Instagram account',
        communityRequired: 'At least one community link is required.',
      },
      description: 'Description',
      markdown: 'Markdown',
      preview: 'Preview',
      addAccount: 'Add an account',
      addLogo: 'Add a logo image',
      addImage: 'Add an image',
      images: 'Images',
      imagesRequired: 'At least 4 images are required.',
      descriptionRequired: 'Tell the world something about your dApp.',
      contractTypeTitle: 'Is your project on',
      tagsTitle: 'Tags',
      categoryTitle: 'Choose main category',
      submit: 'Submit',
      dappNameRequired: 'dApp name is required',
      projectUrlRequired: 'Project URL is required.',
      name: 'Name',
      projectUrl: 'Project URL',
      dappImageRequired: 'Project logo is required.',
      projectLogo: 'Project logo',
    },
    toast: {
      successfullyClaimed: 'Successfully claimed {amount}',
      requiredClaimFirst: 'トランザクションを送る前に請求(Claim)をしてください。',
      requiredClaimFirstCompounding:
        '{message} -コンパウンドをオフにし、請求(Claim)してから再度オンにしてください。',
      successfullyWithdrawn: '引き出しに成功しました。',
      successfullySetRewardDest: 'You successfully set reward destination',
    },
    error: {
      onlySupportsSubstrate: 'dApp staking only supports Substrate wallets',
      notEnoughMinAmount: '最小{amount} {symbol}が必要です。',
      allFundsWillBeTransferred:
        '最小 {minStakingAmount} {symbol} が必要なので全てのトークンがトランスファーされます。',
    },
  },
  assets: {
    assets: 'Assets',
    xcmAssets: 'XCM Assets',
    xvmAssets: 'XVM ERC-20 Assets',
    nativeAccount: 'Native Account',
    evmAccount: 'EVM Account',
    switchToNative: 'Switch to Lockdrop',
    switchToEvm: 'Switch to EVM',
    totalBalance: 'Total Balance',
    transfer: 'Transfer',
    faucet: 'Faucet',
    bridge: 'Bridge',
    manage: 'Manage',
    xcm: 'XCM',
    wrap: 'Wrap',
    explorer: 'Explorer',
    withdraw: 'Withdraw',
    view: 'View',
    transferableBalance: '送金可能バランス',
    yourEvmDeposit: 'Your EVM deposit',
    yourVestingInfo: 'Your Vesting Info',
    yourStaking: 'Your Staking',
    lockdropAccount: 'Lockdrop Account',
    inLockdropAccount: 'You are in a Lockdrop account',
    cantTransferToExcahges: '取引所には送金できません。',
    noHash: 'このトランザクションにハッシュはつきません。',
    addToWallet: 'Add to wallet',
    noResults: 'No results found :(',
    wrongNetwork: 'ウォレットが間違ったNetworkに接続されています。',
    connectNetwork: 'Connect to {network} RPC',
    invalidAddress: 'アドレスが有効ではありません。',
    importTokens: 'トークンをインポート',
    importXvmTokens: 'XVM を使いERC-20トークンをインポートする。',
    importErc20Tokens: 'ERC-20トークンをインポート',
    hideSmallBalances: '少ないバランスのトークンを非表示',
    unhideSmallBalances: '0バランス含む全てのトークンを表示',
    tokenHasBeenAdded: 'このトークンはすでに追加されています。',
    transferPage: {
      backToAssets: 'Back to Assets',
      crossChainTransfer: 'Cross-chain Transfer',
      xcm: '(XCM)',
      faq: 'FAQ',
      recentHistory: 'Recent History',
      hotTopic: 'Hot Topic',
      inputAddressManually: 'マニュアルでアドレスを入力する',
      goBack: 'Go back',
      selectChain: 'Select Chain',
      selectToken: 'Select Token',
      noTxRecords: 'トランザクションのレコードがありません。',
      mintTransferAmount: '最小送金額は {amount} {symbol} です。',
      howToUsePortal: 'HOW TO USE THE PORTAL',
    },
    modals: {
      max: 'Max',
      balance: 'Balance: {amount} {token}',
      available: 'Available: {amount} {token}',
      notSendToExchanges: '取引所には送金しません。',
      notSendToEvmExchanges:
        '取引所のEVMデポジットアドレスではありません。そうであれば資金が失われるリスクも理解しています。',
      youWillReceive: 'You will receive',
      faucetNextRequest: 'Time left until the next request',
      countDown: '{hrs} hrs {mins} mins {secs} secs',
      whatIsFaucet: ' Faucet とは?',
      faucetBalance: 'Faucet Balance: {amount} {symbol}',
      faucetIntro:
        '各トランザクションには少額の費用がかかり、 {symbol} がない場合は送金ができないので、トランザクションに必要な {symbol} トークンをFaucetから受け取ります。',
      faucetDriedOut: 'Faucetが枯渇しています。Discordにレポートください。',
      availableToWithdraw: '引き出し可能',
      totalDistribution: 'Total Distribution',
      alreadyVested: 'Already vested',
      remainingVests: 'Remaining vests',
      unlockPerBlock: '{perToken} {symbol} per block until block {untilBlock}',
      availableToUnlock: 'Available to unlock',
      unlock: 'Unlock',
      transfer: 'Transfer',
      evmXcmDeposit: 'EVM (Deposit)',
      evmXcmWithdrawal: 'EVM (Withdrawal)',
      depositToNative: 'Deposit to Native',
      depositToEvm: 'Deposit to EVM',
      evmWalletAddress: 'EVM Wallet Address',
      howToImportXvmTokens: 'Find out how to import ERC20 tokens via XVM',
      riskOfImportTokens:
        '既存のトークンの偽バージョンを作成するなど、誰でもトークンを作成できるリスクにご注意ください。',
      tokenContractAddress: 'Token Contract Address',
      erc20ContractAddress: 'ERC-20 Token Contract Address',
      tipDestAddressFormat: '{chain} address はどこで確認すればいい?',
      titleWithdraw: 'Withdraw {token}',
      titleVesting: 'Vesting info',
      xcmWarning: {
        minBalIsRequired: 'Origin chain に最小バランスが設定されています。',
        fee: '費用は入力した金額から差し引かれます。',
        notInputExchanges: '取引所のアドレスを入力しないでください。',
        tooltip:
          '資金の損失を防ぐために、 {amount} {symbol} をオリジンチェーンアカウントに保管しています。origin chainから入金する場合、最小バランスを超えたトークンのみが送金可能です。',
      },
    },
  },
  dashboard: {
    dashboard: 'Dashboard',
    tvl: 'TVL',
    circulating: {
      circulatingSupply: 'Circulating Supply',
      supply: 'of {totalSupply}: ',
    },
    block: {
      block: 'Block',
      blockHeight: 'Block Height',
      blockTime: 'Block Time',
      avgBlockTime: 'avg. block time (secs)',
      oneEra: '1 era:',
      sevenEras: '7 eras:',
      thirtyEras: '30 eras:',
      secs: ' secs',
      era: 'Era',
      progress: '{value}%',
      eta: 'ETA {value}',
    },
  },
  chart: {
    tvl: {
      title: 'Total Value Locked',
      tooltip: 'TVL',
    },
    dappStaking: {
      title: 'Total Value Locked in dApp Staking',
      tooltip: 'TVL in dApp Staking',
    },
    ecosystem: {
      title: 'Total Value Locked in EVM Ecosystem',
      tooltip: 'TVL in EVM Ecosystem',
    },
    ttlTransactions: {
      title: 'Total Transactions',
      tooltip: 'Total Transactions',
    },
    tokenPrice: {
      title: 'Token Price',
      tooltip: 'Token Price',
    },
    uniqueActiveUsers: {
      title: 'Unique Active Users',
      tooltip: 'Unique Active Users',
    },
    numberOfCalls: {
      title: 'Number Of Transactions',
      tooltip: "Number of transactions users called to dApp's smart contract address",
    },
  },
};
