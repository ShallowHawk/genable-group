<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-4xl mx-auto">
          <!-- 生效日期提示 -->
          <div class="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p class="text-sm text-blue-800 font-medium">
              {{ getText('effectiveDate') }}
            </p>
          </div>

          <div class="prose prose-lg max-w-none">
            <!-- 英文版 -->
            <div v-if="locale === 'en'" class="space-y-8">
              <h1 class="text-3xl font-bold mb-8">Cookie Policy</h1>

              <div class="space-y-6">
                <p class="text-lg text-gray-700">
                  Welcome to Kenable (<a
                    href="https://www.kenablegroup.com"
                    class="text-blue-600 hover:underline"
                    >www.kenablegroup.com</a
                  >). We value your privacy and are committed to transparent use of cookies and
                  similar technologies on our website.
                </p>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
                  <p>
                    Cookies are small text files placed on your device (e.g., computer, tablet, or
                    smartphone) when you visit a website. They store small amounts of data that can
                    be used to recognize you during your session or future visits. We also use
                    technologies like local storage and pixel tags, which are referred to
                    collectively as "cookies" in this policy.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">2. Why Do We Use Cookies?</h2>
                  <p>We use cookies for several key reasons:</p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Strictly Necessary:</strong> These cookies enable essential features
                      like page navigation, load balancing, and security protections (e.g.,
                      PHPSESSID, AWSALBCORS).
                    </li>
                    <li>
                      <strong>Functional Preferences:</strong> These remember choices you make, such
                      as your preferred language, login status, or whether you've closed a popup
                      (e.g., lang_pref).
                    </li>
                    <li>
                      <strong>Analytics & Performance:</strong> These help us understand how
                      visitors interact with our logistics pages and quoting tools so we can make
                      improvements (e.g., _ga, _gid).
                    </li>
                    <li>
                      <strong>Marketing (if enabled in future):</strong> These cookies would help us
                      deliver more relevant advertisements about our logistics services. Currently,
                      we do not deploy marketing cookies; should this change, we will seek your
                      explicit consent again.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">3. What Cookies Do We Use?</h2>
                  <p>
                    Here are some examples of cookies that may be used on our site. For the most
                    current list, please refer to the cookie banner or contact us.
                  </p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      <strong>PHPSESSID:</strong> A session cookie set by Kenable to maintain
                      session state as you navigate through our site.
                    </li>
                    <li>
                      <strong>AWSALBCORS:</strong> Set by Amazon Web Services to manage traffic load
                      balancing, valid for 7 days.
                    </li>
                    <li>
                      <strong>_ga:</strong> Set by Google Analytics to anonymously track site usage
                      and improve content. It lasts for 13 months.
                    </li>
                    <li>
                      <strong>_gid:</strong> Also from Google Analytics, used to differentiate
                      short-term visitor behavior within a 24-hour period.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">4. How Can You Manage Cookies?</h2>
                  <p>You can control cookie use in the following ways:</p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      Use the cookie banner displayed on your first visit to accept or manage your
                      preferences;
                    </li>
                    <li>
                      Adjust your browser settings to block or delete cookies (see help pages for
                      Chrome, Safari, Firefox, etc.);
                    </li>
                    <li>
                      Use ad control platforms such as
                      <a href="https://optout.aboutads.info/" class="text-blue-600 hover:underline"
                        >YourAdChoices</a
                      >
                      or
                      <a
                        href="https://www.youronlinechoices.eu/"
                        class="text-blue-600 hover:underline"
                        >Your Online Choices</a
                      >
                      to manage targeted advertising.
                    </li>
                  </ul>
                  <p class="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <strong>Please note:</strong> disabling certain necessary cookies may limit your
                    ability to use some features, such as our logistics quote forms or shipment
                    tracking services.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">5. Legal Basis & Children's Privacy</h2>
                  <p>
                    If you are in the EEA or UK, we process cookies under Article 6(1)(a) or 6(1)(f)
                    of the GDPR. If you are a California resident, your rights under the CCPA may
                    apply. This site is not intended for use by children under 16, and we do not
                    knowingly collect data from minors. If you believe we have done so, please
                    contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
                  <p>
                    We may revise this Cookie Policy from time to time. The "Effective Date" at the
                    top reflects the most recent version. For material changes, we may provide
                    notice via pop-up or email.
                  </p>
                </section>
              </div>
            </div>

            <!-- 中文版 -->
            <div v-else class="space-y-8">
              <h1 class="text-3xl font-bold mb-8">Cookie政策</h1>

              <div class="space-y-6">
                <p class="text-lg text-gray-700">
                  欢迎您访问 Kenable（<a
                    href="https://www.kenablegroup.com"
                    class="text-blue-600 hover:underline"
                    >www.kenablegroup.com</a
                  >）。我们致力于保障您的隐私与数据安全。本 Cookie
                  政策说明我们如何在您使用网站时使用 Cookie 及类似技术。
                </p>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">1. 什么是 Cookie？</h2>
                  <p>
                    Cookie
                    是网站在您访问时保存在您设备（如电脑、平板或手机）上的小型文本文件。它们可以记录有关您使用网站的某些信息，帮助我们提升服务质量。除
                    Cookie
                    外，我们还可能使用本地存储、像素标签（Pixel）等类似技术，为简便起见，这些统称为"Cookie"。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">2. 我们为何使用 Cookie？</h2>
                  <p>
                    我们使用 Cookie
                    的主要目的是保障网站功能、提升用户体验以及进行网站优化，具体包括：
                  </p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      <strong>网站运行必需：</strong
                      >例如用于维持页面跳转稳定性、负载均衡、网络安全等核心功能（如
                      PHPSESSID、AWSALBCORS）。
                    </li>
                    <li>
                      <strong>偏好记录功能：</strong
                      >例如帮助我们记住您上次选择的语言、是否已登录或是否关闭过特定弹窗（如
                      lang_pref）。
                    </li>
                    <li>
                      <strong>访问分析与性能优化：</strong
                      >例如了解哪些页面最常被浏览，以帮助我们改进物流报价页面与用户使用路径（如
                      _ga、_gid）。
                    </li>
                    <li>
                      <strong>市场营销用途：</strong>在未来可能会用于展示更符合您兴趣的 Kenable
                      头程物流相关广告（如 _fbp、IDE）——目前我们暂未启用广告类
                      Cookie，若启用将重新征求您的授权。
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">3. 我们存放的 Cookie 示例</h2>
                  <p>
                    以下为目前网站可能设置的部分 Cookie 示例，仅供参考，具体内容请参考页面底部的
                    Cookie 弹窗：
                  </p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      <strong>PHPSESSID：</strong>这是一个会话 Cookie，由 Kenable
                      直接设置，用于确保您在不同页面之间浏览时信息不丢失。
                    </li>
                    <li>
                      <strong>AWSALBCORS：</strong>由 Amazon Web Services
                      设置，主要用于负载均衡，保障网站性能，保存 7 天。
                    </li>
                    <li>
                      <strong>_ga：</strong>由 Google
                      设置，用于匿名统计网站访问量及用户行为，帮助我们了解访问者如何使用网站，有效期为
                      13 个月。
                    </li>
                    <li>
                      <strong>_gid：</strong>也是由 Google
                      设置，用于识别短时间内的访问行为（如一天内的浏览路径），有效期为 24 小时。
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">4. 如何管理或拒绝 Cookie？</h2>
                  <p>您可通过以下方式管理 Cookie 设置：</p>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>
                      在首次访问本网站时，我们会弹出提示条，您可以选择"接受所有
                      Cookie"或"自定义偏好"；
                    </li>
                    <li>
                      您也可通过浏览器设置（如 Chrome、Edge、Safari、Firefox 等）删除已存储的 Cookie
                      或阻止未来的 Cookie 写入；
                    </li>
                    <li>
                      如果您希望控制第三方广告平台的 Cookie，可访问
                      <a href="https://optout.aboutads.info/" class="text-blue-600 hover:underline"
                        >YourAdChoices</a
                      >
                      或
                      <a
                        href="https://www.youronlinechoices.eu/"
                        class="text-blue-600 hover:underline"
                        >Your Online Choices</a
                      >
                      进行管理。
                    </li>
                  </ul>
                  <p class="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <strong>请注意：</strong>禁用某些必要 Cookie
                    可能会导致网站部分功能无法使用，如物流报价表单提交失败或页面无法正确加载。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">5. 适用法规与未成年人信息说明</h2>
                  <p>
                    若您位于欧洲经济区（EEA）或英国，我们依据《通用数据保护条例》（GDPR）第 6 条第 1
                    款 a 或 f 项处理 Cookie
                    数据。若您位于加利福尼亚州，美国《加州消费者隐私法案》（CCPA）亦赋予您拒绝"出售"个人信息的权利。我们的网站不面向
                    16 岁以下未成年人，若发现未成年人数据被收集，请及时联系我们处理。
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">6. 政策更新</h2>
                  <p>
                    我们可能会定期更新本政策，并在本页面顶部更新"生效日期"。如有重大变更，我们会通过网站弹窗或电子邮件进行通知。
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
type TranslationKey = 'pageTitle' | 'pageDescription' | 'effectiveDate'

// Translation mappings
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    pageTitle: 'Cookie政策',
    pageDescription: '我们如何使用Cookies来改善您的浏览体验。',
    effectiveDate: '生效日期：2025年6月21日',
  },
  en: {
    pageTitle: 'Cookie Policy',
    pageDescription: 'How we use Cookies to improve your browsing experience.',
    effectiveDate: 'Effective Date: June 21, 2025',
  },
}

// Get translated text helper function
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>
