<template>
  <PageLayout :page-title="pageTitle" :page-description="pageDesc">
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-4xl mx-auto prose prose-lg prose-gray prose-headings:text-gray-900 prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-8 prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-strong:font-semibold prose-table:border-collapse prose-thead:bg-gray-50 prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-gray-700 prose-hr:border-gray-300 prose-hr:my-8">
          <div v-html="content"></div>
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

const pageTitle = computed(() => {
  return locale.value === 'zh' ? '隐私政策' : 'Privacy Policy'
})

const pageDesc = computed(() => {
  return locale.value === 'zh' ? '我们的隐私政策' : 'Our privacy policy'
})

const content = computed(() => {
  if (locale.value === 'zh') {
    return `
      <h2 class="mb-8">中文版网站隐私政策</h2>

      <h3>目录</h3>
      <ol class="mb-8">
        <li><a href="#section-1" class="text-blue-600 hover:text-blue-800">引言</a></li>
        <li><a href="#section-2" class="text-blue-600 hover:text-blue-800">我们收集的信息</a></li>
        <li><a href="#section-3" class="text-blue-600 hover:text-blue-800">信息的使用目的</a></li>
        <li><a href="#section-4" class="text-blue-600 hover:text-blue-800">信息共享与披露</a></li>
        <li><a href="#section-5" class="text-blue-600 hover:text-blue-800">Cookie 与同类技术</a></li>
        <li><a href="#section-6" class="text-blue-600 hover:text-blue-800">国际数据传输</a></li>
        <li><a href="#section-7" class="text-blue-600 hover:text-blue-800">数据保留期限</a></li>
        <li><a href="#section-8" class="text-blue-600 hover:text-blue-800">信息安全</a></li>
        <li><a href="#section-9" class="text-blue-600 hover:text-blue-800">未成年人隐私</a></li>
        <li><a href="#section-10" class="text-blue-600 hover:text-blue-800">不追踪机制</a></li>
        <li><a href="#section-11" class="text-blue-600 hover:text-blue-800">隐私政策的更新</a></li>
      </ol>

      <hr class="my-8">

      <h3 id="section-1">1. 引言</h3>
      <p>欢迎访问 <strong>www.kenablegroup.com</strong>（以下简称"本网站"）。Kenable（以下简称"本公司"或"我们"）尊重并重视您的个人信息安全，承诺依据适用的数据保护法律法规（如 GDPR、CCPA/CPRA、PIPL 等）处理并保护您的个人信息及隐私权。</p>

      <h3 id="section-2">2. 我们收集的信息</h3>
      <div class="space-y-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">您主动提供的信息：</h4>
          <p class="text-gray-700 mb-2">姓名、职位、公司、邮箱、电话、询价内容、简历</p>
          <p class="text-sm text-gray-600 italic">法律依据：合同履行；同意</p>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">自动收集的信息：</h4>
          <p class="text-gray-700 mb-2">IP 地址、浏览器类型、设备标识、访问时间、页面浏览、Cookie ID、粗略地理位置</p>
          <p class="text-sm text-gray-600 italic">法律依据：合法利益；同意（针对可识别个人的 Cookie）</p>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">第三方来源信息：</h4>
          <p class="text-gray-700 mb-2">物流与支付伙伴提供的联系人信息</p>
          <p class="text-sm text-gray-600 italic">法律依据：合同履行；合法利益</p>
        </div>
      </div>
      <p class="text-sm italic mt-4 text-gray-600">*法律依据以适用地区法规为准。</p>

      <h3 id="section-3">3. 信息的使用目的</h3>
      <ul>
        <li><strong>履行或准备合同</strong>：处理询价、下单、交付、售后与账户管理；</li>
        <li><strong>客户服务与沟通</strong>：发送服务通知、系统更新与技术支持信息；</li>
        <li><strong>市场营销</strong>：在取得同意后发送新闻简讯、行业洞察与活动邀请（可随时取消）；</li>
        <li><strong>网站与服务安全</strong>：监控并防范欺诈、漏洞排查、日志审计；</li>
        <li><strong>数据分析与改进</strong>：评估流量与使用趋势，改进产品与流程；</li>
        <li><strong>符合法律要求</strong>：遵守海关、进出口、税务等强制性义务，回应政府或司法机关合法请求。</li>
      </ul>

      <h3 id="section-4">4. 信息共享与披露</h3>
      <p>仅在以下情形共享个人信息，并确保签署保密或数据保护协议：</p>
      <ol>
        <li><strong>关联公司</strong>：为实现本政策所述目的；</li>
        <li><strong>服务供应商</strong>：物流、仓储、IT 托管、支付、营销平台、咨询顾问等；</li>
        <li><strong>法律要求或争议解决</strong>：符合法律法规或保护合法权益；</li>
        <li><strong>业务交易</strong>：并购、重组或资产转让时，在充分安全保障前提下披露。</li>
      </ol>
      <blockquote>
        <p>我们不会将您的个人信息出售给任何第三方作其独立营销用途。</p>
      </blockquote>

      <h3 id="section-5">5. Cookie 与同类技术</h3>
      <ul>
        <li><strong>类型</strong>：严格必要、性能分析、功能、定向/广告 Cookie；</li>
        <li><strong>用途</strong>：维持登录、保存语言设置、统计访问量、推送定向广告；</li>
        <li><strong>管理</strong>：首次访问弹出 Cookie 横幅，提供"接受全部 / 拒绝非必要 / 自定义"选项；您可在浏览器或网站 "Cookie 设置中心" 随时撤回同意并删除 Cookie。</li>
      </ul>

      <h3 id="section-6">6. 国际数据传输</h3>
      <p>因全球运营需要，我们可能将个人信息传输至您所在地以外的服务器或业务实体，并通过欧盟标准合同条款（SCCs）、加密传输、最小化原则等措施确保等同的保护水平。若涉及中国境内信息跨境传输，将遵循 PIPL 及相关监管要求。</p>

      <h3 id="section-7">7. 数据保留期限</h3>
      <p>我们仅在达成本政策所述目的所必需的期限内保留个人信息，并依据合同、税务、审计、法律诉讼或备份安全等要求确定具体时长。到期后将删除或匿名化；若技术限制暂时无法删除，将与生产数据隔离并安全存储直至可删除为止。</p>

      <h3 id="section-8">8. 信息安全</h3>
      <ul>
        <li>全站 TLS/HTTPS 加密；</li>
        <li>访问控制、最小权限、双因素认证；</li>
        <li>定期渗透测试与安全审计；</li>
        <li>员工隐私安全培训与保密协议；</li>
        <li>建立数据泄露应急响应流程。</li>
      </ul>

      <h3 id="section-9">9. 未成年人隐私</h3>
      <p>本网站及服务仅面向 <strong>18 岁及以上</strong> 用户。我们不会主动收集 18 岁以下未成年人的个人信息；如发现误收集，将及时删除。</p>

      <h3 id="section-10">10. 不追踪机制</h3>
      <p>部分浏览器提供 "Do Not Track (DNT)" 信号。目前行业尚无统一技术标准，本网站暂不响应 DNT。若未来标准生效并适用，我们将更新本政策。</p>

      <h3 id="section-11">11. 隐私政策的更新</h3>
      <p>我们可能不定期更新本政策。重大变更（影响您的核心权利或处理方式）将通过网站公告或电子邮件另行通知，并在新版本中注明修订内容。</p>
    `
  } else {
    return `
      <h2 class="mb-8">English‑Language Website Privacy Policy</h2>

      <h3>Table of Contents</h3>
      <ol class="mb-8">
        <li><a href="#section-1" class="text-blue-600 hover:text-blue-800">Introduction</a></li>
        <li><a href="#section-2" class="text-blue-600 hover:text-blue-800">Information We Collect</a></li>
        <li><a href="#section-3" class="text-blue-600 hover:text-blue-800">How We Use Your Information</a></li>
        <li><a href="#section-4" class="text-blue-600 hover:text-blue-800">Sharing & Disclosure of Information</a></li>
        <li><a href="#section-5" class="text-blue-600 hover:text-blue-800">Cookies and Similar Technologies</a></li>
        <li><a href="#section-6" class="text-blue-600 hover:text-blue-800">International Data Transfers</a></li>
        <li><a href="#section-7" class="text-blue-600 hover:text-blue-800">Data Retention</a></li>
        <li><a href="#section-8" class="text-blue-600 hover:text-blue-800">Information Security</a></li>
        <li><a href="#section-9" class="text-blue-600 hover:text-blue-800">Children's Privacy</a></li>
        <li><a href="#section-10" class="text-blue-600 hover:text-blue-800">Do‑Not‑Track</a></li>
        <li><a href="#section-11" class="text-blue-600 hover:text-blue-800">Changes to This Policy</a></li>
      </ol>

      <hr class="my-8">

      <h3 id="section-1">1. Introduction</h3>
      <p>Welcome to <strong>www.kenablegroup.com</strong> ("this Website"). <strong>Kenable</strong> ("the Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information in compliance with applicable data‑protection laws (e.g., GDPR, CCPA/CPRA, PIPL).</p>

      <h3 id="section-2">2. Information We Collect</h3>
      <div class="space-y-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">Information you provide:</h4>
          <p class="text-gray-700 mb-2">Name, job title, company, email, phone, inquiry details, résumé</p>
          <p class="text-sm text-gray-600 italic">Legal Basis: Contract performance; consent</p>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">Information we collect automatically:</h4>
          <p class="text-gray-700 mb-2">IP address, browser type, device ID, timestamps, page views, Cookie ID, coarse geolocation</p>
          <p class="text-sm text-gray-600 italic">Legal Basis: Legitimate interest; consent (for identifiable cookies)</p>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">Information from third parties:</h4>
          <p class="text-gray-700 mb-2">Contact details from logistics or payment partners</p>
          <p class="text-sm text-gray-600 italic">Legal Basis: Contract performance; legitimate interest</p>
        </div>
      </div>
      <p class="text-sm italic mt-4 text-gray-600">*Legal bases vary by jurisdiction.</p>

      <h3 id="section-3">3. How We Use Your Information</h3>
      <ul>
        <li><strong>Contract performance / pre‑contract steps</strong>: processing inquiries, orders, delivery, after‑sales, account management;</li>
        <li><strong>Customer service & communications</strong>: sending service notices, system updates, technical support;</li>
        <li><strong>Marketing</strong>: sending newsletters, industry insights, event invitations with your consent (unsubscribe at any time);</li>
        <li><strong>Site & service security</strong>: monitoring fraud, vulnerability scanning, log auditing;</li>
        <li><strong>Analytics & improvement</strong>: traffic measurement, usage trend analysis, product and process enhancement;</li>
        <li><strong>Legal compliance</strong>: customs, trade, tax, and other mandatory obligations; responding to lawful government or judicial requests.</li>
      </ul>

      <h3 id="section-4">4. Sharing & Disclosure of Information</h3>
      <p>We share personal information only under the following circumstances and with appropriate confidentiality or data‑processing agreements:</p>
      <ol>
        <li><strong>Affiliates</strong>: to achieve the purposes described in this Policy;</li>
        <li><strong>Service providers</strong>: logistics, warehousing, IT hosting, payment, marketing platforms, consultants;</li>
        <li><strong>Legal requirements or dispute resolution</strong>: to comply with laws or protect legal rights;</li>
        <li><strong>Business transactions</strong>: disclosure in mergers, reorganizations, or asset transfers under adequate safeguards.</li>
      </ol>
      <blockquote>
        <p>We do <strong>not</strong> sell your personal information to third parties for their independent marketing purposes.</p>
      </blockquote>

      <h3 id="section-5">5. Cookies and Similar Technologies</h3>
      <ul>
        <li><strong>Types</strong>: strictly necessary, performance analytics, functional, targeting/advertising cookies;</li>
        <li><strong>Purposes</strong>: maintaining login status, saving language settings, measuring traffic, serving targeted ads;</li>
        <li><strong>Management</strong>: a cookie banner appears on first visit, offering "Accept All / Reject Non‑Essential / Customize." You may withdraw consent anytime via your browser settings or our <strong>Cookie Settings Center</strong>.</li>
      </ul>

      <h3 id="section-6">6. International Data Transfers</h3>
      <p>Because we operate globally, your data may be transferred to servers or entities outside your jurisdiction. We rely on Standard Contractual Clauses (SCCs), encryption, and data‑minimization to ensure equivalent protection. Personal data collected in Mainland China is stored locally; any cross‑border transfer follows PIPL and related regulations.</p>

      <h3 id="section-7">7. Data Retention</h3>
      <p>We retain personal information only as long as necessary for the purposes described in this Policy, considering contractual, tax, audit, litigation, and backup requirements. When retention ends, data are deleted or anonymized; if immediate deletion is technically infeasible, data are isolated and securely stored until deletion is possible.</p>

      <h3 id="section-8">8. Information Security</h3>
      <ul>
        <li>TLS/HTTPS encryption across the site;</li>
        <li>Access control, least privilege, multi‑factor authentication;</li>
        <li>Regular penetration testing and security audits;</li>
        <li>Employee privacy and security training with NDAs;</li>
        <li>Incident‑response procedures for data breaches.</li>
      </ul>

      <h3 id="section-9">9. Children's Privacy</h3>
      <p>This Website and our services are intended for <strong>users aged 18 and above</strong>. We do not knowingly collect personal information from anyone under 18. If we learn we have inadvertently done so, we will delete it promptly.</p>

      <h3 id="section-10">10. Do‑Not‑Track</h3>
      <p>Some browsers transmit "Do Not Track" (DNT) signals. As there is no industry‑standard response, this Website currently does not respond to DNT signals. Should an applicable standard emerge, we will revise this Policy accordingly.</p>

      <h3 id="section-11">11. Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time. Material changes that affect your fundamental rights or our processing practices will be announced on the Website or via email, and the revised version will indicate the updates made.</p>
    `
  }
})
</script>
