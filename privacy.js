/* ============================================================
   privacy.js  —  Bangkok Privacy-preserved Mobility Explorer
   ============================================================ */

// ══════════════════════════════════════════════════════════════
// i18n — EN / TH
// Technical/proper-noun terms (k-anonymity, l-diversity, H3, S2,
// Voronoi, CPC, PageRank, Gini, Wasserstein/WS) are kept in Latin
// script even in the Thai UI, matching normal practice for
// untranslated technical jargon.
// ══════════════════════════════════════════════════════════════
var I18N = {
  en: {
    welcome_subtitle: "Bangkok Mobility Explorer",
    welcome_title: "Welcome",
    welcome_body: "Explore how spatial aggregation and privacy-preserving methods " +
      "(k-anonymity, l-diversity) trade off against data utility, using " +
      "real taxi origin-destination trips from Bangkok.<br><br>" +
      "Use the sidebar to choose an aggregation method, a privacy " +
      "method and retention target, and compare results in the " +
      "Decision Support tab.",
    welcome_btn: "Get Started",

    nav_about: "About Us",
    nav_help: "Help",

    tab_explorer: "Explorer",
    tab_decision: "Decision Support",

    h_data_viz: "Data Visualization",
    view_origin: "Origin",
    view_destination: "Destination",
    view_demand: "Travel Demand",
    view_flow: "OD Flow",

    h_od_flow_settings: "OD Flow Settings",
    lbl_min_trips: "Min trips",
    lbl_hour: "Hour",
    lbl_all: "All",

    h_aggregation_method: "Aggregation Method and Resolution",
    optgroup_h3: "H3 Hexagon",
    opt_h3_6: "H3 — Resolution 6",
    opt_h3_7: "H3 — Resolution 7",
    opt_h3_8: "H3 — Resolution 8",
    optgroup_s2: "S2 Square",
    opt_s2_11: "S2 — Level 11",
    opt_s2_12: "S2 — Level 12",
    opt_s2_13: "S2 — Level 13",
    optgroup_triangle: "Triangle",
    opt_tri_10: "Triangle — Resolution 10",
    opt_tri_11: "Triangle — Resolution 11",
    opt_tri_12: "Triangle — Resolution 12",
    optgroup_admin: "Administrative",
    opt_admin_2: "Admin — Level 2 (District)",
    opt_admin_3: "Admin — Level 3 (Sub-district)",
    optgroup_voronoi: "Voronoi (K-means)",
    opt_vor_100: "Voronoi — K-means k=100",
    opt_vor_200: "Voronoi — K-means k=200",

    h_privacy_method: "Privacy-preserving Method",
    txt_preserves: "preserves",
    txt_of_data: "of data",

    h_utility_score: "Utility Score",
    txt_showing: "Showing:",

    h_decision_support: "Decision Support",
    txt_decision_intro: "Every aggregation method × resolution × retention × " +
      "privacy-method combination, ranked by combined utility loss. " +
      "Click a row in the results panel to load that configuration on the map.",
    h_retention_filter: "Retention Target Filter",
    lbl_all_retention: "All retention targets",
    h_metrics_combined: "Filter by Metric",
    txt_0_means: "0 means well-preserved, close to the original data.",
    txt_1_means: "1 means completely distorted.",
    metric_gini: "Gini Change",
    metric_cpc: "CPC Loss",
    metric_origin_vpl: "Origin VPL (WS)",
    metric_trip_distance: "Trip Distance (WS)",
    metric_pagerank: "PageRank (WS)",
    txt_combined_loss_desc: "Each slider sets the maximum allowed value for that metric " +
      "(1.00 = no filter). A combination is shown as feasible only if it " +
      "stays within every slider you've lowered.",

    txt_decision_results: "Decision Support Results",
    col_aggregation: "Aggregation",
    col_resolution: "Resolution",
    col_privacy: "Privacy",
    col_retention: "Retention",

    txt_travel_demand: "Travel Demand (O − D)",
    txt_attraction: "Attraction",
    txt_generation: "Generation",

    txt_temporal_view: "Temporal View",
    txt_trip_volume: "Trip Volume by Hour & Day",
    tp_raw: "Raw",
    tp_suppressed: "Anonymized",
    tp_diff: "Difference",
    day_mon: "Mon", day_tue: "Tue", day_wed: "Wed", day_thu: "Thu",
    day_fri: "Fri", day_sat: "Sat", day_sun: "Sun",
    txt_high: "High",

    // ── Modal pop-ups ──────────────────────────────────────────
    tess_title: "Aggregation Method and Resolution",
    tess_intro: "Spatial aggregation groups individual trip points into discrete " +
      "cells, replacing exact coordinates with the cell that contains " +
      "them. This interface compares five methods:",
    tess_li_h3: '<b style="color:#3ddc84;">H3</b> — hexagonal grid, by Uber',
    tess_li_s2: '<b style="color:#3ddc84;">S2</b> — square grid, by Google',
    tess_li_tri: '<b style="color:#3ddc84;">FULLER4T</b> — triangular grid, from DGGRID',
    tess_li_admin: '<b style="color:#3ddc84;">Administrative boundaries</b> — official district and sub-district units',
    tess_li_vor: '<b style="color:#3ddc84;">Voronoi</b> — data-adaptive cells generated from trip-origin clusters',
    tess_outro: "The first three are uniform grids with regular, evenly sized " +
      "cells, while the last two are non-uniform, with cell sizes that " +
      "follow administrative divisions or trip density. Resolution " +
      "controls cell size; coarser resolutions use fewer, larger cells, " +
      "while finer resolutions use more, smaller cells, capturing " +
      "greater spatial detail.",

    privacy_title: "Privacy-preserving Method",
    privacy_p_kanon: '<b style="color:#3ddc84;">k-anonymity</b><br>' +
      'A cell passes threshold <i>k</i> if it has at least <i>k</i> incoming ' +
      'trips AND at least <i>k</i> outgoing trips. A trip is retained only ' +
      'if BOTH its origin and destination cell pass. <i>k</i> is chosen ' +
      'automatically as the largest value that still keeps your selected ' +
      '% of trips.',
    privacy_p_ldiv: '<b style="color:#3ddc84;">l-diversity</b><br>' +
      'A cell passes threshold <i>l</i> if it sends trips to/receives trips ' +
      'from at least <i>l</i> distinct other cells (origin diversity AND ' +
      'destination diversity). Same trip-retention rule as k-anonymity, but ' +
      'protects against a cell having all its traffic concentrated on a ' +
      'single other cell.',

    utility_title: "Utility Score",
    utility_intro: "The utility score measures how well the aggregated data " +
      "preserves the original mobility patterns after privacy " +
      "enforcement. It is derived from five metrics, each capturing a " +
      "different property:",
    utility_li_cpc: '<b style="color:#3ddc84;">CPC</b> — similarity of overall trip flows',
    utility_li_gini: '<b style="color:#3ddc84;">Gini coefficient</b> — evenness of trip distribution across cells',
    utility_li_vpl: '<b style="color:#3ddc84;">Visits per Location</b> — per-cell trip counts',
    utility_li_dist: '<b style="color:#3ddc84;">Trip Distance</b> — distribution of trip lengths',
    utility_li_pr: '<b style="color:#3ddc84;">PageRank</b> — network importance of each cell',
    utility_outro: "Each metric is compared between the raw and privacy-preserved " +
      "data, using the Wasserstein distance for the distribution-based " +
      "metrics, and converted to a common [0,1] scale. A lower score " +
      "indicates that the original patterns are better preserved, " +
      "while a higher score indicates greater distortion.",

    about_p1: "This interactive interface was developed as part of a Master's " +
      'thesis in the Cartography M.Sc. program, titled ' +
      '<b style="color:#3ddc84;">"The Privacy-Utility Trade-off in Spatial ' +
      'Aggregation: An Evaluation Framework for Origin-Destination Flow ' +
      'Visualization."</b> ' +
      'The work investigates how different spatial aggregation methods ' +
      'and resolutions affect data utility once privacy-preserving ' +
      'mechanisms — k-anonymity and l-diversity — are applied, using ' +
      'taxi trajectory data from the Bangkok Metropolitan Area as a case ' +
      'study. The interface is designed to help urban planners, ' +
      'decision-makers, and researchers explore aggregated OD flow ' +
      'patterns and make informed choices about the level of ' +
      'aggregation needed to protect individual privacy while ' +
      'preserving sufficient analytical value.',
    about_p2: "Developed by Suphaphong Sirinapaphan, under the supervision of " +
      "Anna Elke Brauer (TU Dresden).",
    about_p3: 'For questions or feedback, please contact ' +
      '<a href="mailto:suphaphong.si@gmail.com" style="color:#3ddc84;">suphaphong.si@gmail.com</a>.',

    help_intro: "A quick guide to exploring privacy-preserved trip data on the map.",
    help_step1: '<b style="color:#3ddc84;">Data Visualization</b> — pick how trips ' +
      'are shown on the map: Origin, Destination, Travel Demand, or OD Flow.',
    help_step2: '<b style="color:#3ddc84;">Aggregation Method and Resolution</b> — ' +
      'choose the spatial grid (H3, S2, Triangle, Administrative, or ' +
      'Voronoi) and how coarse or fine its cells are.',
    help_step3: '<b style="color:#3ddc84;">Privacy-preserving Method</b> — choose ' +
      'k-anonymity or l-diversity, and set the % of trips you want to retain.',
    help_step4: '<b style="color:#3ddc84;">Utility Score</b> — see how much the ' +
      'privacy-preserving step distorted the data; click the expand icon ' +
      'for a larger view comparing k-anonymity and l-diversity.',
    help_step5: '<b style="color:#3ddc84;">Decision Support tab</b> — compare every ' +
      'combination of method, resolution, and retention, ' +
      'then click a row to load that setup on the map.',
    help_step6: '<b style="color:#3ddc84;">Temporal View</b> — open the panel at ' +
      'the bottom of the map to see trip volume by hour and day of week.',
  },
  th: {
    welcome_subtitle: "แอปสำรวจการเดินทางกรุงเทพฯ",
    welcome_title: "ยินดีต้อนรับ",
    welcome_body: "สำรวจการแลกเปลี่ยนระหว่างวิธีการรวมกลุ่มเชิงพื้นที่และวิธีการรักษาความเป็นส่วนตัว " +
      "(k-anonymity, l-diversity) กับอรรถประโยชน์ของข้อมูล โดยใช้ข้อมูลการเดินทาง " +
      "แท็กซี่จริงในกรุงเทพมหานคร<br><br>" +
      "ใช้แถบด้านข้างเพื่อเลือกวิธีการรวมกลุ่มเชิงพื้นที่ วิธีการรักษาความเป็นส่วนตัว " +
      "และเป้าหมายการคงข้อมูล แล้วเปรียบเทียบผลลัพธ์ในแท็บสนับสนุนการตัดสินใจ",
    welcome_btn: "เริ่มต้นใช้งาน",

    nav_about: "เกี่ยวกับเรา",
    nav_help: "ช่วยเหลือ",

    tab_explorer: "สำรวจ",
    tab_decision: "สนับสนุนการตัดสินใจ",

    h_data_viz: "การแสดงข้อมูล",
    view_origin: "ต้นทาง",
    view_destination: "ปลายทาง",
    view_demand: "ความต้องการเดินทาง",
    view_flow: "การไหลเวียนการเดินทาง",

    h_od_flow_settings: "การตั้งค่าการไหลเวียน",
    lbl_min_trips: "จำนวนเที่ยวขั้นต่ำ",
    lbl_hour: "ชั่วโมง",
    lbl_all: "ทั้งหมด",

    h_aggregation_method: "วิธีการรวมกลุ่มเชิงพื้นที่และระดับความละเอียด",
    optgroup_h3: "H3 หกเหลี่ยม",
    opt_h3_6: "H3 — ระดับ 6",
    opt_h3_7: "H3 — ระดับ 7",
    opt_h3_8: "H3 — ระดับ 8",
    optgroup_s2: "S2 สี่เหลี่ยม",
    opt_s2_11: "S2 — ระดับ 11",
    opt_s2_12: "S2 — ระดับ 12",
    opt_s2_13: "S2 — ระดับ 13",
    optgroup_triangle: "สามเหลี่ยม",
    opt_tri_10: "สามเหลี่ยม — ระดับ 10",
    opt_tri_11: "สามเหลี่ยม — ระดับ 11",
    opt_tri_12: "สามเหลี่ยม — ระดับ 12",
    optgroup_admin: "เขตการปกครอง",
    opt_admin_2: "เขตการปกครอง — ระดับ 2 (อำเภอ)",
    opt_admin_3: "เขตการปกครอง — ระดับ 3 (ตำบล)",
    optgroup_voronoi: "Voronoi (K-means)",
    opt_vor_100: "Voronoi — K-means k=100",
    opt_vor_200: "Voronoi — K-means k=200",

    h_privacy_method: "วิธีการรักษาความเป็นส่วนตัว",
    txt_preserves: "คงไว้",
    txt_of_data: "ของข้อมูล",

    h_utility_score: "ค่าความสูญเสียอรรถประโยชน์",
    txt_showing: "กำลังแสดง:",

    h_decision_support: "สนับสนุนการตัดสินใจ",
    txt_decision_intro: "ทุกการรวมกันของวิธีการรวมกลุ่มเชิงพื้นที่ × ระดับความละเอียด × " +
      "การคงข้อมูล × วิธีการรักษาความเป็นส่วนตัว จัดอันดับตามค่าความสูญเสียอรรถประโยชน์รวม " +
      "คลิกแถวในผลลัพธ์เพื่อโหลดค่าตั้งค่านั้นบนแผนที่",
    h_retention_filter: "ตัวกรองเป้าหมายการคงข้อมูล",
    lbl_all_retention: "เป้าหมายการคงข้อมูลทั้งหมด",
    h_metrics_combined: "กรองตามตัวชี้วัด",
    txt_0_means: "0 หมายถึงรักษาข้อมูลไว้ได้ดี ใกล้เคียงข้อมูลต้นฉบับ",
    txt_1_means: "1 หมายถึงข้อมูลถูกบิดเบือนอย่างสมบูรณ์",
    metric_gini: "Gini Coefficient Change",
    metric_cpc: "CPC",
    metric_origin_vpl: "Visits per Location (WS)",
    metric_trip_distance: "Trip Distance (WS)",
    metric_pagerank: "PageRank (WS)",
    txt_combined_loss_desc: "แต่ละแถบเลื่อนกำหนดค่าสูงสุดที่ยอมรับได้สำหรับตัวชี้วัดนั้น " +
      "(1.00 = ไม่กรอง) การรวมกันจะแสดงว่าเป็นไปได้ก็ต่อเมื่ออยู่ในเกณฑ์ของทุกแถบเลื่อนที่คุณปรับลดลง",

    txt_decision_results: "ผลลัพธ์การสนับสนุนการตัดสินใจ",
    col_aggregation: "การรวมกลุ่ม",
    col_resolution: "ระดับความละเอียด",
    col_privacy: "ความเป็นส่วนตัว",
    col_retention: "การคงข้อมูล",

    txt_travel_demand: "ความต้องการเดินทาง (O − D)",
    txt_attraction: "การดึงดูด",
    txt_generation: "การสร้าง",

    txt_temporal_view: "มุมมองเชิงเวลา",
    txt_trip_volume: "ปริมาณการเดินทางตามชั่วโมงและวัน",
    tp_raw: "ข้อมูลต้น",
    tp_suppressed: "ข้อมูลที่ถูกรักษาความเป็นส่วนตัว",
    tp_diff: "ผลต่างของข้อมูล",
    day_mon: "จ.", day_tue: "อ.", day_wed: "พ.", day_thu: "พฤ.",
    day_fri: "ศ.", day_sat: "ส.", day_sun: "อา.",
    txt_high: "สูง",

    // ── Modal pop-ups ──────────────────────────────────────────
    tess_title: "วิธีการรวมกลุ่มเชิงพื้นที่และระดับความละเอียด",
    tess_intro: "การรวมกลุ่มเชิงพื้นที่คือการจัดกลุ่มจุดการเดินทางแต่ละจุดเข้าเป็นหน่วย " +
      "พื้นที่ โดยแทนที่พิกัดที่แน่นอนด้วยหน่วยที่ครอบคลุมจุดนั้น " +
      "หน้าจอควบคุมนี้เปรียบเทียบวิธีการทั้งห้า:",
    tess_li_h3: '<b style="color:#3ddc84;">H3</b> — กริดหกเหลี่ยม โดย Uber',
    tess_li_s2: '<b style="color:#3ddc84;">S2</b> — กริดสี่เหลี่ยม โดย Google',
    tess_li_tri: '<b style="color:#3ddc84;">FULLER4T</b> — กริดสามเหลี่ยม จาก DGGRID',
    tess_li_admin: '<b style="color:#3ddc84;">เขตการปกครอง</b> — หน่วยเขต/อำเภอ และ แขวง/ตำบล',
    tess_li_vor: '<b style="color:#3ddc84;">Voronoi</b> — เซลล์ที่ปรับตามข้อมูล สร้างจากกลุ่มจุดต้นทางการเดินทาง',
    tess_outro: "สามวิธีแรกเป็นกริดสม่ำเสมอที่มีเซลล์ขนาดเท่ากัน ในขณะที่สองวิธีหลัง " +
      "ไม่สม่ำเสมอ โดยขนาดเซลล์ขึ้นอยู่กับเขตการปกครองหรือความหนาแน่นของการเดินทาง " +
      "ระดับความละเอียดควบคุมขนาดเซลล์ ระดับหยาบมีหน่วยพื้นที่น้อยกว่าแต่ขนาดใหญ่กว่า " +
      "ส่วนระดับละเอียดมีหน่วยพื้นที่มากกว่าแต่ขนาดเล็กกว่า แสดงรายละเอียดเชิงพื้นที่ได้ชัดเจนกว่า",

    privacy_title: "วิธีการรักษาความเป็นส่วนตัว",
    privacy_p_kanon: '<b style="color:#3ddc84;">k-anonymity</b><br>' +
      'หน่วยพื้นที่จะผ่านเกณฑ์ <i>k</i> หากมีเที่ยวเข้าอย่างน้อย <i>k</i> เที่ยว ' +
      'และเที่ยวออกอย่างน้อย <i>k</i> เที่ยว การเดินทางจะถูกเก็บไว้ก็ต่อเมื่อ ' +
      'ทั้งเซลล์ต้นทางและปลายทางผ่านเกณฑ์ <i>k</i> ถูกเลือกให้เป็น ' +
      'ค่าที่มากที่สุดเพื่อที่จะคงรักษา % ของข้อมูลที่คุณเลือกไว้',
    privacy_p_ldiv: '<b style="color:#3ddc84;">l-diversity</b><br>' +
      'หน่วยพื้นที่จะผ่านเกณฑ์ <i>l</i> หากส่ง/รับเที่ยวจากเซลล์อื่นที่แตกต่างกัน ' +
      'อย่างน้อย <i>l</i> หน่วย (ทั้งความหลากหลายของต้นทางและปลายทาง) ' +
      'ใช้กฎการคงข้อมูลเดียวกับ k-anonymity แต่ป้องกันกรณีที่หน่วยหนึ่งมีการจราจร ' +
      'กระจุกตัวอยู่ที่หน่วยอื่นเพียงหน่วยเดียว',

    utility_title: "การสูญเสียอรรถประโยชน์",
    utility_intro: "การสูญเสียอรรถประโยชน์วัดว่าข้อมูลที่รวมกลุ่มแล้วรักษารูปแบบการเดินทาง " +
      "เดิมไว้ได้ดีเพียงใด หลังจากประยุกต์ใช้การรักษาความเป็นส่วนตัว " +
      "คำนวณจากตัวชี้วัด 5 ตัว แต่ละตัวมีคุณสมบัติที่แตกต่างกัน:",
    utility_li_cpc: '<b style="color:#3ddc84;">CPC</b> — ความคล้ายคลึงของการไหลเวียนการเดินทางโดยรวม',
    utility_li_gini: '<b style="color:#3ddc84;">Gini Coefficient</b> — ความสม่ำเสมอของการกระจายการเดินทางในแต่ละหน่วย',
    utility_li_vpl: '<b style="color:#3ddc84;">Visits per Location</b> — การกระจายจำนวนเที่ยวต่อหน่วย',
    utility_li_dist: '<b style="color:#3ddc84;">Trip Distance</b> — การกระจายของระยะทางการเดินทาง',
    utility_li_pr: '<b style="color:#3ddc84;">PageRank</b> — ความสำคัญเชิงเครือข่ายของแต่ละหน่วย',
    utility_outro: "ตัวชี้วัดแต่ละตัวเปรียบเทียบระหว่างข้อมูลดิบและข้อมูลที่รักษาความเป็นส่วนตัว " +
      "โดยใช้ Wasserstein Distance สำหรับตัวชี้วัดเชิงการกระจาย " +
      "และแปลงเป็นสเกล [0,1] คะแนนต่ำหมายถึงรูปแบบเดิมถูกรักษาไว้ได้ดีกว่า" +
      "ส่วนคะแนนสูงหมายถึงการบิดเบือนมากกว่า",

    about_p1: "เว็บไซต์นี้เป็นส่วนหนึ่งของวิทยานิพนธ์ปริญญาโท " +
      'ในหลักสูตร Cartography M.Sc. ' +
      '<b style="color:#3ddc84;">"The Privacy-Utility Trade-off in Spatial ' +
      'Aggregation: An Evaluation Framework for Origin-Destination Flow ' +
      'Visualization."</b> ' +
      'งานวิจัยนี้ศึกษาเกี่ยวกับวิธีการและระดับความละเอียดของการรวมกลุ่มเชิงพื้นที่ที่แตกต่างกัน ' +
      'ส่งผลต่อการสูญเสียอรรถประโยชน์ของข้อมูลอย่างไร หลังจากประยุกต์ใช้กลไกรักษาความเป็นส่วนตัว ' +
      '— k-anonymity และ l-diversity — โดยใช้ข้อมูลเส้นทางแท็กซี่จากกรุงเทพมหานคร ' +
      'เป็นกรณีศึกษา เว็บไซต์นี้ออกแบบมาเพื่อช่วยนักผังเมือง ผู้กำหนดนโยบาย ' +
      'และนักวิจัยเพื่อใช้ในการสำรวจรูปแบบการไหลเวียน OD ที่รวมกลุ่มแล้ว และตัดสินใจ ' +
      'เกี่ยวกับระดับการรวมกลุ่มที่จำเป็นต่อปกป้องความเป็นส่วนตัวส่วนบุคคล ' +
      'และยังคงคุณค่าของข้อมูลที่เหมาะสม',
    about_p2: "พัฒนาโดย ศุภพงศ์ ศิรินภาพันธ์ โดยมี " +
      "Anna Elke Brauer (TU Dresden) เป็นอาจารย์ที่ปรึกษา",
    about_p3: 'หากมีคำถามหรือข้อเสนอแนะ กรุณาติดต่อ ' +
      '<a href="mailto:suphaphong.si@gmail.com" style="color:#3ddc84;">suphaphong.si@gmail.com</a>',

    help_intro: "คู่มือการใช้งานเว็บไซต์สำรวจข้อมูลการเดินทางที่รักษาความเป็นส่วนตัว",
    help_step1: '<b style="color:#3ddc84;">การแสดงข้อมูล</b> — เลือกวิธีแสดงข้อมูลบนแผนที่: ' +
      'ต้นทาง ปลายทาง ความต้องการเดินทาง หรือการไหลเวียน OD',
    help_step2: '<b style="color:#3ddc84;">วิธีการรวมกลุ่มเชิงพื้นที่และระดับความละเอียด</b> — ' +
      'เลือกกริดเชิงพื้นที่ (H3, S2, สามเหลี่ยม, เขตการปกครอง หรือ Voronoi) ' +
      'และความหยาบ-ละเอียดของหน่วยพื้นที่',
    help_step3: '<b style="color:#3ddc84;">วิธีการรักษาความเป็นส่วนตัว</b> — เลือก ' +
      'k-anonymity หรือ l-diversity และตั้งค่า % ของข้อมูลที่ต้องการคงไว้',
    help_step4: '<b style="color:#3ddc84;">การสูญเสียอรรถประโยชน์</b> — ดูว่าขั้นตอนการรักษาความเป็นส่วนตัว ' +
      'บิดเบือนข้อมูลไปมากน้อยเพียงใด คลิกไอคอนขยายเพื่อเปรียบเทียบผลลัพธ์ของ ' +
      'k-anonymity และ l-diversity',
    help_step5: '<b style="color:#3ddc84;">ปุ่มสนับสนุนการตัดสินใจ</b> — เปรียบเทียบทุกกลุ่มผสมผสาน ' +
      'ระหว่างวิธีการ ระดับความละเอียด และการคงข้อมูล ' +
      'จากนั้นคลิกแถวเพื่อโหลดค่าลงบนแผนที่',
    help_step6: '<b style="color:#3ddc84;">มุมมองเชิงเวลา</b> — เปิดแผงซ่อนด้านล่างแผนที่ ' +
      'เพื่อดูปริมาณการเดินทางรายชั่วโมงและวันในสัปดาห์',
  },
};

