(function () {

  function H(title) {
    return '<header class="slide-header"><h2 class="slide-h2">' + title + '</h2></header>';
  }

  /* ===================== SLIDES ===================== */
  window.SLIDE_SLUG = 'yorozu-hajimete-as';

  /* ── 01: タイトル ── */
  function slide01() {
    return '<section class="slide slide-cover" data-section="cover" data-title="タイトル" data-notes="本日はよろず支援拠点にお越しいただきありがとうございます。はじめてのご利用ということで、新規申込時に確認はされていると思いますが、まず最初に、よろず支援拠点のご案内と、ご利用ルールについて、5分ほどでご案内させてください。">' +
      '<div class="slide-cover-bar">' +
        '<div class="slide-cover-tag">よろず支援拠点 岡山</div>' +
        '<h1 class="slide-cover-title">はじめてご利用の方へ</h1>' +
      '</div>' +
      '<div class="slide-cover-body" style="flex-direction:row;align-items:flex-end;padding-bottom:2.5cqw;">' +
        '<div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:1.2cqw;">' +
          '<p class="slide-cover-sub">ご利用案内 ＋ よくある質問 ＋ ご利用規約</p>' +
          '<div class="slide-cover-meta">相談開始前 ご案内</div>' +
        '</div>' +
        '<div style="display:flex;gap:1cqw;flex-shrink:0;align-items:flex-end;">' +
          '<img src="img/img_01.png" alt="Q&A" style="width:19cqw;border-radius:.5cqw;box-shadow:0 3px 14px rgba(0,0,0,.18);">' +
          '<img src="img/img_02.png" alt="利用規約" style="width:19cqw;border-radius:.5cqw;box-shadow:0 3px 14px rgba(0,0,0,.18);">' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 02: 核心メッセージ ── */
  function slide02() {
    return '<section class="slide slide-impact" data-section="cover" data-title="まず最初に" data-notes="まず、よろず支援拠点を一言でいうと、国が設置した無料の経営相談所です。難しく考えなくて大丈夫です。困ったことがあれば、気軽に相談に来てください。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">まず最初に</div>' +
        '<p class="s-impact-main">無料で、何度でも。<br><span style="font-size:0.7em;color:rgba(255,255,255,.65);">遠慮なく使ってください。</span></p>' +
      '</div>' +
    '</section>';
  }

  /* ── 03: 本日の流れ ── */
  function slide03() {
    return '<section class="slide" data-section="cover" data-title="本日の流れ" data-notes="本日は、まず簡単なご説明をしてから、ご相談内容についてうかがってまります。ご不明な点はいつでも聞いてください。">' +
      H('本日の流れ') +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-flow">' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">1</div>' +
            '<div class="s-flow-label">よくある質問</div>' +
            '<div class="s-flow-desc">料金・方法・連絡先など説明</div>' +
          '</div>' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">2</div>' +
            '<div class="s-flow-label">ご利用規約</div>' +
            '<div class="s-flow-desc">対象・情報管理・免責など説明</div>' +
          '</div>' +
          '<div class="s-flow-step">' +
            '<div class="s-flow-num">3</div>' +
            '<div class="s-flow-label">状況の確認</div>' +
            '<div class="s-flow-desc">現在の課題を<br>聞かせてください</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 04: セクション Q&A ── */
  function slide04() {
    return '<section class="slide slide-section" data-section="qa" data-title="よくある質問" data-notes="では、よくある質問についてご説明します。">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PART 01</div>' +
        '<h1 class="s-section-title">よくあるご質問について</h1>' +
        '<p class="s-section-lead">利用前に知っておきたいこと</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 05: Q1 よろずとは（内容少→大きく） ── */
  function slide05() {
    return '<section class="slide slide-impact" data-section="qa" data-title="Q1. よろず支援拠点とは" data-notes="まず、よろず支援拠点は、経済産業省の中小企業庁が全国に設置している、中小企業や小規模事業者の方向けの無料の経営相談所です。経営に関する幅広いお悩みに対して、専門のコーディネーターが対応いたします。">' +
      '<div class="slide-content">' +
        '<div class="s-impact-tag">Q1 ― よろず支援拠点とは？</div>' +
        '<p class="s-impact-main" style="font-size:3.8cqw;line-height:1.55;">中小企業庁が全国に設置した<br>無料の経営相談所です。<br><span style="font-size:0.72em;color:rgba(255,255,255,.6);">専門コーディネーターが幅広い経営相談に対応します。</span></p>' +
      '</div>' +
    '</section>';
  }

  /* ── 06: Q2 料金・時間・回数（数字強調） ── */
  function slide06() {
    return '<section class="slide slide-metric" data-section="qa" data-title="Q2. 料金・時間・回数" data-notes="料金は無料です。1回1時間までで、回数制限はありません。ただし同時に複数の予約はできません。もし1時間で終わらない場合は、終わってから、次の予約をしてください。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">Q2 ― 料金・時間・回数</p>' +
        '<div class="s-metric-value">無料</div>' +
        '<p class="s-metric-unit">1回 1時間まで ／ 回数制限なし</p>' +
        '<p class="s-metric-desc" style="margin-top:1.5cqw;font-size:1.8cqw;color:rgba(255,255,255,.7);">※ 同時に複数予約は取得不可。終わってから次回をご予約ください。</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 07: Q3 相談方法（内容少→比較で大きく） ── */
  function slide07() {
    return '<section class="slide" data-section="qa" data-title="Q3. 相談方法" data-notes="相談の方法は2種類です。WEBか、ご来訪いただいての対面となります。指定場所への訪問には、対応していません。">' +
      H('Q3 ― 相談方法') +
      '<div class="slide-content">' +
        '<div class="s-compare" style="margin-top:0.5cqw;">' +
          '<div class="s-compare-col positive" style="justify-content:center;text-align:center;">' +
            '<div class="s-compare-badge" style="margin:0 auto 1cqw;">推奨</div>' +
            '<div class="s-compare-title" style="font-size:3cqw;text-align:center;">WEB相談</div>' +
            '<ul class="s-compare-items" style="margin-top:1cqw;">' +
              '<li>ご自宅・会社から接続</li>' +
              '<li>Meet-Inを使用</li>' +
            '</ul>' +
          '</div>' +
          '<div class="s-compare-col neutral" style="justify-content:center;text-align:center;">' +
            '<div class="s-compare-badge" style="margin:0 auto 1cqw;">対面</div>' +
            '<div class="s-compare-title" style="font-size:3cqw;text-align:center;">会場来訪</div>' +
            '<ul class="s-compare-items" style="margin-top:1cqw;">' +
              '<li>岡山 / 津山 各会場へ</li>' +
              '<li>訪問対応はなし</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 08: Q4&Q5 場所・担当者 ── */
  function slide08() {
    return '<section class="slide" data-section="qa" data-title="Q4&Q5. 場所・担当者" data-notes="場所について補足です。オンラインでのご相談は会社やご自宅など、ご都合のよい場所からご参加ください。ご来訪の場合は、岡山サテライトオフィスには専用駐車場がありません。近隣のコインパーキングをご利用ください。また、コーディネーターの出勤日は決まっています。相談者様のご都合に合わせた、日時指定はできません。">' +
      H('Q4&5 ― 場所・担当者の出勤') +
      '<div class="slide-content">' +
        '<ul class="s-num-list">' +
          '<li class="s-num-item">' +
            '<span class="s-num">Q4</span>' +
            '<div>' +
              '<div class="s-num-title">岡山オフィス — 専用駐車場なし</div>' +
              '<div class="s-num-desc">近隣のコインパーキングをご利用ください。津山サテライトには駐車場があります。</div>' +
            '</div>' +
          '</li>' +
          '<li class="s-num-item">' +
            '<span class="s-num">Q5</span>' +
            '<div>' +
              '<div class="s-num-title">担当者の出勤日は固定</div>' +
              '<div class="s-num-desc">出勤スケジュールはあらかじめ決まっています。特定の日時への個別依頼はできません。</div>' +
            '</div>' +
          '</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 09: Q6 連絡方法（重要！） ── */
  function slide09() {
    return '<section class="slide slide-impact" data-section="qa" data-title="Q6. 連絡方法（重要）" data-notes="コーディネイターへのご連絡は、事務局を通して、となります。直接連絡はできません。このため、名刺に記載の連絡先は、事務局あてとなります。また、コーディネーターは非常勤なので、お電話やメールをお送りいただいた場合は、次の出勤日にて対応となります。">' +
      '<div class="slide-content">' +
        '<div class="s-impact-tag">Q6 ― 連絡方法（重要）</div>' +
        '<p class="s-impact-main" style="font-size:3.5cqw;line-height:1.6;">コーディネーターへの<br>直接連絡はできません。<br><span style="font-size:0.75em;color:rgba(255,255,255,.55);">ご用件はすべて事務局を通してご連絡ください。</span></p>' +
        '<p class="s-impact-sub">勤務日以外・土日祝日はメール確認も不可</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 10: Q7&Q8 Wi-Fi + どんな相談でも ── */
  function slide10() {
    return '<section class="slide" data-section="qa" data-title="Q7&Q8. Wi-Fi・相談内容" data-notes="こちらは、ご来訪いただいた際の事項となりますが、会場には、Wi-Fiのご用意があります。ご希望の際はお声がけください。あと、相談内容は何でも大丈夫です。創業・ネット販売・資金繰り・DX、何でも気軽にご相談ください。相談内容がまとまっていない場合でも大丈夫です。現状のお悩みや、今後の目標についてお聞かせいただければ、それに合わせてサポートをいたします。　担当者が専門でない分野の場合でも安心してください。他の専門コーディネイターと連携し、ご支援いたします。">' +
      H('Q7&8 ― Wi-Fi ／ 相談内容') +
      '<div class="slide-content">' +
        '<ul class="s-num-list">' +
          '<li class="s-num-item">' +
            '<span class="s-num">Q7</span>' +
            '<div>' +
              '<div class="s-num-title">Wi-Fi環境</div>' +
              '<div class="s-num-desc">岡山オフィス: <strong>あり</strong> ／ 津山サテライト: <strong>なし</strong>（テザリング等をご準備ください）</div>' +
            '</div>' +
          '</li>' +
          '<li class="s-num-item">' +
            '<span class="s-num">Q8</span>' +
            '<div>' +
              '<div class="s-num-title">どんな相談でも大丈夫</div>' +
              '<div class="s-num-desc">創業・ネット販売・資金繰り・DX・業務改善 — まず話すだけでOKです。</div>' +
            '</div>' +
          '</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 11: Q9 キャンセル ── */
  function slide11() {
    return '<section class="slide" data-section="qa" data-title="Q9. キャンセルについて" data-notes="あと重要なんですが、やむえず、ご予約の変更、キャンセルをされる場合は、できるだけ2日前までに事務局へご連絡ください。無断キャンセルが続く場合は、ご利用をお断りすることがあります。">' +
      H('Q9 ― 予約変更・キャンセル') +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-point-list" style="width:100%;">' +
          '<div class="s-point-row">' +
            '<div class="s-point-badge" style="font-size:1.2cqw;min-width:4cqw;">2日前</div>' +
            '<div class="s-point-content">' +
              '<div class="s-point-title">やむを得ない場合は2日前までに</div>' +
              '<div class="s-point-desc">事務局へ必ずご連絡ください。公民館等への直接連絡は不可。</div>' +
            '</div>' +
          '</div>' +
          '<div class="s-point-row">' +
            '<div class="s-point-badge" style="font-size:1.2cqw;min-width:4cqw;">注意</div>' +
            '<div class="s-point-content">' +
              '<div class="s-point-title">無断キャンセルが続く場合</div>' +
              '<div class="s-point-desc">今後のご利用をお断りすることがあります。</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── 12: セクション 利用規約 ── */
  function slide12() {
    return '<section class="slide slide-section" data-section="rules" data-title="ご利用規約" data-notes="続いて、ご利用規約についてご説明します。">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PART 02</div>' +
        '<h1 class="s-section-title">ご利用規約</h1>' +
        '<p class="s-section-lead">5つのポイント — 大切な内容です</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 13: 規約1 相談対象 ── */
  function slide13() {
    return '<section class="slide" data-section="rules" data-title="規約1. 相談対象" data-notes="まず、相談対象についてです。中小企業・小規模事業者の他、NPO・社団法人・社会福祉法人、創業予定の方も対象です。売上拡大や経営改善など、幅広い経営相談に無料で対応しています。ただし、行政手続きや補助金申請、融資申請など、実務の代行はできません。作り方を一緒に考えることはできますが、代わりに作成することは、できません。">' +
      H('規約 1 ― 相談対象・できないこと') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">対象: 中小企業・小規模事業者・NPO・社団法人・創業予定者</li>' +
          '<li class="s-list-head">アドバイスの位置付け</li>' +
          '<li class="s-list-arrow">最終判断はご自身でお願いします</li>' +
          '<li class="s-list-arrow">必要に応じて外部専門家をご紹介します</li>' +
          '<li class="s-list-head">代行業務はできません</li>' +
          '<li class="s-list-arrow">行政手続き・融資申請・補助金申請の代行</li>' +
          '<li class="s-list-sub">→ 作り方を一緒に考えることは可能</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 14: 規約2 情報の取り扱い ── */
  function slide14() {
    return '<section class="slide" data-section="rules" data-title="規約2. 情報の取り扱い" data-notes="次に、情報の取り扱いです。よろずは経済産業省・中小企業基盤整備機構、そして岡山県産業振興財団が連携して運営している国の事業です。相談内容は関係機関と共有される場合があります。また、サービス向上のためにアンケートのご協力をお願いすることがあるのですが、その際にご登録の企業情報などを利用させていただく場合があります。">' +
      H('規約 2 ― 情報の取り扱い') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">国の事業（経済産業省・中小企業基盤整備機構・岡山県産業振興財団 連携）</li>' +
          '<li class="s-list-head">相談内容の共有について</li>' +
          '<li class="s-list-arrow">事業運営・改善・分析のため関係機関と共有される場合があります</li>' +
          '<li class="s-list-arrow">全国のよろず支援拠点間でも共有されることがあります</li>' +
          '<li class="s-list-head">アンケートについて</li>' +
          '<li class="s-list-arrow">サービス向上のためアンケートをお願いすることがあります</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 15: 規約3&4 責任範囲・お断り ── */
  function slide15() {
    return '<section class="slide" data-section="rules" data-title="規約3&4. 責任範囲・お断りする場合" data-notes="アドバイスに関する責任範囲についてです。アドバイスの完全性は保証できません。実行結果や行動にともなう万が一のトラブルや損害についても、よろず支援拠点、およびコーディネイターは責任を負いかねます。最終判断は必ずご自身でお願いいたします。また、威圧的な言動や暴力的行為、業務を妨げる行為、勧誘および営業行為などがあった場合には、その場で相談を中止し、以後のご利用をお断りすることがあります。また反社会的勢力に関わる方はご利用いただけません。ご相談いただく際には、その点について問題がないことを前提としてお申し込みいただく形になります。そのほか、他の企業の代理での相談、コンサルタントや士業の方が、ご自身の専門分野のノウハウ取得を、目的とした相談などは、お受けしていません。">' +
      H('規約 3&4 ― 責任範囲・お断りする場合') +
      '<div class="slide-content">' +
        '<ul class="s-num-list">' +
          '<li class="s-num-item">' +
            '<span class="s-num">3</span>' +
            '<div>' +
              '<div class="s-num-title">アドバイスの免責</div>' +
              '<div class="s-num-desc">完全性・有用性の保証はできません。実行結果のトラブルについて拠点は責任を負いかねます。最終判断はご自身で。</div>' +
            '</div>' +
          '</li>' +
          '<li class="s-num-item">' +
            '<span class="s-num">4</span>' +
            '<div>' +
              '<div class="s-num-title">ご利用をお断りする場合</div>' +
              '<div class="s-num-desc">威圧的言動・勧誘・反社会的勢力・代理相談・ノウハウ目的・無断キャンセル多数</div>' +
            '</div>' +
          '</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* ── 16: 規約5 トレーニー（内容少→大きく） ── */
  function slide16() {
    return '<section class="slide slide-quote" data-section="rules" data-title="規約5. トレーニーの同席" data-notes="はい、最後です。よろず支援拠点では、金融機関や支援機関の方の研修制度があり、事前のご案内なく研修のためにトレーニーが同席する場合があります。同席者がいる場合は冒頭でご紹介させていただきます。ご了承ください。">' +
      '<div class="slide-content slide-content-center">' +
        '<blockquote class="s-quote" style="font-size:2.8cqw;line-height:1.8;">' +
          '<span class="s-quote-mark" style="font-size:5cqw;padding-left:0;text-align:center;">"</span>' +
          '規約 5 ― 補足<br>' +
          '<span style="font-size:0.85em;font-weight:400;">研修制度により、事前案内なく<br>トレーニーが同席する場合があります。</span>' +
        '</blockquote>' +
      '</div>' +
    '</section>';
  }

  /* ── 17: エンディング ── */
  function slide17() {
    return '<section class="slide slide-ending" data-section="ending" data-title="では、はじめましょう" data-notes="以上がご案内の内容になります。ご質問はありますか？　大丈夫そうですか。では、今日のご相談に進んでまいります。まずは、御社の事業内容ですとか、主力商品、主なお客様（ターゲットなど）、販売やサービス提供方法、現在の課題などをうかがってまいります。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-ending-bar"></div>' +
        '<p class="s-ending-main">ご案内は以上です。<br>では、はじめましょう。</p>' +
        '<p class="s-ending-sub">ご不明な点はいつでもお聞きください</p>' +
        '<div class="s-ending-bar"></div>' +
      '</div>' +
    '</section>';
  }

  /* ── 18: ヒアリング ── */
  function slide18() {
    return '<section class="slide slide-metric" data-section="hr" data-title="事業内容" data-notes="順にうかがってまいります。まずは事業内容について、お聞かせください。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">教えてください</p>' +
        '<p class="s-metric-unit">＜事業内容について＞</p>' +
        '<p class="s-metric-unit">正式社名 / 設立年月日 / 事業内容 / 従業員数</p>' +
        '<p class="s-metric-desc" style="margin-top:1.5cqw;font-size:1.8cqw;color:rgba(255,255,255,.7);">※ ご相談者様が代表でない場合、部署名とお名前をお聞かせください。</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 19: ヒアリング ── */
  function slide19() {
    return '<section class="slide slide-metric" data-section="hr" data-title="主力商品" data-notes="つづきまして、御社の主力商品と販路について、お聞かせください。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">教えてください</p>' +
        '<p class="s-metric-unit">＜主力商品と販路について＞</p>' +
        '<p class="s-metric-unit">主力商品 / 主なお客様 / 販売・サービス提供エリア / 年商</p>' +
        '<p class="s-metric-desc" style="margin-top:1.5cqw;font-size:1.8cqw;color:rgba(255,255,255,.7);">※ 現在の主力商品およびサービスについてお聞かせください。</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 20: ヒアリング ── */
  function slide20() {
    return '<section class="slide slide-metric" data-section="hr" data-title="主力商品" data-notes="最後です。現在の課題について、お聞かせください。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">教えてください</p>' +
        '<p class="s-metric-unit">＜現在の課題について＞</p>' +
        '<p class="s-metric-unit">現在の課題 / その背景情報 / 解決して得たいもの</p>' +
        '<p class="s-metric-desc" style="margin-top:1.5cqw;font-size:1.8cqw;color:rgba(255,255,255,.7);">※ 現在の主力商品およびサービスについてお聞かせください。</p>' +
      '</div>' +
    '</section>';
  }

  /* ── 21: ヒアリング ── */
  function slide20() {
    return '<section class="slide slide-metric" data-section="hr" data-title="主力商品" data-notes="最後です。現在の課題について、お聞かせください。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">教えてください</p>' +
        '<p class="s-metric-unit">＜現在の課題について＞</p>' +
        '<p class="s-metric-unit">現在の課題 / その背景情報 / 解決して得たいもの</p>' +
        '<p class="s-metric-desc" style="margin-top:1.5cqw;font-size:1.8cqw;color:rgba(255,255,255,.7);">※ 現在の主力商品およびサービスについてお聞かせください。</p>' +
      '</div>' +
    '</section>';
  }



  /* ===================== REGISTER ===================== */

  window.slideFactories = [
    slide01, slide02, slide03,
    slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11,
    slide12, slide13, slide14, slide15, slide16,
    slide17,
    slide18, slide19, slide20, 
  ];

})();
