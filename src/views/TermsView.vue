<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-4xl mx-auto">
          <!-- 生效提示 -->
          <div class="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p class="text-sm text-blue-800 font-medium">
              {{ getText('effectiveNotice') }}
            </p>
          </div>

          <div class="prose prose-lg max-w-none">
            <!-- 英文版 -->
            <div v-if="locale === 'en'" class="space-y-8">
              <h1 class="text-3xl font-bold mb-8">Terms of Service</h1>

              <div class="space-y-6">
                <section>
                  <h2 class="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing this website or requesting any logistics service from Kenable
                    ("we", "our", "the Company"), you ("Client", "you") acknowledge that you have
                    read, understood and agreed to be bound by these Terms of Service ("TOS") and
                    any additional guidelines, policies or amendments referenced herein.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">2. Scope of Services</h2>
                  <p>
                    Kenable provides first‑leg logistics solutions originating from China, Vietnam,
                    Indonesia and other Asian origins to destination ports or inland points in the
                    United States, Mexico and Canada, including but not limited to:
                  </p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      <strong>FCL (Full Container Load)</strong>,
                      <strong>LCL (Less than Container Load)</strong>,
                      <strong>IPI (Inland Point Intermodal)</strong> and other customised transport
                      products;
                    </li>
                    <li>
                      Pre‑carriage, drayage, export customs clearance, space booking, ocean/air
                      freight, import customs brokerage, terminal container pick‑up,
                      trucking/last‑mile delivery and related value‑added services.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">3. Quotations & Booking</h2>
                  <ol class="list-decimal pl-6 space-y-2">
                    <li>
                      Quotes are provided on a case‑by‑case basis and remain valid for the period
                      specified in the quotation sheet (or, if unspecified,
                      <strong>7 calendar days</strong>).
                    </li>
                    <li>
                      Rates exclude duties, taxes, storage, demurrage/detention, inspection fees,
                      cargo insurance and any surcharges not expressly stated.
                    </li>
                    <li>
                      A booking is deemed confirmed only upon written acceptance by Kenable and
                      issuance of a booking reference number.
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">4. Client Obligations</h2>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      Provide complete and accurate shipment information (commodity, HS code,
                      weight, dimensions, value, hazardous status, etc.).
                    </li>
                    <li>
                      Ensure all cargo, documentation and packing comply with applicable export,
                      import, customs, security and safety regulations of origin, transit and
                      destination countries.
                    </li>
                    <li>
                      Arrange adequate cargo insurance at your own discretion; Kenable's liability
                      is limited (see § 8).
                    </li>
                    <li>
                      Pay all invoices in full by the due date stated. Overdue amounts accrue
                      interest at <strong>1.5 % per month</strong> or the maximum rate permitted by
                      law.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">5. Prohibited or Restricted Cargo</h2>
                  <p>
                    Client must not tender goods that are illegal, counterfeit, explosive,
                    corrosive, radioactive, perishable (unless agreed in writing) or otherwise
                    restricted without proper declaration and prior written approval from Kenable.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">6. Customs & Regulatory Compliance</h2>
                  <p>
                    You authorize Kenable and its appointed agents to act as forwarding agent for
                    export/import customs purposes. All penalties or expenses arising from
                    inaccurate or incomplete documentation supplied by Client shall be borne solely
                    by Client.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">7. Force Majeure</h2>
                  <p>
                    Kenable shall not be liable for loss, damage, delay or failure to perform caused
                    by events beyond its reasonable control, including but not limited to acts of
                    God, weather, labor disputes, war, cyber‑attacks, pandemic, governmental actions
                    or port congestion.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">8. Liability & Claims</h2>
                  <ol class="list-decimal pl-6 space-y-2">
                    <li>
                      Kenable's liability (if any) for loss or damage to cargo shall not exceed
                      <strong>USD 2.00 per kilogram</strong> or
                      <strong>USD 500 per shipment</strong>, whichever is lower, unless a higher
                      value is declared and additional charges paid.
                    </li>
                    <li>
                      All claims must be filed in writing within <strong>14 days</strong> of
                      delivery (or scheduled delivery). Legal action must commence within
                      <strong>9 months</strong> from the delivery date or the date when delivery
                      should have occurred.
                    </li>
                    <li>
                      Kenable is not liable for consequential or indirect losses (e.g., loss of
                      profits, market, production).
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">9. Payment & Set‑Off</h2>
                  <p>
                    We reserve the right to withhold delivery or release of documents until full
                    payment is received. Kenable may set off any sums owed by Client against monies
                    payable to Client.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">
                    10. Intellectual Property & Website Use
                  </h2>
                  <p>
                    Website content, logos, images and software are the property of Kenable or its
                    licensors. You may not copy, redistribute or create derivative works without
                    prior written consent.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">11. Privacy</h2>
                  <p>
                    Kenable handles personal and commercial data in accordance with its Privacy
                    Policy (published separately). By using our services, you consent to such data
                    processing.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">12. Termination</h2>
                  <p>
                    Kenable may suspend or terminate service immediately if Client breaches these
                    TOS, becomes insolvent, or engages in fraudulent or unlawful activities.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">13. Amendments</h2>
                  <p>
                    Kenable reserves the right to update or modify these TOS at any time. Continued
                    use of the website or our services following any changes constitutes acceptance
                    of the revised terms.
                  </p>
                </section>
              </div>
            </div>

            <!-- 中文版 -->
            <div v-else class="space-y-8">
              <h1 class="text-3xl font-bold mb-8">服务条款</h1>

              <div class="space-y-6">
                <section>
                  <h2 class="text-2xl font-semibold mb-4">1. 接受条款</h2>
                  <p>
                    当您访问本网站或使用
                    Kenable（以下简称"本公司"）提供的任何物流服务时，即表示您（以下简称"客户"）已阅读、理解并同意受本《服务条款》（以下简称"本条款"）及其引用的所有政策、指引和补充文件之约束。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">2. 服务范围</h2>
                  <p>
                    Kenable
                    专注于从中国、越南、印尼等亚洲起运地到美国、墨西哥、加拿大目的港或内陆点的头程物流解决方案，包括但不限于：
                  </p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      <strong>整柜 (FCL)</strong>、<strong>拼柜 (LCL)</strong>、<strong
                        >内陆点多式联运 (IPI)</strong
                      >、以及其他个性化物流产品；
                    </li>
                    <li>
                      港前内陆运输、拖车、出口报关、舱位订舱、海/空运、进口清关、码头提柜、卡车派送及相关增值服务。
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">3. 报价与订舱</h2>
                  <ol class="list-decimal pl-6 space-y-2">
                    <li>
                      报价以个案形式提供，报价单内注明的有效期满或默认
                      <strong>7 个日历日</strong> 后自动失效。
                    </li>
                    <li>
                      费率不含关税、增值税、仓储费、滞期费/滞箱费、查验费、货物保险费及未明确列出的其他附加费。
                    </li>
                    <li>仅当 Kenable 书面确认并出具订舱参考号后，订舱方为生效。</li>
                  </ol>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">4. 客户义务</h2>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      提供完整准确的货物信息（品名、海关编码、重量、体积、价值、危险品属性等）。
                    </li>
                    <li>
                      确保所有货物、文件及包装符合起运国、过境国、目的国的出口、进口、海关、安全及相关法规要求。
                    </li>
                    <li>自行决定并购买充分的货物保险；Kenable 责任有限（见第 8 条）。</li>
                    <li>
                      按发票规定时间全额支付费用，逾期按
                      <strong>月息1.5 %</strong> 或法律允许之最高利率计收滞纳金。
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">5. 禁运/限运货物</h2>
                  <p>
                    客户不得交运非法、侵权、爆炸性、腐蚀性、放射性、易腐（除非另行书面约定）或其他受限货物。如需承运危险品，须提前书面申请并获得
                    Kenable 批准。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">6. 海关及合规</h2>
                  <p>
                    您授权 Kenable
                    及其代理作为货物出口/进口报关代表。因客户提供资料不实或不完整而产生的罚款或费用，由客户自行承担。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">7. 不可抗力</h2>
                  <p>
                    因超出 Kenable
                    合理控制范围的事件（包括但不限于天灾、恶劣天气、劳资纠纷、战争、网络攻击、疫情、政府行为、港口拥堵等）导致的损失、损坏或延误，Kenable
                    概不负责。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">8. 责任与索赔</h2>
                  <ol class="list-decimal pl-6 space-y-2">
                    <li>
                      Kenable 对货损或货差的最高赔偿责任（如有）不超过
                      <strong>每公斤2美元</strong> 或
                      <strong>每票500美元</strong
                      >（以较低者为准），除非客户声明更高价值并支付相应附加费。
                    </li>
                    <li>
                      所有索赔须在货物交付（或应交付）之日起
                      <strong>14 天</strong> 内以书面形式提出，并于
                      <strong>9 个月</strong> 内启动法律程序。
                    </li>
                    <li>Kenable 不对间接或继发性损失（如利润、市场、生产损失等）承担责任。</li>
                  </ol>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">9. 付款与抵销</h2>
                  <p>
                    Kenable
                    有权在客户清偿全部应付费用前留置货物或提单等单证，并可将应付客户的任何款项抵销客户所欠的任何债务。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">10. 知识产权与网站使用</h2>
                  <p>
                    网站内容、标识、图像及软件均属 Kenable
                    或其许可方所有。未经书面许可，任何人不得复制、分发或衍生使用。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">11. 隐私</h2>
                  <p>
                    Kenable
                    将按照单独发布的《隐私政策》处理个人及商业数据。使用本服务即视为您同意该等数据处理方式。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">12. 终止</h2>
                  <p>若客户违反本条款、资不抵债或涉诈欺/非法行为，Kenable 可立即暂停或终止服务。</p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">13. 条款修改</h2>
                  <p>
                    Kenable
                    保留随时更新或修改本条款的权利。您继续使用网站或服务即表示接受修订后的条款。
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageLayout from '@/components/layout/PageLayout.vue'

const { locale } = useI18n()

// Translation keys type
type TranslationKey = 'pageTitle' | 'pageDescription' | 'effectiveNotice'

// Translation mappings
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    pageTitle: '服务条款',
    pageDescription: '使用我们服务时需要遵守的条款和条件。',
    effectiveNotice:
      '以下内容为 Kenable（www.kenablegroup.com）网站的《服务条款》。本条款自发布之日起立即生效，适用于所有访问网站及/或使用 Kenable 头程物流服务的个人或实体。',
  },
  en: {
    pageTitle: 'Terms of Service',
    pageDescription: 'Terms and conditions that must be followed when using our services.',
    effectiveNotice:
      'The following content is the Terms of Service for Kenable (www.kenablegroup.com) website. These terms are effective immediately upon publication and apply to all individuals or entities accessing the website and/or using Kenable first-leg logistics services.',
  },
}

// Get translated text helper function
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>