var currentLang = 'en';

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  var dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var text = dict[key];
    if (text === undefined) return;
    if (el.tagName === 'OPTGROUP') {
      el.label = text;
    } else {
      el.textContent = text;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    var html = dict[key];
    if (html === undefined) return;
    el.innerHTML = html;
  });

  var langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = lang;
}

// ── Modal helpers ────────────────────────────────────────────
function openModal(id)  { document.getElementById(id).classList.add('open');    }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// ── Leaflet map ──────────────────────────────────────────────
// Thailand's approximate extent, used to cap how far the user can pan
// and zoom out -- the map should never show the world beyond Thailand.
var THAILAND_BOUNDS = L.latLngBounds([5.6, 97.3], [20.6, 105.7]);

// Centroid of the study area (admin_lv2 boundary, Samut Sakhon excluded),
// shifted west of the true centroid so the map appears centered in the
// portion of the viewport actually visible next to the floating sidebar
// (sidebar covers the west edge of #map-privacy).
var map = L.map('map-privacy', {
  center: [13.78, 100.5], zoom: 11, zoomControl: true,
  maxBounds: THAILAND_BOUNDS.pad(0.05),
  maxBoundsViscosity: 1.0,
});
L.control.zoom({ position: 'bottomright' }).addTo(map);
// CARTO's free anonymous raster basemaps (dark_all) now return a
// watermarked "API KEY REQUIRED" placeholder instead of real tiles --
// switched to Esri's Dark Gray Canvas, which is still free without an
// API key. Two layers, like CARTO's: a base layer (no labels) plus a
// reference layer (labels/roads only) drawn on top.
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
  maxZoom: 16,
}).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 16,
}).addTo(map);

// Largest zoom-out level that still fits the whole Thailand extent in
// the current map container -- prevents zooming out past the country.
// invalidateSize() is required first: Leaflet caches the container size
// at construction time and won't have measured it correctly yet.
map.invalidateSize();
map.setMinZoom(map.getBoundsZoom(THAILAND_BOUNDS, false));

// ── State ────────────────────────────────────────────────────
var state = {
  view:       'origin',
  tess:       'S2_12',
  tessType:   'S2',
  method:     'kanon',
  retention:  '80',
  threshold:  5,
  flowMin:    3,
  selectedCell: null,   // OD Flow: cell id whose incoming/outgoing flows are isolated
};

// ── OD sample data ───────────────────────────────────────────
// Loaded from oddata-result/od_sample.js
var C = { olat:0, olon:1, dlat:2, dlon:3, dist:4, dur:5, hour:6, dow:7 };
var odTrips = (window.OD_SAMPLE && window.OD_SAMPLE.rows) ?
              window.OD_SAMPLE.rows : [];

// Results of spatial join (populated after tessellation loads)
var cellStats     = {};   // cell_id → {incoming, outgoing, distOrigins, distDests}
var odMatrix      = {};   // originId → {destId → count}
var cellCentroids = {};   // cell_id → [lng, lat]
var maxIncoming   = 1;
var maxOutgoing   = 1;
var maxAbsNet     = 1;   // max |outgoing - incoming| across cells, for Travel Demand view
var joinDone      = false;

// Per-trip survival values (for retention-based threshold calculation)
var survivalK = [];   // k-anonymity survival per matched trip
var survivalL = [];   // l-diversity survival per matched trip

// Active Leaflet layer (choropleth or outline)
var tessLayer       = null;
var flowBgLayer     = null;
var loadedGeoJSON   = null;   // raw GeoJSON of current tessellation
var loadedTessKey   = null;

// ── Tessellation type extractor ──────────────────────────────
function getTessType(tessKey) {
  if (tessKey.startsWith('H3'))    return 'H3';
  if (tessKey.startsWith('S2'))    return 'S2';
  if (tessKey.startsWith('TRI'))   return 'Triangle';
  if (tessKey.startsWith('ADMIN')) return 'Admin';
  if (tessKey.startsWith('VOR'))   return 'Voronoi';
  return 'Admin';
}

// ── Color palette (used only for utility chart / legend) ─────
var PALETTE = {
  H3:       ['#251900','#5f4000','#a26f00','#faab00','#fccc66'],
  S2:       ['#262600','#606000','#a5a500','#feff00','#feff66'],
  Triangle: ['#112500','#2d5f00','#4da300','#77fb00','#adfc66'],
  Admin:    ['#001326','#003060','#0052a5','#007fff','#66b2ff'],
  Voronoi:  ['#240026','#5c0060','#9e00a5','#f400ff','#f866ff'],
};

// ── Single base color per tessellation type (used on the map) ─
var BASE_COLOR = {
  H3:       '#faab00',
  S2:       '#feff00',
  Triangle: '#77fb00',
  Admin:    '#007fff',
  Voronoi:  '#f400ff',
};

var TESS_ENTRIES = [
  { key:'H3_6',       type:'H3',       label:'H3 Res 6',        shade:2 },
  { key:'H3_7',       type:'H3',       label:'H3 Res 7',        shade:3 },
  { key:'H3_8',       type:'H3',       label:'H3 Res 8',        shade:4 },
  { key:'S2_11',      type:'S2',       label:'S2 Level 11',     shade:2 },
  { key:'S2_12',      type:'S2',       label:'S2 Level 12',     shade:3 },
  { key:'S2_13',      type:'S2',       label:'S2 Level 13',     shade:4 },
  { key:'TRI_10',     type:'Triangle', label:'Triangle Res 10', shade:2 },
  { key:'TRI_11',     type:'Triangle', label:'Triangle Res 11', shade:3 },
  { key:'TRI_12',     type:'Triangle', label:'Triangle Res 12', shade:4 },
  { key:'ADMIN_LV2',  type:'Admin',    label:'Admin Level 2',   shade:2 },
  { key:'ADMIN_LV3',  type:'Admin',    label:'Admin Level 3',   shade:3 },
  { key:'VOR_K100',   type:'Voronoi',  label:'Voronoi k=100',   shade:2 },
  { key:'VOR_K200',   type:'Voronoi',  label:'Voronoi k=200',   shade:3 },
];

function getColor(entry) { return PALETTE[entry.type][entry.shade]; }

// Real utility metrics from utility_results_wasserstein.csv, nested by
// privacy method -> retention target ("90"/"85"/"80") -> tessellation
// key -> 5 values [Gini Change, CPC Loss, WS VPL-Origin, WS Distance,
// WS PageRank].
var UTILITY_SCORES = {
  kanon: {
    "90": {
      H3_6:[0.066,0.05,0.008,0.022,0.021],
      H3_7:[0.074,0.052,0.008,0.011,0.011],
      H3_8:[0.077,0.051,0.002,0.004,0.002],
      S2_11:[0.071,0.052,0.009,0.015,0.018],
      S2_12:[0.073,0.052,0.008,0.007,0.012],
      S2_13:[0.077,0.052,0.003,0.004,0.004],
      TRI_10:[0.068,0.051,0.008,0.013,0.02],
      TRI_11:[0.074,0.052,0.008,0.006,0.011],
      TRI_12:[0.076,0.051,0.003,0.004,0.004],
      ADMIN_LV2:[0.203,0.052,0.027,0.027,0.021],
      ADMIN_LV3:[0.116,0.053,0.012,0.007,0.007],
      VOR_K100:[0.234,0.05,0.03,0.01,0.022],
      VOR_K200:[0.234,0.051,0.028,0.006,0.022],
    },
    "85": {
      H3_6:[0.091,0.079,0.012,0.023,0.026],
      H3_7:[0.099,0.08,0.011,0.012,0.015],
      H3_8:[0.103,0.078,0.003,0.005,0.003],
      S2_11:[0.094,0.081,0.013,0.015,0.022],
      S2_12:[0.1,0.081,0.012,0.008,0.016],
      S2_13:[0.104,0.081,0.004,0.005,0.005],
      TRI_10:[0.092,0.079,0.012,0.013,0.024],
      TRI_11:[0.1,0.08,0.011,0.007,0.014],
      TRI_12:[0.106,0.08,0.004,0.006,0.005],
      ADMIN_LV2:[0.305,0.079,0.041,0.025,0.027],
      ADMIN_LV3:[0.16,0.08,0.018,0.007,0.01],
      VOR_K100:[0.348,0.08,0.047,0.009,0.033],
      VOR_K200:[0.342,0.08,0.043,0.006,0.03],
    },
    "80": {
      H3_6:[0.112,0.108,0.016,0.023,0.031],
      H3_7:[0.123,0.111,0.015,0.013,0.018],
      H3_8:[0.128,0.109,0.004,0.006,0.004],
      S2_11:[0.115,0.11,0.017,0.016,0.026],
      S2_12:[0.124,0.11,0.016,0.009,0.019],
      S2_13:[0.127,0.109,0.006,0.006,0.007],
      TRI_10:[0.113,0.109,0.016,0.014,0.03],
      TRI_11:[0.123,0.111,0.015,0.008,0.017],
      TRI_12:[0.13,0.11,0.005,0.007,0.006],
      ADMIN_LV2:[0.39,0.106,0.053,0.026,0.035],
      ADMIN_LV3:[0.203,0.11,0.024,0.007,0.012],
      VOR_K100:[0.448,0.108,0.061,0.009,0.039],
      VOR_K200:[0.435,0.109,0.057,0.007,0.038],
    },
  },
  ldiv: {
    "90": {
      H3_6:[0.061,0.046,0.007,0.022,0.018],
      H3_7:[0.071,0.049,0.007,0.01,0.011],
      H3_8:[0.074,0.049,0.002,0.004,0.002],
      S2_11:[0.066,0.049,0.008,0.014,0.015],
      S2_12:[0.071,0.051,0.008,0.007,0.012],
      S2_13:[0.075,0.051,0.003,0.004,0.004],
      TRI_10:[0.068,0.052,0.008,0.012,0.019],
      TRI_11:[0.073,0.051,0.007,0.006,0.011],
      TRI_12:[0.076,0.05,0.003,0.004,0.004],
      ADMIN_LV2:[0.195,0.049,0.026,0.025,0.019],
      ADMIN_LV3:[0.111,0.051,0.012,0.006,0.006],
      VOR_K100:[0.207,0.044,0.027,0.01,0.02],
      VOR_K200:[0.219,0.048,0.026,0.005,0.019],
    },
    "85": {
      H3_6:[0.089,0.079,0.012,0.022,0.025],
      H3_7:[0.097,0.078,0.011,0.011,0.014],
      H3_8:[0.105,0.08,0.003,0.005,0.003],
      S2_11:[0.09,0.078,0.013,0.015,0.019],
      S2_12:[0.098,0.079,0.012,0.007,0.015],
      S2_13:[0.104,0.081,0.004,0.005,0.005],
      TRI_10:[0.089,0.079,0.012,0.013,0.022],
      TRI_11:[0.097,0.077,0.011,0.006,0.014],
      TRI_12:[0.104,0.079,0.004,0.006,0.005],
      ADMIN_LV2:[0.291,0.076,0.039,0.025,0.028],
      ADMIN_LV3:[0.155,0.078,0.018,0.006,0.009],
      VOR_K100:[0.325,0.075,0.044,0.009,0.029],
      VOR_K200:[0.337,0.08,0.043,0.006,0.029],
    },
    "80": {
      H3_6:[0.108,0.105,0.015,0.023,0.03],
      H3_7:[0.12,0.107,0.015,0.012,0.017],
      H3_8:[0.13,0.111,0.004,0.007,0.004],
      S2_11:[0.109,0.103,0.016,0.015,0.023],
      S2_12:[0.118,0.105,0.015,0.008,0.017],
      S2_13:[0.128,0.109,0.006,0.006,0.007],
      TRI_10:[0.109,0.107,0.016,0.013,0.026],
      TRI_11:[0.122,0.11,0.015,0.007,0.017],
      TRI_12:[0.129,0.107,0.005,0.007,0.006],
      ADMIN_LV2:[0.379,0.107,0.053,0.02,0.034],
      ADMIN_LV3:[0.188,0.103,0.023,0.006,0.01],
      VOR_K100:[0.424,0.102,0.059,0.009,0.037],
      VOR_K200:[0.435,0.108,0.057,0.006,0.038],
    },
  },
};

// ── Tess-file path map ───────────────────────────────────────
var TESS_PATHS = {
  H3_6:'tessellations/h3/res_6.geojson',
  H3_7:'tessellations/h3/res_7.geojson',
  H3_8:'tessellations/h3/res_8.geojson',
  S2_11:'tessellations/s2/level_11.geojson',
  S2_12:'tessellations/s2/level_12.geojson',
  S2_13:'tessellations/s2/level_13.geojson',
  TRI_10:'tessellations/triangle/res_10.geojson',
  TRI_11:'tessellations/triangle/res_11.geojson',
  TRI_12:'tessellations/triangle/res_12.geojson',
  ADMIN_LV2:'tessellations/administrative/admin_lv2.geojson',
  ADMIN_LV3:'tessellations/administrative/admin_lv3.geojson',
  VOR_K100:'tessellations/voronoi/kmeans_k100.geojson',
  VOR_K200:'tessellations/voronoi/kmeans_k200.geojson',
};

// ── Map status bar ───────────────────────────────────────────
function setMapStatus(msg, isError) {
  var el = document.getElementById('map-status');
  if (!el) return;
  el.style.display = msg ? 'block' : 'none';
  el.textContent   = msg;
  el.style.color   = isError ? '#f87171' : '#3ddc84';
}

// ══════════════════════════════════════════════════════════════
// GEOMETRY UTILITIES — point-in-polygon (no external library)
// ══════════════════════════════════════════════════════════════

function pointInRing(px, py, ring) {
  var inside = false;
  for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    var xi = ring[i][0], yi = ring[i][1];
    var xj = ring[j][0], yj = ring[j][1];
    if (((yi > py) !== (yj > py)) &&
        (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

function pointInGeometry(px, py, geometry) {
  var type   = geometry.type;
  var coords = geometry.coordinates;
  if (type === 'Polygon') {
    return pointInRing(px, py, coords[0]);
  }
  if (type === 'MultiPolygon') {
    for (var k = 0; k < coords.length; k++) {
      if (pointInRing(px, py, coords[k][0])) return true;
    }
  }
  return false;
}

// Build bounding-box index for fast pre-filtering
function buildBBoxIndex(geojson) {
  return geojson.features.map(function(feat) {
    var geom   = feat.geometry;
    var coords = geom.type === 'Polygon' ? geom.coordinates[0]
               : geom.coordinates[0][0];
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (var i = 0; i < coords.length; i++) {
      if (coords[i][0] < minX) minX = coords[i][0];
      if (coords[i][0] > maxX) maxX = coords[i][0];
      if (coords[i][1] < minY) minY = coords[i][1];
      if (coords[i][1] > maxY) maxY = coords[i][1];
    }
    return {
      id:   String(feat.properties.cell_id ||
                   feat.properties.ADM3_PCODE ||
                   feat.properties.ADM2_PCODE ||
                   feat.properties.ADM1_PCODE ||
                   feat.id || ''),
      geom: geom,
      minX: minX, minY: minY, maxX: maxX, maxY: maxY,
    };
  });
}

function findCellId(lon, lat, bboxIdx) {
  for (var i = 0; i < bboxIdx.length; i++) {
    var b = bboxIdx[i];
    if (lon < b.minX || lon > b.maxX || lat < b.minY || lat > b.maxY) continue;
    if (pointInGeometry(lon, lat, b.geom)) return b.id;
  }
  return null;
}

// ══════════════════════════════════════════════════════════════
// SPATIAL JOIN
// ══════════════════════════════════════════════════════════════

function buildCellCentroids(geojson) {
  cellCentroids = {};
  geojson.features.forEach(function(feat) {
    var cid = String(feat.properties.cell_id ||
                     feat.properties.ADM3_PCODE ||
                     feat.properties.ADM2_PCODE ||
                     feat.properties.ADM1_PCODE || '');
    if (!cid) return;
    // Centroid of outer ring
    var coords = feat.geometry.type === 'Polygon'
      ? feat.geometry.coordinates[0]
      : feat.geometry.coordinates[0][0];
    var sumX = 0, sumY = 0, n = coords.length - 1;
    for (var i = 0; i < n; i++) { sumX += coords[i][0]; sumY += coords[i][1]; }
    cellCentroids[cid] = [sumX / n, sumY / n];   // [lng, lat]
  });
}

function computeSpatialJoin(trips, bboxIdx) {
  // Reset
  cellStats  = {};
  odMatrix   = {};
  joinDone   = false;

  var originOf = new Array(trips.length);
  var destOf   = new Array(trips.length);

  for (var i = 0; i < trips.length; i++) {
    originOf[i] = findCellId(trips[i][C.olon], trips[i][C.olat], bboxIdx);
    destOf[i]   = findCellId(trips[i][C.dlon], trips[i][C.dlat], bboxIdx);
  }

  // Store per-trip cell assignments globally for temporal heatmap & hour filter
  window._tripOriginCell = originOf;
  window._tripDestCell   = destOf;

  // Build per-cell stats
  // incoming_count    = trips arriving at cell as destination
  // outgoing_count    = trips leaving cell as origin
  // distOrigins   = distinct origin cells that sent trips here
  // distDests     = distinct destination cells this cell sent trips to
  var incoming  = {}, outgoing  = {};
  var origSets  = {}, destSets  = {};   // for distinct counts

  for (var j = 0; j < trips.length; j++) {
    var o = originOf[j], d = destOf[j];
    if (!o || !d) continue;

    outgoing[o] = (outgoing[o] || 0) + 1;
    incoming[d] = (incoming[d] || 0) + 1;

    if (!origSets[d]) origSets[d] = {};
    origSets[d][o] = true;

    if (!destSets[o]) destSets[o] = {};
    destSets[o][d] = true;

    // OD matrix
    if (!odMatrix[o]) odMatrix[o] = {};
    odMatrix[o][d] = (odMatrix[o][d] || 0) + 1;
  }

  // Merge into cellStats
  var allIds = {};
  Object.keys(incoming).forEach(function(k) { allIds[k] = true; });
  Object.keys(outgoing).forEach(function(k) { allIds[k] = true; });

  maxIncoming = 1; maxOutgoing = 1; maxAbsNet = 1;

  Object.keys(allIds).forEach(function(id) {
    var inc = incoming[id] || 0;
    var out = outgoing[id] || 0;
    cellStats[id] = {
      incoming:    inc,
      outgoing:    out,
      distOrigins: Object.keys(origSets[id] || {}).length,
      distDests:   Object.keys(destSets[id] || {}).length,
    };
    if (inc > maxIncoming) maxIncoming = inc;
    if (out > maxOutgoing) maxOutgoing = out;
    var absNet = Math.abs(out - inc);
    if (absNet > maxAbsNet) maxAbsNet = absNet;
  });

  // Compute per-trip survival values for retention-based threshold
  survivalK = []; survivalL = [];
  for (var sv = 0; sv < trips.length; sv++) {
    var o = originOf[sv], d = destOf[sv];
    if (!o || !d) continue;
    var os = cellStats[o], ds = cellStats[d];
    if (!os || !ds) continue;
    survivalK.push(Math.min(os.incoming, os.outgoing, ds.incoming, ds.outgoing));
    survivalL.push(Math.min(os.distOrigins, os.distDests, ds.distOrigins, ds.distDests));
  }

  joinDone = true;
  refreshTemporalIfOpen();
}

// ── Retention-based threshold calculator ─────────────────────
// Mirrors pipeline.py find_threshold(): largest T where
// (trips with survival >= T) / total >= target retention rate.
function findRetentionThreshold(survival, target) {
  if (!survival.length) return 1;
  var total = survival.length;
  var maxT  = 0;
  for (var i = 0; i < survival.length; i++) {
    if (survival[i] > maxT) maxT = survival[i];
  }
  // Build frequency array then cumulative from right
  var freq = new Array(maxT + 2).fill(0);
  for (var j = 0; j < survival.length; j++) freq[survival[j]]++;
  var cum = 0;
  for (var t = maxT; t >= 1; t--) {
    cum += freq[t];
    if (cum / total >= target) return t;
  }
  return 1;
}

// Thresholds scaled to the OD sample size (33,789 / 337,887 cleaned
// trips = 10.00%). Pipeline k/l values are calibrated on the full
// dataset; applying them directly to the sample would suppress almost
// everything because per-cell sample counts are ~10x smaller than the
// full data counts.
// Formula: k_sample = max(2, round(k_full * sample_ratio))
var PIPELINE_THRESHOLDS = {
  "H3_6":{"kanon":{"90":100,"85":200,"80":300},"ldiv":{"90":5,"85":5,"80":5}},
  "H3_7":{"kanon":{"90":15,"85":23,"80":33},"ldiv":{"90":5,"85":6,"80":7}},
  "H3_8":{"kanon":{"90":2,"85":2,"80":4},"ldiv":{"90":2,"85":2,"80":3}},
  "S2_11":{"kanon":{"90":64,"85":105,"80":131},"ldiv":{"90":5,"85":6,"80":6}},
  "S2_12":{"kanon":{"90":16,"85":24,"80":33},"ldiv":{"90":5,"85":6,"80":7}},
  "S2_13":{"kanon":{"90":3,"85":5,"80":7},"ldiv":{"90":2,"85":3,"80":4}},
  "TRI_10":{"kanon":{"90":63,"85":98,"80":135},"ldiv":{"90":5,"85":6,"80":6}},
  "TRI_11":{"kanon":{"90":14,"85":21,"80":31},"ldiv":{"90":5,"85":6,"80":7}},
  "TRI_12":{"kanon":{"90":3,"85":5,"80":7},"ldiv":{"90":2,"85":3,"80":4}},
  "ADMIN_LV2":{"kanon":{"90":218,"85":290,"80":303},"ldiv":{"90":5,"85":5,"80":6}},
  "ADMIN_LV3":{"kanon":{"90":34,"85":42,"80":53},"ldiv":{"90":6,"85":7,"80":8}},
  "VOR_K100":{"kanon":{"90":134,"85":166,"80":184},"ldiv":{"90":6,"85":6,"80":6}},
  "VOR_K200":{"kanon":{"90":63,"85":74,"80":89},"ldiv":{"90":6,"85":7,"80":8}},
};

function computeAutoThreshold() {
  var entry = PIPELINE_THRESHOLDS[state.tess];
  if (entry && entry[state.method] && entry[state.method][state.retention]) {
    state.threshold = entry[state.method][state.retention];
    return;
  }
  // Fallback: derive from sample (used if tessellation not in lookup)
  var targetMap = { '90': 0.90, '85': 0.85, '80': 0.80 };
  var target    = targetMap[state.retention] || 0.80;
  var survival  = state.method === 'kanon' ? survivalK : survivalL;
  state.threshold = findRetentionThreshold(survival, target);
}

// ══════════════════════════════════════════════════════════════
// CHOROPLETH — Origin / Destination views
// ══════════════════════════════════════════════════════════════

// Interpolate a hex colour toward white by factor t (0=full colour, 1=white)
function hexToRgb(hex) {
  var r = parseInt(hex.slice(1,3),16);
  var g = parseInt(hex.slice(3,5),16);
  var b = parseInt(hex.slice(5,7),16);
  return {r:r, g:g, b:b};
}

var FINE_TESS = {'H3_8':1,'S2_13':1,'TRI_12':1,'H3_6':1,'S2_11':1,'TRI_10':1};

function choroplethFill(count, maxCount, rgb) {
  if (count <= 0) return 'rgba(15,25,35,0.55)';
  var t = Math.sqrt(count / maxCount);
  var minA = FINE_TESS[state.tess] ? 0.30 : 0.12;
  var a = minA + t * (1.0 - minA);
  return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + a + ')';
}

// ── Travel Demand diverging scale ──────────────────────────────
// Red  = net trip generation (outgoing > incoming, this cell is a source)
// Blue = net trip attraction (incoming > outgoing, this cell is a sink)
var DEMAND_RED  = {r:235, g:64,  b:64};
var DEMAND_BLUE = {r:64,  g:140, b:235};

function demandFill(net) {
  var t = Math.max(-1, Math.min(1, net / maxAbsNet));
  var c = t >= 0 ? DEMAND_RED : DEMAND_BLUE;
  var u = Math.abs(t);
  var minA = FINE_TESS[state.tess] ? 0.30 : 0.12;
  // sqrt curve: opacity ramps to solid red/blue much faster than linear,
  // while the near-zero (white/neutral) end stays as transparent as before.
  var aCurve = Math.sqrt(u);
  var a = minA + aCurve * (1.0 - minA);
  var r = Math.round(255 + u * (c.r - 255));
  var g = Math.round(255 + u * (c.g - 255));
  var b = Math.round(255 + u * (c.b - 255));
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a.toFixed(2) + ')';
}

function cellPassesPrivacy(stats) {
  if (!stats) return false;
  var k = state.threshold;
  if (state.method === 'kanon') {
    return stats.incoming >= k && stats.outgoing >= k;
  } else {
    return stats.distOrigins >= k && stats.distDests >= k;
  }
}

function buildChoroplethLayer() {
  if (!loadedGeoJSON) return;

  var isOrigin = (state.view === 'origin');
  var isDemand = (state.view === 'demand');
  var entry    = TESS_ENTRIES.find(function(e) { return e.key === state.tess; });
  var baseHex  = entry ? (BASE_COLOR[entry.type] || getColor(entry)) : '#ffffff';
  var rgb      = hexToRgb(baseHex);
  var maxCount = isOrigin ? maxOutgoing : maxIncoming;

  var passCount = 0, failCount = 0;

  var layer = L.geoJSON(loadedGeoJSON, {
    style: function(feature) {
      var cid   = String(feature.properties.cell_id ||
                         feature.properties.ADM3_PCODE ||
                         feature.properties.ADM2_PCODE ||
                         feature.properties.ADM1_PCODE || '');
      var stats = cellStats[cid];
      var count = stats ? (isOrigin ? stats.outgoing : stats.incoming) : 0;
      var net   = stats ? (stats.outgoing - stats.incoming) : 0;

      if (joinDone && stats) {
        if (cellPassesPrivacy(stats)) {
          passCount++;
          return {
            fillColor:   isDemand ? demandFill(net) : choroplethFill(count, maxCount, rgb),
            fillOpacity: 1,
            color:       baseHex,
            weight:      0.6,
            opacity:     0.6,
          };
        } else {
          failCount++;
          return {
            fillColor:   'rgba(180,60,60,0.28)',
            fillOpacity: 1,
            color:       '#a05050',
            weight:      0.8,
            opacity:     0.5,
          };
        }
      }
      // No data yet — plain outline
      return {
        fillColor: 'rgba(15,25,35,0.4)',
        fillOpacity: 1,
        color: baseHex,
        weight: 0.6,
        opacity: 0.5,
      };
    },

    onEachFeature: function(feature, lyr) {
      var cid   = String(feature.properties.cell_id ||
                         feature.properties.ADM3_PCODE ||
                         feature.properties.ADM2_PCODE ||
                         feature.properties.ADM1_PCODE || cid);
      var stats = cellStats[cid];
      var label = feature.properties.ADM3_EN ||
                  feature.properties.ADM2_EN ||
                  feature.properties.ADM1_EN || cid;

      lyr.on('mouseover', function(e) {
        lyr.setStyle({ weight: 2, opacity: 1 });
        if (stats) {
          var net   = stats.outgoing - stats.incoming;
          var label2 = net > 0 ? 'Generation' : net < 0 ? 'Attraction' : 'Balanced';
          var tip = '<b style="color:#3ddc84">' + label + '</b><br>' +
            'Incoming: '  + stats.incoming    + '<br>' +
            'Outgoing: '  + stats.outgoing    + '<br>' +
            'Dist. origins: '  + stats.distOrigins + '<br>' +
            'Dist. dests: '    + stats.distDests +
            (state.view === 'demand'
              ? '<br>Net (O−D): ' + (net > 0 ? '+' : '') + net + ' — ' + label2
              : '');
          lyr.bindTooltip(tip, {sticky:true, opacity:0.92,
            className:'leaflet-tooltip-dark'}).openTooltip(e.latlng);
        }
      });
      lyr.on('mouseout', function() {
        layer.resetStyle(lyr);
        lyr.closeTooltip();
      });
    },
  });

  return { layer: layer, passCount: passCount, failCount: failCount };
}

function renderChoropleth() {
  if (tessLayer) { map.removeLayer(tessLayer); tessLayer = null; }
  flowCanvas.style.display = 'none';
  if (flowBgLayer) { map.removeLayer(flowBgLayer); flowBgLayer = null; }

  if (joinDone) computeAutoThreshold();   // auto-set state.threshold

  var result = buildChoroplethLayer();
  if (!result) return;
  tessLayer = result.layer;
  tessLayer.addTo(map);

  if (joinDone) {
    var k     = state.threshold;
    var pm    = state.method === 'kanon' ? 'k-anonymity' : 'l-diversity';
    var total = result.passCount + result.failCount;
    var pct   = total > 0 ? Math.round(100 * result.passCount / total) : 0;
    setMapStatus(
      result.passCount + ' pass | ' + result.failCount + ' fail ' +
      '(' + pct + '% Pass) with ' + pm + ' ' +
      (state.method === 'kanon' ? 'k' : 'l') + '=' + k +
      ' @' + state.retention + '% retention',
      false
    );
  } else {
    setMapStatus((loadedGeoJSON ? loadedGeoJSON.features.length : '?') +
                 ' cells loaded', false);
  }
}

// ══════════════════════════════════════════════════════════════
// OD FLOW — Bézier curve canvas
// ══════════════════════════════════════════════════════════════

var flowCanvas = (function() {
  var c = document.createElement('canvas');
  c.style.cssText =
    'position:absolute;top:0;left:0;pointer-events:none;z-index:600;display:none;';
  return c;
}());

var computedFlows  = [];   // [{oId,dId,count,oLng,oLat,dLng,dLat,sx,sy,dx,dy,samples}]
var lastFlowNodes  = {};   // cell id → {x,y} screen position of its centroid dot (last draw)
var lastFlowNodeR  = 5;    // node dot radius used in the last draw, for click hit-testing

function initFlowCanvas() {
  map.getContainer().appendChild(flowCanvas);
  map.on('moveend zoomend resize', function() {
    if (state.view === 'flow') redrawFlows();
  });
  map.on('mousemove', onMapMouseMove);
  map.on('click', onMapClick);
}

// Clicking a cell's centroid dot isolates that cell's incoming/outgoing
// flows; clicking the same dot again (or empty space) clears the selection.
function onMapClick(e) {
  if (state.view !== 'flow') return;

  var mx = e.containerPoint.x, my = e.containerPoint.y;
  var hitId = null, bestDist = lastFlowNodeR + 6;   // hit radius around the dot

  Object.keys(lastFlowNodes).forEach(function(id) {
    var nd = lastFlowNodes[id];
    var d  = Math.sqrt(Math.pow(mx - nd.x, 2) + Math.pow(my - nd.y, 2));
    if (d < bestDist) { bestDist = d; hitId = id; }
  });

  if (hitId) {
    state.selectedCell = (state.selectedCell === hitId) ? null : hitId;
  } else {
    state.selectedCell = null;
  }

  buildComputedFlows();
  redrawFlows();
  updateFlowCountInfo();
}

// Build flow list from odMatrix, capped at top-500 for performance.
// When a spatial join has been done, only flows where BOTH origin and
// destination cells pass the current privacy threshold are included.
function buildComputedFlows() {
  computedFlows = [];
  var minCount = state.selectedCell ? 5 : state.flowMin;

  Object.keys(odMatrix).forEach(function(oId) {
    if (joinDone && !cellPassesPrivacy(cellStats[oId])) return;
    var oCentroid = cellCentroids[oId];
    if (!oCentroid) return;
    Object.keys(odMatrix[oId]).forEach(function(dId) {
      if (joinDone && !cellPassesPrivacy(cellStats[dId])) return;
      var count = odMatrix[oId][dId];
      if (count < minCount) return;
      var dCentroid = cellCentroids[dId];
      if (!dCentroid || oId === dId) return;
      computedFlows.push({ oId:oId, dId:dId, count:count,
                           oLng:oCentroid[0], oLat:oCentroid[1],
                           dLng:dCentroid[0], dLat:dCentroid[1] });
    });
  });

  applySelectedCellFilter();

  // Sort descending by count, keep top 500
  computedFlows.sort(function(a,b) { return b.count - a.count; });
  if (computedFlows.length > 500) computedFlows = computedFlows.slice(0, 500);

  updateFlowCountInfo();
}

function updateFlowCountInfo() {
  var el = document.getElementById('flow-count-info');
  if (!el) return;
  if (state.selectedCell) {
    var stats = cellStats[state.selectedCell];
    var statTxt = stats
      ? ' (incoming ' + stats.incoming + ', outgoing ' + stats.outgoing + ')'
      : '';
    el.textContent = 'Cell ' + state.selectedCell + ': ' + computedFlows.length +
      ' flows' + statTxt + ' — click again to clear';
  } else {
    el.textContent = computedFlows.length + ' flows shown';
  }
}

// Draw a single offset arrow (shaft + filled arrowhead) on ctx.
// The arrow is shifted LATERAL_PX pixels to the right of the O->D direction
// so that the reverse arrow (D->O) appears on its own side.
var LATERAL_PX  = 4;   // side-offset so paired arrows don't overlap
var HEAD_FACTOR = 3.5; // arrowhead length = width * HEAD_FACTOR
var NODE_R_BASE = 5;   // radius at zoom 14 (reference zoom)
// NODE_R and NODE_BUFFER are computed per-draw in redrawFlows()

function drawArrow(ctx, sx, sy, dx, dy, width, alpha, color, nodeBuf) {
  var ddx = dx - sx, ddy = dy - sy;
  var len = Math.sqrt(ddx * ddx + ddy * ddy);
  if (len < nodeBuf * 2 + 4) return;  // too short to draw

  // Unit vectors: forward (u) and right-perpendicular (p)
  var ux = ddx / len, uy = ddy / len;
  var px = -uy,       py =  ux;   // 90° clockwise = right of travel

  // Pull start inward by nodeBuf, offset right by LATERAL_PX
  var osx = sx + ux * nodeBuf + px * LATERAL_PX;
  var osy = sy + uy * nodeBuf + py * LATERAL_PX;
  // Pull end inward by nodeBuf, offset right by LATERAL_PX
  var odx = dx - ux * nodeBuf + px * LATERAL_PX;
  var ody = dy - uy * nodeBuf + py * LATERAL_PX;

  // Arrowhead geometry
  var headLen  = Math.max(7, width * HEAD_FACTOR);
  var headHalf = headLen * 0.42;
  var tipX = odx, tipY = ody;
  var baseCX = odx - ux * headLen, baseCY = ody - uy * headLen;
  var b1x = baseCX + px * headHalf, b1y = baseCY + py * headHalf;
  var b2x = baseCX - px * headHalf, b2y = baseCY - py * headHalf;

  var style     = 'rgba(' + color + ',' + alpha.toFixed(2) + ')';
  var headAlpha = Math.min(1, alpha + 0.35);
  var headStyle = 'rgba(' + color + ',' + headAlpha.toFixed(2) + ')';

  // Shaft
  ctx.beginPath();
  ctx.moveTo(osx, osy);
  ctx.lineTo(baseCX, baseCY);
  ctx.strokeStyle = style;
  ctx.lineWidth   = width;
  ctx.lineCap     = 'round';
  ctx.stroke();

  // Filled arrowhead (less transparent than the shaft)
  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(b1x,  b1y);
  ctx.lineTo(b2x,  b2y);
  ctx.closePath();
  ctx.fillStyle = headStyle;
  ctx.fill();
}

function redrawFlows() {
  var sz = map.getSize();
  flowCanvas.width  = sz.x;
  flowCanvas.height = sz.y;
  var ctx = flowCanvas.getContext('2d');
  ctx.clearRect(0, 0, sz.x, sz.y);

  if (!computedFlows.length) return;

  var maxCount = computedFlows[0].count;  // already sorted desc

  // Precompute screen coordinates and hover-sample points
  for (var i = 0; i < computedFlows.length; i++) {
    var f  = computedFlows[i];
    var sp = map.latLngToContainerPoint([f.oLat, f.oLng]);
    var dp = map.latLngToContainerPoint([f.dLat, f.dLng]);
    f.sx = sp.x; f.sy = sp.y;
    f.dx = dp.x; f.dy = dp.y;

    // Hover samples along offset shaft
    var ddx = dp.x - sp.x, ddy = dp.y - sp.y;
    var len = Math.sqrt(ddx * ddx + ddy * ddy) || 1;
    var rpx = -ddy / len, rpy = ddx / len;
    f.samples = [];
    for (var t = 0; t <= 1; t += 0.05) {
      f.samples.push({
        x: sp.x + ddx * t + rpx * LATERAL_PX,
        y: sp.y + ddy * t + rpy * LATERAL_PX,
      });
    }
  }

  // ── Zoom-scaled node size ──────────────────────────────────────
  // Reference: NODE_R_BASE at zoom 14; shrinks 1px per zoom step below that
  var zoom    = map.getZoom();
  var nodeR   = Math.max(2, NODE_R_BASE + (zoom - 14));
  var nodeBuf = nodeR + 4;

  // ── Tessellation border color for the dots ─────────────────────
  var tessEntry  = TESS_ENTRIES.find(function(e) { return e.key === state.tess; });
  var tessHex    = tessEntry ? (BASE_COLOR[tessEntry.type] || getColor(tessEntry)) : '#ffffff';
  var tessRgb    = hexToRgb(tessHex);
  var tessBorder = tessRgb
    ? 'rgba(' + tessRgb.r + ',' + tessRgb.g + ',' + tessRgb.b + ',0.85)'
    : 'rgba(255,255,255,0.85)';

  // ── 1. Draw arrows back-to-front (faint first, bright on top) ──
  // Arrow color: very light tint of the tessellation color (65% toward white)
  var arrowRgb = tessRgb
    ? Math.round(tessRgb.r + (255 - tessRgb.r) * 0.65) + ',' +
      Math.round(tessRgb.g + (255 - tessRgb.g) * 0.65) + ',' +
      Math.round(tessRgb.b + (255 - tessRgb.b) * 0.65)
    : '224,224,228';
  for (var j = computedFlows.length - 1; j >= 0; j--) {
    var fl    = computedFlows[j];
    var ratio = fl.count / maxCount;
    var width = 0.8 + ratio * 4.5;   // 0.8 – 5.3 px
    var alpha = 0.18 + ratio * 0.72; // 0.18 – 0.90
    drawArrow(ctx, fl.sx, fl.sy, fl.dx, fl.dy,
              width, alpha, arrowRgb, nodeBuf);
  }

  // ── 2. Draw centroid dots on top of all arrows ─────────────────
  var nodeSeen = {};
  for (var n = 0; n < computedFlows.length; n++) {
    var fn = computedFlows[n];
    nodeSeen[fn.oId] = { x: fn.sx, y: fn.sy };
    nodeSeen[fn.dId] = { x: fn.dx, y: fn.dy };
  }
  // If a cell is selected but currently has no flows passing the filters
  // (e.g. min-trips slider too high), still place its dot so it can be
  // clicked again to deselect.
  if (state.selectedCell && !nodeSeen[state.selectedCell] && cellCentroids[state.selectedCell]) {
    var selCentroid = cellCentroids[state.selectedCell];
    var selPt = map.latLngToContainerPoint([selCentroid[1], selCentroid[0]]);
    nodeSeen[state.selectedCell] = { x: selPt.x, y: selPt.y };
  }
  // Store for click hit-testing
  lastFlowNodes  = nodeSeen;
  lastFlowNodeR  = nodeR;

  Object.keys(nodeSeen).forEach(function(id) {
    var nd = nodeSeen[id];
    var isSelected = (id === state.selectedCell);
    ctx.beginPath();
    ctx.arc(nd.x, nd.y, isSelected ? nodeR + 2 : nodeR, 0, Math.PI * 2);
    ctx.fillStyle   = isSelected ? 'rgba(255,215,0,0.95)' : 'rgba(255,255,255,0.90)';
    ctx.strokeStyle = isSelected ? '#ffd700' : tessBorder;
    ctx.lineWidth   = isSelected ? 2.5 : 1.5;
    ctx.fill();
    ctx.stroke();
  });
}

// ── Flow tooltip ──────────────────────────────────────────────
var hoveredFlow = null;

function onMapMouseMove(e) {
  if (state.view !== 'flow' || !computedFlows.length) return;
  // Don't show flow tooltip while hovering the temporal panel
  if (temporalPanelOpen) {
    var panel = document.getElementById('temporal-panel');
    if (panel) {
      var pr = panel.getBoundingClientRect();
      var cx = e.originalEvent.clientX, cy = e.originalEvent.clientY;
      if (cx >= pr.left && cx <= pr.right && cy >= pr.top && cy <= pr.bottom) {
        document.getElementById('flow-tooltip').style.display = 'none';
        return;
      }
    }
  }
  var mx = e.containerPoint.x, my = e.containerPoint.y;
  var hit = null, bestDist = 10;   // 10 px hit radius

  for (var i = 0; i < computedFlows.length; i++) {
    var samples = computedFlows[i].samples;
    for (var s = 0; s < samples.length; s++) {
      var d = Math.sqrt(Math.pow(mx - samples[s].x, 2) +
                        Math.pow(my - samples[s].y, 2));
      if (d < bestDist) { bestDist = d; hit = computedFlows[i]; }
    }
  }

  var tip = document.getElementById('flow-tooltip');
  if (!tip) return;

  if (hit) {
    tip.style.display = 'block';
    tip.style.left    = (e.originalEvent.clientX + 14) + 'px';
    tip.style.top     = (e.originalEvent.clientY - 38) + 'px';
    tip.innerHTML =
      '<b style="color:#3ddc84">OD Flow</b><br>' +
      'Origin cell: '      + hit.oId   + '<br>' +
      'Destination cell: ' + hit.dId   + '<br>' +
      'Trips: <b style="color:#fff">' + hit.count + '</b>';
    hoveredFlow = hit;
  } else {
    tip.style.display = 'none';
    hoveredFlow = null;
  }
}

// ══════════════════════════════════════════════════════════════
// TESSELLATION LOADER
// ══════════════════════════════════════════════════════════════

function loadTessellation(tessKey) {
  // Clear existing layer and join results
  if (tessLayer) { map.removeLayer(tessLayer); tessLayer = null; }
  flowCanvas.style.display = 'none';
  joinDone = false;
  cellStats = {}; odMatrix = {}; cellCentroids = {};
  state.selectedCell = null;   // cell ids aren't valid across tessellations
  document.getElementById('flow-count-info') &&
    (document.getElementById('flow-count-info').textContent = '');

  var path = TESS_PATHS[tessKey];
  if (!path) { setMapStatus('No file path for: ' + tessKey, true); return; }

  setMapStatus('Loading aggregation method…', false);

  fetch(path)
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(geojson) {
      loadedGeoJSON = geojson;
      loadedTessKey = tessKey;
      buildCellCentroids(geojson);

      var cellCount = geojson.features.length;

      if (odTrips.length > 0) {
        setMapStatus('Assigning ' + odTrips.length.toLocaleString() +
                     ' trips to ' + cellCount + ' cells…', false);
        // Use setTimeout to let the status message render before the
        // synchronous (potentially slow) spatial join starts
        setTimeout(function() {
          var bboxIdx = buildBBoxIndex(geojson);
          computeSpatialJoin(odTrips, bboxIdx);
          // Recompute the k/l threshold for THIS tessellation before
          // filtering flows -- otherwise buildComputedFlows() below
          // filters against the previous tessellation's stale threshold.
          if (joinDone) computeAutoThreshold();
          buildComputedFlows();
          renderCurrentView();
        }, 60);
      } else {
        renderCurrentView();
        setMapStatus(cellCount + ' cells  (no OD sample data)', false);
      }
    })
    .catch(function(err) {
      console.error('Tessellation load error:', err);
      setMapStatus('Load failed — run: py -m http.server 8000', true);
    });
}

// ══════════════════════════════════════════════════════════════
// VIEW RENDERER
// ══════════════════════════════════════════════════════════════

function buildFlowBgLayer() {
  if (!loadedGeoJSON) return null;
  var entry   = TESS_ENTRIES.find(function(e) { return e.key === state.tess; });
  var baseHex = entry ? getColor(entry) : '#ffffff';
  // Use a custom pane at z-index 350 so it always renders below the
  // flow canvas (z-index 600) and the default overlayPane (z-index 400).
  if (!map.getPane('flowBgPane')) {
    map.createPane('flowBgPane').style.zIndex = 350;
  }
  return L.geoJSON(loadedGeoJSON, {
    pane: 'flowBgPane',
    style: {
      fillColor:   'transparent',
      fillOpacity: 0,
      color:       baseHex,
      weight:      0.8,
      opacity:     0.5,
    },
    interactive: false,
  });
}

function renderCurrentView() {
  var flowCtrl = document.getElementById('flow-controls');

  if (state.view === 'flow') {
    if (tessLayer) { map.removeLayer(tessLayer); tessLayer = null; }
    if (flowBgLayer) { map.removeLayer(flowBgLayer); flowBgLayer = null; }
    if (flowCtrl) flowCtrl.style.display = 'block';

    // Tessellation outline behind the flow arrows
    flowBgLayer = buildFlowBgLayer();
    if (flowBgLayer) flowBgLayer.addTo(map);

    var sz = map.getSize();
    flowCanvas.width  = sz.x;
    flowCanvas.height = sz.y;
    flowCanvas.style.display = 'block';
    redrawFlows();

    var flowCount = computedFlows.length;
    setMapStatus(flowCount + ' flows (min ' + (state.selectedCell ? 5 : state.flowMin) + ' trips)', false);
    updateFlowCountInfo();

  } else {
    if (flowCtrl) flowCtrl.style.display = 'none';
    flowCanvas.style.display = 'none';
    renderChoropleth();
  }
}

// ══════════════════════════════════════════════════════════════
// PARALLEL COORDINATES — Utility Score SVG
// ══════════════════════════════════════════════════════════════

var METRIC_LABELS = ['Gini\nChange','CPC\nLoss','WS VPL\n(Origin)','WS\nDistance','WS\nPageRank'];
var N_AXES = METRIC_LABELS.length;
var SVG_W = 258, SVG_H = 210;
var PAD   = { top:12, right:10, bottom:60, left:30 };
var CHART_W = SVG_W - PAD.left - PAD.right;
var CHART_H = SVG_H - PAD.top  - PAD.bottom;

function axisX(i) { return PAD.left + (i / (N_AXES-1)) * CHART_W; }
function valueY(v) { return PAD.top + (1 - v) * CHART_H; }

function buildSVGInto(svgEl, w, h, method, showValues, retention) {
  method    = method    || state.method;
  retention = retention || state.retention || '80';
  var methodScores = UTILITY_SCORES[method] || UTILITY_SCORES.kanon;
  var scoreSet = methodScores[retention] || methodScores['80'];
  svgEl.innerHTML = '';
  var ns = 'http://www.w3.org/2000/svg';
  var pad  = { top:12, right: showValues ? 50 : 10, bottom:60, left:30 };
  var cw   = w - pad.left - pad.right;
  var ch   = h - pad.top  - pad.bottom;
  var fs   = w > 400 ? 11 : 9;
  var dotR = w > 400 ? 6  : 4.5;

  function el(tag, attrs, parent) {
    var e = document.createElementNS(ns, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svgEl).appendChild(e);
    return e;
  }
  function ax(i) { return pad.left + (i / (N_AXES-1)) * cw; }
  function vy(v) { return pad.top  + (1 - v) * ch; }

  el('text',{ x:8, y:pad.top+ch/2, fill:'#7a9a87', 'font-size':fs,
    'text-anchor':'middle',
    transform:'rotate(-90,8,'+(pad.top+ch/2)+')'
  }).textContent = 'Information Loss';

  el('text',{x:pad.left-4, y:vy(1)+4, fill:'#7a9a87',
    'font-size':fs,'text-anchor':'end'}).textContent = '1';
  el('text',{x:pad.left-4, y:vy(0)+4, fill:'#7a9a87',
    'font-size':fs,'text-anchor':'end'}).textContent = '0';

  // Intermediate y-axis gridlines/labels (zoomed/expanded chart only —
  // the small sidebar chart has no room for them without clutter).
  if (showValues) {
    [0.2, 0.4, 0.6, 0.8].forEach(function(v) {
      el('line',{x1:pad.left, y1:vy(v), x2:pad.left+cw, y2:vy(v),
        stroke:'rgba(255,255,255,0.08)','stroke-width':'1'});
      el('text',{x:pad.left-4, y:vy(v)+4, fill:'#7a9a87',
        'font-size':fs,'text-anchor':'end'}).textContent = v.toFixed(1);
    });
  }

  for (var i = 0; i < N_AXES; i++) {
    var x = ax(i);
    el('line',{x1:x,y1:pad.top,x2:x,y2:pad.top+ch,
      stroke:'rgba(255,255,255,0.20)','stroke-width':'1'});
    METRIC_LABELS[i].split('\n').forEach(function(line, li) {
      el('text',{
        x:0, y:0,
        fill: '#c9d1d9',
        'font-size': fs,
        'font-weight': 'bold',
        'text-anchor':'end',
        transform:'translate('+x+','+(pad.top+ch+8+li*(fs+1))+') rotate(-40)',
      }).textContent = line;
    });
  }

  var tooltip = document.getElementById('chart-tooltip');
  // Draw the selected tessellation type's dots last so they paint on top
  // of the dimmed (opacity 0.25) entries from other types, instead of
  // being drawn early and potentially covered by later, dimmer dots.
  var drawOrder = TESS_ENTRIES.slice().sort(function(a, b) {
    var aSel = a.type === state.tessType ? 1 : 0;
    var bSel = b.type === state.tessType ? 1 : 0;
    return aSel - bSel;
  });
  drawOrder.forEach(function(entry) {
    var scores    = scoreSet[entry.key];
    var color     = getColor(entry);
    var isSelected = (entry.type === state.tessType);
    var isActive   = (entry.key === state.tess);
    var opacity   = isSelected ? 1.0 : 0.25;

    for (var i = 0; i < N_AXES; i++) {
      var dot = el('circle',{
        cx: ax(i), cy: vy(scores[i]), r: dotR,
        fill: color, opacity: opacity,
        'data-entry': entry.key,
        'data-metric': METRIC_LABELS[i].replace('\n',' '),
        'data-value': scores[i].toFixed(3),
        'data-label': entry.label,
        cursor: 'pointer',
      });
      dot.addEventListener('mouseenter', function(e) {
        var d = e.target;
        tooltip.style.display = 'block';
        tooltip.innerHTML =
          '<strong style="color:#3ddc84">'+d.getAttribute('data-label')+'</strong><br>'+
          d.getAttribute('data-metric')+': '+d.getAttribute('data-value');
      });
      dot.addEventListener('mousemove', function(e) {
        tooltip.style.left = (e.clientX+12)+'px';
        tooltip.style.top  = (e.clientY-28)+'px';
      });
      dot.addEventListener('mouseleave', function() { tooltip.style.display='none'; });

      if (showValues && isSelected) {
        var valAttrs = {
          x: ax(i) + dotR + 3, y: vy(scores[i]) + 3,
          fill: color, 'font-size': fs - 1.5,
          'font-weight': 'bold',
        };
        if (isActive) valAttrs['text-decoration'] = 'underline';
        el('text', valAttrs).textContent = scores[i].toFixed(3);
      }
    }
  });
}

function buildSVG() {
  buildSVGInto(document.getElementById('utility-svg'), SVG_W, SVG_H, state.method, false, state.retention);
  updateUtilityMethodLabel();
}

function updateUtilityMethodLabel() {
  var el = document.getElementById('utility-method-label');
  if (!el) return;
  var labels = { kanon: 'k-anonymity', ldiv: 'l-diversity' };
  var retention = state.retention || '80';
  el.textContent = (labels[state.method] || state.method) + '  @ ' + retention + '% retention';
}

function openChartModal() {
  openModal('modal-chart');
  var retention = state.retention || '80';
  buildSVGInto(document.getElementById('utility-svg-kanon'), 400, 420, 'kanon', true, retention);
  buildSVGInto(document.getElementById('utility-svg-ldiv'),  400, 420, 'ldiv',  true, retention);
}

function closeChartModal(e) {
  if (e && e.target !== document.getElementById('modal-chart')) return;
  closeModal('modal-chart');
}

// ── Color Legend ─────────────────────────────────────────────
var LEGEND_GROUPS = [
  { type:'H3',      label:'H3 Hexagon',
    entries:[{key:'H3_6',label:'Res 6'},{key:'H3_7',label:'Res 7'},{key:'H3_8',label:'Res 8'}] },
  { type:'S2',      label:'S2 Square',
    entries:[{key:'S2_11',label:'Level 11'},{key:'S2_12',label:'Level 12'},{key:'S2_13',label:'Level 13'}] },
  { type:'Triangle',label:'Triangle',
    entries:[{key:'TRI_10',label:'Res 10'},{key:'TRI_11',label:'Res 11'},{key:'TRI_12',label:'Res 12'}] },
  { type:'Admin',   label:'Administrative',
    entries:[{key:'ADMIN_LV2',label:'Level 2'},{key:'ADMIN_LV3',label:'Level 3'}] },
  { type:'Voronoi', label:'Voronoi (K-means)',
    entries:[{key:'VOR_K100',label:'k=100'},{key:'VOR_K200',label:'k=200'}] },
];

function buildLegend() {
  var container = document.getElementById('color-legend');
  container.innerHTML = '';
  LEGEND_GROUPS.forEach(function(group) {
    var gDiv = document.createElement('div');
    gDiv.className = 'legend-group';

    var lbl = document.createElement('div');
    lbl.className = 'legend-group-label';
    lbl.textContent = group.label;
    gDiv.appendChild(lbl);

    var row = document.createElement('div');
    row.className = 'legend-swatches';

    group.entries.forEach(function(e) {
      var entry  = TESS_ENTRIES.find(function(t){ return t.key===e.key; });
      var color  = getColor(entry);
      var wrap   = document.createElement('div');
      wrap.className = 'legend-swatch-label';

      var sw = document.createElement('div');
      sw.className = 'legend-swatch';
      sw.style.background = color;
      sw.title = e.label;

      var txt = document.createElement('span');
      txt.style.fontSize = '10px';
      txt.style.color    = '#7a9a87';
      txt.textContent    = e.label;

      wrap.appendChild(sw); wrap.appendChild(txt);
      row.appendChild(wrap);
    });

    gDiv.appendChild(row);
    container.appendChild(gDiv);
  });
}

// ══════════════════════════════════════════════════════════════
// CONTROLS
// ══════════════════════════════════════════════════════════════

function setView(btn, view) {
  document.querySelectorAll('.btn-group .btn-toggle')
    .forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  state.view = view;
  var demandLegend = document.getElementById('demand-legend');
  if (demandLegend) demandLegend.style.display = (view === 'demand') ? 'block' : 'none';
  renderCurrentView();
}

function onTessChange() {
  state.tess     = document.getElementById('tess-select').value;
  state.tessType = getTessType(state.tess);
  buildSVG();
  loadTessellation(state.tess);
}

function onPrivacyChange() {
  state.method    = document.getElementById('privacy-method').value;
  state.retention = document.getElementById('privacy-retention').value;

  var paramEl = document.getElementById('threshold-param');
  if (paramEl) {
    paramEl.textContent = state.method === 'kanon' ? 'k' : 'l';
  }
  buildSVG();
  if (state.view === 'flow') {
    // Recompute threshold then rebuild flows with new privacy filter
    if (joinDone) computeAutoThreshold();
    buildComputedFlows();
    redrawFlows();
    setMapStatus(computedFlows.length + ' flows (min ' + (state.selectedCell ? 5 : state.flowMin) +
      ' trips, ' + (state.method === 'kanon' ? 'k' : 'l') + '=' +
      state.threshold + ' @' + state.retention + '% retention)', false);
  } else {
    renderChoropleth();
  }
  refreshTemporalIfOpen();
}

function onThresholdChange(val) {
  state.threshold = parseInt(val, 10);
  document.getElementById('threshold-val').textContent = val;
  if (state.view !== 'flow') renderChoropleth();
}

function onFlowMinChange(val) {
  state.flowMin = parseInt(val, 10);
  document.getElementById('flow-min-val').textContent = val;
  buildComputedFlows();
  redrawFlows();
  setMapStatus(computedFlows.length + ' flows (min ' + val + ' trips)', false);
}

// ── Hour filter for OD Flow (Option 3) ───────────────────────
// state.flowHour: -1 = all hours, 0-23 = specific hour
state.flowHour = -1;

function onFlowHourChange(val) {
  var h = parseInt(val, 10);
  state.flowHour = h;
  document.getElementById('flow-hour-val').textContent = h < 0 ? 'All' : (h + ':00');
  buildComputedFlows();
  redrawFlows();
}

// Override buildComputedFlows to support hour filtering.
// When a specific hour is selected, recount the OD matrix from raw trips
// filtered to that hour (privacy suppression thresholds remain unchanged).
var _buildComputedFlowsOrig = buildComputedFlows;
buildComputedFlows = function() {
  if (state.flowHour < 0 || !joinDone) {
    _buildComputedFlowsOrig();
    return;
  }

  if (!window._tripOriginCell) { _buildComputedFlowsOrig(); return; }

  var h        = state.flowHour;
  var minCount = state.flowMin;

  // ── Step 1: compute per-cell stats for this specific hour ──
  // Privacy must be checked against HOURLY counts, not all-day counts.
  // Showing a single trip at 3am would reveal individual movement even if
  // the all-day cell passes k=5.
  var hIncoming  = {}, hOutgoing  = {};
  var hOrigSets  = {}, hDestSets  = {};

  for (var i = 0; i < odTrips.length; i++) {
    if (Math.round(odTrips[i][C.hour]) !== h) continue;
    var oId = window._tripOriginCell[i];
    var dId = window._tripDestCell[i];
    if (!oId || !dId || oId === dId) continue;
    hOutgoing[oId] = (hOutgoing[oId] || 0) + 1;
    hIncoming[dId] = (hIncoming[dId] || 0) + 1;
    if (!hOrigSets[dId]) hOrigSets[dId] = {};
    hOrigSets[dId][oId] = true;
    if (!hDestSets[oId]) hDestSets[oId] = {};
    hDestSets[oId][dId] = true;
  }

  function hourCellPasses(cid) {
    var k = state.threshold;
    if (state.method === 'kanon') {
      return (hIncoming[cid] || 0) >= k && (hOutgoing[cid] || 0) >= k;
    } else {
      return Object.keys(hOrigSets[cid] || {}).length >= k &&
             Object.keys(hDestSets[cid] || {}).length >= k;
    }
  }

  // ── Step 2: build OD matrix for cells that pass hourly privacy ──
  var hourOD = {};
  for (var j = 0; j < odTrips.length; j++) {
    if (Math.round(odTrips[j][C.hour]) !== h) continue;
    var oId = window._tripOriginCell[j];
    var dId = window._tripDestCell[j];
    if (!oId || !dId || oId === dId) continue;
    if (!hourCellPasses(oId) || !hourCellPasses(dId)) continue;
    if (!hourOD[oId]) hourOD[oId] = {};
    hourOD[oId][dId] = (hourOD[oId][dId] || 0) + 1;
  }

  computedFlows = [];
  Object.keys(hourOD).forEach(function(oId) {
    var oCentroid = cellCentroids[oId];
    if (!oCentroid) return;
    Object.keys(hourOD[oId]).forEach(function(dId) {
      var count = hourOD[oId][dId];
      if (count < minCount) return;
      var dCentroid = cellCentroids[dId];
      if (!dCentroid) return;
      computedFlows.push({ oId:oId, dId:dId, count:count,
                           oLng:oCentroid[0], oLat:oCentroid[1],
                           dLng:dCentroid[0], dLat:dCentroid[1] });
    });
  });

  applySelectedCellFilter();

  computedFlows.sort(function(a,b) { return b.count - a.count; });
  if (computedFlows.length > 500) computedFlows = computedFlows.slice(0, 500);
  updateFlowCountInfo();
};

// Restrict computedFlows to only those touching state.selectedCell, if set.
function applySelectedCellFilter() {
  if (!state.selectedCell) return;
  var sel = state.selectedCell;
  computedFlows = computedFlows.filter(function(f) {
    return f.oId === sel || f.dId === sel;
  });
}

// ── Temporal panel: OD Matrix heatmap tabs ─────────────────────
var temporalPanelOpen = false;
var temporalTab        = 'raw';   // 'raw' | 'suppressed' | 'diff'
var PANEL_HEIGHT       = 270;     // px when open

function toggleTemporalPanel() {
  temporalPanelOpen = !temporalPanelOpen;
  var panel  = document.getElementById('temporal-panel');
  var arrow  = document.getElementById('temporal-handle-arrow');
  var handle = document.getElementById('temporal-handle');
  // No CSS transition on #temporal-panel's height (see its HTML comment
  // for why) -- this is an instant, reliable open/close.
  if (temporalPanelOpen) {
    panel.style.height = PANEL_HEIGHT + 'px';
    arrow.textContent  = '▼';
    handle.style.bottom = PANEL_HEIGHT + 'px';
    setTimeout(renderActiveTemporalTab, 50);
  } else {
    panel.style.height = '0';
    arrow.textContent  = '▲';
    handle.style.bottom = '0';
  }
}

// ── Tab switching: Raw / Suppressed / Difference (OD Matrix) ──
function setTemporalTab(tab) {
  temporalTab = tab;

  var ids = { raw:'tp-btn-raw', suppressed:'tp-btn-priv', diff:'tp-btn-diff' };
  Object.keys(ids).forEach(function(t) {
    var btn = document.getElementById(ids[t]);
    if (!btn) return;
    var active = (t === tab);
    btn.style.background  = active ? '#1a3a2a'              : 'transparent';
    btn.style.color       = active ? '#3ddc84'              : '#7a9a87';
    btn.style.borderColor = active ? 'rgba(61,220,132,0.5)' : 'rgba(255,255,255,0.12)';
  });

  renderActiveTemporalTab();
}

function renderActiveTemporalTab() {
  if (!temporalPanelOpen) return;
  drawTemporalHeatmap();
}

// Day-of-week labels. dow: 0=Monday … 6=Sunday
var DAYS_LABEL  = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

// Build two 7×24 grids: raw counts and privacy-suppressed counts.
function buildTemporalGrids() {
  var raw  = [];
  var priv = [];
  for (var d = 0; d < 7; d++) {
    raw.push(new Array(24).fill(0));
    priv.push(new Array(24).fill(0));
  }

  if (!window._tripOriginCell) return { raw: raw, priv: priv };

  for (var i = 0; i < odTrips.length; i++) {
    var oId = window._tripOriginCell[i];
    var dId = window._tripDestCell[i];
    if (!oId || !dId) continue;

    var dow  = Math.round(odTrips[i][C.dow]);
    var hour = Math.round(odTrips[i][C.hour]);
    if (dow < 0 || dow > 6 || hour < 0 || hour > 23) continue;

    raw[dow][hour]++;

    if (joinDone &&
        cellPassesPrivacy(cellStats[oId]) &&
        cellPassesPrivacy(cellStats[dId])) {
      priv[dow][hour]++;
    }
  }
  return { raw: raw, priv: priv };
}

var _lastTemporalGrids = null;   // kept for hover tooltip

function drawTemporalHeatmap() {
  if (!temporalPanelOpen) return;
  var canvas = document.getElementById('temporal-canvas');
  if (!canvas) return;

  var grids  = buildTemporalGrids();
  _lastTemporalGrids = grids;     // store for mousemove
  var rawG   = grids.raw;
  var privG  = grids.priv;

  var DAYS  = 7;
  var HOURS = 24;
  canvas.width  = HOURS;
  canvas.height = DAYS;

  var ctx = canvas.getContext('2d');
  var img = ctx.createImageData(HOURS, DAYS);

  // Shared scale: raw and suppressed normalise against the same maximum
  // so colours are directly comparable — a dimmer cell means fewer trips,
  // never an artefact of rescaling. Diff mode uses loss % (0-100), capped at 1.
  var maxRaw = 1;
  for (var d = 0; d < DAYS; d++) {
    for (var h = 0; h < HOURS; h++) {
      if (rawG[d][h] > maxRaw) maxRaw = rawG[d][h];
    }
  }
  var maxVal = temporalTab === 'diff' ? 1 : maxRaw;

  for (var d = 0; d < DAYS; d++) {
    for (var h = 0; h < HOURS; h++) {
      var raw  = rawG[d][h];
      var prv  = privG[d][h];
      var lossPct = raw > 0 ? (raw - prv) / raw : 0;
      var val  = temporalTab === 'raw'        ? raw
               : temporalTab === 'suppressed' ? prv
               : lossPct;

      var t = Math.max(0, val / maxVal);
      var r, g, b, a;

      if (temporalTab === 'diff') {
        // Red scale: white → red (more suppressed = darker red)
        r = 255;
        g = Math.round(255 * (1 - t));
        b = Math.round(255 * (1 - t));
        a = t < 0.02 ? 30 : 200;
      } else {
        // Green-gold scale matching the app palette
        if (t < 0.5) {
          var u = t / 0.5;
          r = Math.round(13  + u * (61  - 13));
          g = Math.round(17  + u * (220 - 17));
          b = Math.round(23  + u * (132 - 23));
        } else {
          var u = (t - 0.5) / 0.5;
          r = Math.round(61  + u * (255 - 61));
          g = Math.round(220 + u * (215 - 220));
          b = Math.round(132 + u * (0   - 132));
        }
        a = t < 0.02 ? 30 : 220;
      }

      var idx = (d * HOURS + h) * 4;
      img.data[idx]     = r;
      img.data[idx + 1] = g;
      img.data[idx + 2] = b;
      img.data[idx + 3] = a;
    }
  }

  ctx.putImageData(img, 0, 0);

  // Sync day-label div height to match canvas rendered height
  var dayLabels = document.getElementById('tp-day-labels');
  if (dayLabels) {
    var rendered = canvas.getBoundingClientRect();
    if (rendered.height > 0) dayLabels.style.height = rendered.height + 'px';
  }

  // Update color-legend gradient to match current mode
  var legendBar = document.getElementById('tp-legend-bar');
  if (legendBar) {
    legendBar.style.background = temporalTab === 'diff'
      ? 'linear-gradient(to bottom,#ff4444,#ff9999,#0d1117)'
      : 'linear-gradient(to bottom,#ffd700,#3ddc84,#0d1117)';
  }
}

// ── OD Matrix heatmap hover tooltip ───────────────────────────
(function wireTemporalTooltip() {
  // Wire after DOM ready; canvas may not exist yet — use event delegation
  document.addEventListener('mousemove', function(e) {
    var canvas = document.getElementById('temporal-canvas');
    if (!canvas || !temporalPanelOpen || !_lastTemporalGrids) return;

    var rect = canvas.getBoundingClientRect();
    var mx   = e.clientX - rect.left;
    var my   = e.clientY - rect.top;
    if (mx < 0 || my < 0 || mx > rect.width || my > rect.height) {
      hideTemporalTooltip(); return;
    }

    // Hide the OD flow tooltip while hovering the heatmap
    var flowTip = document.getElementById('flow-tooltip');
    if (flowTip) flowTip.style.display = 'none';

    var hour = Math.floor(mx / rect.width  * 24);
    var day  = Math.floor(my / rect.height * 7);
    hour = Math.max(0, Math.min(23, hour));
    day  = Math.max(0, Math.min(6,  day));

    var raw  = _lastTemporalGrids.raw[day][hour];
    var prv  = _lastTemporalGrids.priv[day][hour];
    var diff = raw - prv;
    var lossPct = raw > 0 ? Math.round(diff / raw * 100) : 0;

    var tt = document.getElementById('chart-tooltip');
    if (!tt) return;
    tt.style.display    = 'block';
    tt.style.left       = (e.clientX + 14) + 'px';
    tt.style.top        = (e.clientY - 10) + 'px';
    tt.innerHTML =
      '<strong style="color:#c9d1d9;">' + DAYS_LABEL[day].slice(0,3) + ' ' + hour + ':00</strong><br>' +
      '<span style="color:#3ddc84;">Raw: ' + raw + '</span><br>' +
      '<span style="color:#7a9a87;">Anonymized: ' + prv + '</span><br>' +
      '<span style="color:#a07070;">Removed: ' + diff + '</span><br>' +
      '<span style="color:#ff9999;">Loss: ' + lossPct + '%</span>';
  });

  document.addEventListener('mouseleave', hideTemporalTooltip);
}());

function hideTemporalTooltip() {
  var tt = document.getElementById('chart-tooltip');
  if (tt) tt.style.display = 'none';
}

// Refresh whichever temporal tab is active whenever the underlying data changes
function refreshTemporalIfOpen() {
  renderActiveTemporalTab();
}

// ══════════════════════════════════════════════════════════════
// DECISION SUPPORT TAB
// Ranks EVERY tessellation x resolution x retention x privacy-method
// combination in UTILITY_RESULTS (from utility_results_wasserstein.csv)
// by combined utility loss, so the privacy method itself is just
// another visible column to choose from rather than a pre-filter.
// Clicking a row jumps the main map straight to that configuration,
// reusing the same state-change entry points the Explorer tab already
// uses (onTessChange / onPrivacyChange) rather than duplicating any
// rendering logic.
// ══════════════════════════════════════════════════════════════

var DS_METRICS = [
  { key: 'gini',        label: 'Gini' },
  { key: 'cpc_loss',     label: 'CPC'  },
  { key: 'ws_origin',    label: 'Ori'  },
  { key: 'ws_distance',  label: 'Dst'  },
  { key: 'ws_pagerank',  label: 'PR'   },
];

var DS_METHOD_LABEL = { kanon: 'k-anonymity', ldiv: 'l-diversity' };
var DS_METHOD_SHORT = { kanon: 'k-anon', ldiv: 'l-div' };

var decisionState = {
  // Per-metric weight, 0-1 (0 = excluded from combined loss, 1 = full weight)
  weights: { gini: 1, cpc_loss: 1, ws_origin: 1, ws_distance: 1, ws_pagerank: 1 },
  retentionFilter: 'all',   // 'all' | '90' | '85' | '80'
  sortKey: null,            // null = default (combined loss ascending); else 'type'|'res'|'method'
  sortDir: 1,               // 1 = ascending, -1 = descending
  selectedRow: null,        // {key, method, target} of the currently loaded row
};

function switchSidebarTab(tab) {
  var isDecision = (tab === 'decision');
  document.getElementById('tab-panel-explorer').style.display = isDecision ? 'none' : '';
  document.getElementById('tab-panel-decision').style.display = isDecision ? '' : 'none';
  document.getElementById('sbtab-explorer').classList.toggle('active', !isDecision);
  document.getElementById('sbtab-decision').classList.toggle('active', isDecision);
  document.getElementById('decision-results-panel').style.display = isDecision ? 'block' : 'none';
  if (isDecision) renderDecisionTable();
}

function onDecisionControlsChange() {
  document.querySelectorAll('.ds-metric-slider').forEach(function(sl) {
    var m = sl.getAttribute('data-metric');
    decisionState.weights[m] = parseFloat(sl.value);
    var val = document.querySelector('.ds-metric-val[data-metric="' + m + '"]');
    if (val) val.textContent = parseFloat(sl.value).toFixed(2);
  });

  var retEl = document.querySelector('input[name="ds-retention"]:checked');
  decisionState.retentionFilter = retEl ? retEl.value : 'all';

  renderDecisionTable();
}

// Combined loss = weighted sum of the 5 metrics divided by the fixed
// Each metric's slider is an independent MAX-ALLOWED-VALUE filter, not a
// blend weight -- sliders don't average together at all, so you can
// filter by just the one or two metrics you actually care about and
// leave the rest at the default 1.00 (no filter, since metric values
// are normalized to [0,1] and effectively never reach 1.0). A row is
// "feasible" only if it stays within every slider you've lowered.
function computeMetricFilter(row) {
  var activeCount = 0, failCount = 0, activeSum = 0, activeN = 0;
  var perMetric = [];
  for (var i = 0; i < DS_METRICS.length; i++) {
    var key = DS_METRICS[i].key;
    var w   = decisionState.weights[key];
    if (w === undefined) w = 1;
    var v = row[key];
    var isActive = w < 1;   // 1.00 = this metric's filter is off
    var known    = !(v === null || v === undefined || isNaN(v));
    var pass     = !isActive || !known || v <= w;
    if (isActive) {
      activeCount++;
      if (!pass) failCount++;
      if (known) { activeSum += v; activeN++; }
    }
    perMetric.push({ label: DS_METRICS[i].label, value: v, known: known,
                      active: isActive, limit: w, pass: pass });
  }
  return {
    pass: failCount === 0,
    activeCount: activeCount,
    failCount: failCount,
    avgActive: activeN ? activeSum / activeN : 0,
    perMetric: perMetric,
  };
}

function dsTessLabel(key) {
  var entry = TESS_ENTRIES.find(function(e) { return e.key === key; });
  return entry ? entry.label : key;
}

// Friendly "Resolution" cell text per tessellation family.
function dsResLabel(type, res) {
  if (type === 'Admin')   return 'Level ' + res;
  if (type === 'Voronoi') return 'k=' + res;
  if (type === 'S2')      return 'Level ' + res;
  return 'Res ' + res;   // H3, Triangle
}

// 3-state cycle per column: ascending -> descending -> no sort (back to
// the default combined-loss ordering) -> ascending again. Clicking a
// different column always restarts that column at ascending.
function sortDecisionTable(key) {
  if (decisionState.sortKey !== key) {
    decisionState.sortKey = key;
    decisionState.sortDir = 1;
  } else if (decisionState.sortDir === 1) {
    decisionState.sortDir = -1;
  } else {
    decisionState.sortKey = null;
    decisionState.sortDir = 1;
  }
  renderDecisionTable();
}

function updateSortArrows() {
  document.querySelectorAll('.ds-sort-arrow').forEach(function(span) {
    var key = span.getAttribute('data-sort-key');
    if (decisionState.sortKey === key) {
      span.textContent = decisionState.sortDir === 1 ? ' ▲' : ' ▼';
    } else {
      span.textContent = '';
    }
  });
}

function renderDecisionTable() {
  if (typeof UTILITY_RESULTS === 'undefined') {
    document.getElementById('decision-table-body').innerHTML =
      '<tr><td colspan="4" style="padding:10px 6px;color:#f87171;">' +
      'utility_results.js not loaded.</td></tr>';
    return;
  }

  var source = UTILITY_RESULTS;
  if (decisionState.retentionFilter !== 'all') {
    var target = parseInt(decisionState.retentionFilter, 10);
    source = source.filter(function(r) { return r.target === target; });
  }

  var rows = source.map(function(r) {
    return { row: r, filter: computeMetricFilter(r) };
  });
  var activeCount = rows.length ? rows[0].filter.activeCount : 0;

  if (decisionState.sortKey) {
    var key = decisionState.sortKey, dir = decisionState.sortDir;
    rows.sort(function(a, b) {
      var av = key === 'method' ? DS_METHOD_LABEL[a.row.method] : a.row[key];
      var bv = key === 'method' ? DS_METHOD_LABEL[b.row.method] : b.row[key];
      if (av < bv) return -1 * dir;
      if (av > bv) return  1 * dir;
      if (a.filter.pass !== b.filter.pass) return a.filter.pass ? -1 : 1;
      return a.filter.avgActive - b.filter.avgActive;
    });
  } else {
    rows.sort(function(a, b) {
      if (a.filter.pass !== b.filter.pass) return a.filter.pass ? -1 : 1;
      return a.filter.avgActive - b.filter.avgActive;
    });
  }

  var feasible = rows.filter(function(x) { return x.filter.pass; }).length;
  document.getElementById('ds-row-count').textContent =
    feasible + ' / ' + rows.length + ' feasible';

  var summary = document.getElementById('ds-summary');
  if (summary) {
    summary.textContent = activeCount === 0
      ? 'No metric filters are active — showing all combinations. Lower a slider to filter by that metric.'
      : feasible + ' of ' + rows.length + ' combination' + (rows.length === 1 ? '' : 's') +
        ' meet' + (rows.length === 1 ? 's' : '') + ' all ' + activeCount +
        ' active metric filter' + (activeCount === 1 ? '' : 's') +
        (decisionState.retentionFilter !== 'all'
          ? ' at ' + decisionState.retentionFilter + '% retention' : '') +
        ', sorted by ' + (decisionState.sortKey
          ? (decisionState.sortKey === 'type'   ? 'aggregation'    :
             decisionState.sortKey === 'res'    ? 'resolution'     :
             decisionState.sortKey === 'method' ? 'privacy method' :
             decisionState.sortKey === 'target' ? 'retention'      :
             decisionState.sortKey)
          : 'feasibility') + '.';
  }

  updateSortArrows();

  var tbody = document.getElementById('decision-table-body');
  tbody.innerHTML = '';

  rows.forEach(function(x) {
    var r = x.row;
    var feasibleRow = x.filter.pass;
    var isSelected  = decisionState.selectedRow &&
      decisionState.selectedRow.key === r.key &&
      decisionState.selectedRow.method === r.method &&
      decisionState.selectedRow.target === r.target;

    var tr = document.createElement('tr');
    tr.title = x.filter.perMetric.map(function(m) {
      var v = m.known ? m.value.toFixed(3) : 'N/A';
      return m.label.replace('\n', ' ') + ': ' + v +
        (m.active ? (m.pass ? ' ✓' : ' ✗ (max ' + m.limit.toFixed(2) + ')') : '');
    }).join('\n') + '\n(click for full metric breakdown)';
    tr.style.cssText =
      'cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.06);' +
      (isSelected ? 'background:rgba(61,220,132,0.18);' : '');

    var textColor = isSelected ? '#e8f0eb' : feasibleRow ? '#e8f0eb' : '#7a9a87';
    var cells = [r.type, dsResLabel(r.type, r.res), DS_METHOD_SHORT[r.method] || r.method, r.target + '%'];

    cells.forEach(function(text) {
      var td = document.createElement('td');
      td.style.cssText = 'padding:5px 6px;color:' + textColor + ';text-align:left;';
      td.textContent = text;
      tr.appendChild(td);
    });

    tr.addEventListener('click', function() { selectDecisionRow(r, x.filter); });
    tbody.appendChild(tr);
  });

  updateStickyOffset();
}

// The readout box (id="decision-readout") is position:sticky at top:0
// so it stays visible while the results list scrolls underneath it. The
// table header cells are ALSO sticky at top:0 for the same reason -- so
// their "top" must be offset by the readout's current rendered height,
// otherwise the two would overlap at the same scroll position.
// (Sticky is applied per-<th>, not on the <tr> -- position:sticky on
// table rows is unreliable across browsers, especially combined with
// border-collapse; per-cell sticky is the robust pattern.) Called
// whenever the readout's visibility or content (and therefore height)
// changes.
function updateStickyOffset() {
  var readout = document.getElementById('decision-readout');
  var ths = document.querySelectorAll('.ds-th-sticky');
  if (!readout || !ths.length) return;
  var offset = (readout.style.display !== 'none') ? readout.offsetHeight : 0;
  ths.forEach(function(th) { th.style.top = offset + 'px'; });
}

// Loads the clicked combination onto the main map by driving the same
// controls / entry points the Explorer tab uses, then shows a live
// readout of that row's full metric breakdown ("Gini/CPC/Ori/Dst/PR")
// -- this is the only place those per-metric values are shown, per
// spec: the table itself stays to identity columns only.
function selectDecisionRow(r, filter) {
  decisionState.selectedRow = { key: r.key, method: r.method, target: r.target };

  var tessSelect = document.getElementById('tess-select');
  if (tessSelect.value !== r.key) {
    tessSelect.value = r.key;
    onTessChange();
  }

  document.getElementById('privacy-method').value = r.method;
  document.getElementById('privacy-retention').value = String(r.target);
  onPrivacyChange();

  var readout = document.getElementById('decision-readout');
  readout.style.display = 'block';
  var klText = (r.k !== null && r.k !== undefined ? 'k = ' + r.k : '') +
               (r.k !== null && r.l !== null ? '&nbsp;&nbsp;' : '') +
               (r.l !== null && r.l !== undefined ? 'l = ' + r.l : '');

  document.getElementById('ds-readout-text').innerHTML =
    '<b style="color:#3ddc84;">' + r.type + '</b>&nbsp;&nbsp;|&nbsp;&nbsp;' +
    'Resolution: ' + dsResLabel(r.type, r.res) + '<br>' +
    'Privacy: ' + DS_METHOD_LABEL[r.method] + '<br>' +
    'Target: ' + r.target + '%&nbsp;&nbsp;|&nbsp;&nbsp;Actual retention: ' +
    (r.retention !== null ? (r.retention * 100).toFixed(2) + '%' : 'N/A') + '<br>' +
    klText + '<br>' +
    'Filters: <b>' + (filter.activeCount === 0
      ? 'none active'
      : (filter.pass ? 'all ' + filter.activeCount + ' passed'
                      : filter.failCount + ' of ' + filter.activeCount + ' failed')) + '</b>';

  drawDecisionRadar(r);

  renderDecisionTable();   // refresh highlight on the newly-selected row
}

// Fixed-scale radar chart (max 0.5 on every axis, so shapes are directly
// comparable across different rows/clicks) for the 5 utility metrics of
// the clicked row. Rendered into the SVG next to the text readout.
var DS_RADAR_MAX = 0.5;

function drawDecisionRadar(r) {
  var svg = document.getElementById('ds-readout-radar');
  if (!svg) return;
  svg.innerHTML = '';
  var ns = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, parent) {
    var e = document.createElementNS(ns, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e);
    return e;
  }

  var W = 280, H = 280;
  svg.setAttribute('width', W);
  svg.setAttribute('height', H);
  var cx = 140, cy = 138, R = 96;
  var n  = DS_METRICS.length;

  function angle(i) { return (Math.PI * 2 * i / n) - Math.PI / 2; }
  function pt(i, frac) {
    var a = angle(i);
    return [cx + frac * R * Math.cos(a), cy + frac * R * Math.sin(a)];
  }
  function ptsAt(frac) {
    var pts = [];
    for (var i = 0; i < n; i++) pts.push(pt(i, frac).join(','));
    return pts.join(' ');
  }

  // Faint filled backdrop disc so the chart doesn't read as empty space
  el('polygon', { points: ptsAt(1), fill: 'rgba(255,255,255,0.035)' });

  // Grid rings (0.1, 0.2, 0.3, 0.4, 0.5), alternating banded fill
  for (var g = 5; g >= 1; g--) {
    el('polygon', {
      points: ptsAt(g / 5),
      fill: (g % 2 === 0) ? 'rgba(255,255,255,0.025)' : 'none',
      stroke: 'rgba(255,255,255,0.16)', 'stroke-width': '1.2',
    });
  }
  // Ring value labels along the top (Gini) axis
  for (var g2 = 1; g2 <= 5; g2++) {
    var v = (DS_RADAR_MAX * g2 / 5).toFixed(1);
    var p = pt(0, g2 / 5);
    el('text', { x: p[0] + 6, y: p[1] - 2, fill: '#8fa89a', 'font-size': '11' }).textContent = v;
  }
  // Spokes + axis labels
  for (var i = 0; i < n; i++) {
    var outer = pt(i, 1);
    el('line', { x1: cx, y1: cy, x2: outer[0], y2: outer[1],
                 stroke: 'rgba(255,255,255,0.16)', 'stroke-width': '1.2' });
    var lp = pt(i, 1.16);
    var anchor = Math.abs(lp[0] - cx) < 4 ? 'middle' : (lp[0] > cx ? 'start' : 'end');
    el('text', {
      x: lp[0], y: lp[1] + 4, fill: '#c9d1d9', 'font-size': '14',
      'font-weight': '700', 'text-anchor': anchor,
    }).textContent = DS_METRICS[i].label;
  }

  // Data polygon (values clamped to the fixed 0.5 max)
  var values = DS_METRICS.map(function(m) {
    var v = r[m.key];
    return (v === null || v === undefined || isNaN(v)) ? 0 : v;
  });
  var dataPts = values.map(function(v, i) {
    return pt(i, Math.min(v, DS_RADAR_MAX) / DS_RADAR_MAX);
  });
  el('polygon', {
    points: dataPts.map(function(p) { return p.join(','); }).join(' '),
    fill: 'rgba(61,220,132,0.32)', stroke: '#3ddc84', 'stroke-width': '2.8',
  });
  var radarTooltip = document.getElementById('chart-tooltip');
  dataPts.forEach(function(p, i) {
    var dot = el('circle', { cx: p[0], cy: p[1], r: '4.6', fill: '#3ddc84', cursor: 'pointer' });
    var label = DS_METRICS[i].label;
    var valueText = label + ': ' + values[i].toFixed(2);
    dot.addEventListener('mouseenter', function() {
      if (!radarTooltip) return;
      radarTooltip.style.display = 'block';
      radarTooltip.innerHTML = '<strong style="color:#3ddc84">' + valueText + '</strong>';
    });
    dot.addEventListener('mousemove', function(e) {
      if (!radarTooltip) return;
      radarTooltip.style.left = (e.clientX + 12) + 'px';
      radarTooltip.style.top  = (e.clientY - 28) + 'px';
    });
    dot.addEventListener('mouseleave', function() {
      if (radarTooltip) radarTooltip.style.display = 'none';
    });
  });
}

// Leaflet attaches its own wheel listener to the map container for
// scroll-zoom; since decision-results-panel is a DOM child of that same
// container, wheel events over it were being hijacked for map zoom
// instead of scrolling the panel. disableScrollPropagation (and
// disableClickPropagation, so row clicks/drag don't reach the map)
// fixes both.
(function initDecisionPanelIsolation() {
  var panel = document.getElementById('decision-results-panel');
  if (panel && window.L && L.DomEvent) {
    L.DomEvent.disableScrollPropagation(panel);
    L.DomEvent.disableClickPropagation(panel);
  }
})();

// ── Init ──────────────────────────────────────────────────────
initFlowCanvas();
buildSVG();
buildLegend();
loadTessellation(state.tess);
openModal('modal-welcome');
