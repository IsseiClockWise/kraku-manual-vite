import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ケイラク ガイドマニュアル",
  description: "A Kraku Manual",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'ホーム', link: '/' },

      { text: '配送プロバイダー', items: [
          { text: '配送プロバイダー', link: '/service_provider/' },
          { text: 'ダッシュボード', link: '/service_provider/dashboard.html' },
          { text: '出退勤', link: '/service_provider/attendances.html' },
          { text: '個建管理', link: '/service_provider/delivery_results.html' },
          { text: '請求', link: '/service_provider/contractor_invoices.html' },
          { text: '売上レポート', link: '/service_provider/report.html' },
          { text: '前年比較レポート', link: '/service_provider/comparison_report.html' },
          { text: 'ユーザー設定', link: '/service_provider/users.html' },
          { text: '元請け企業設定', link: '/service_provider/contractors.html' },
          { text: 'その他設定', link: '/service_provider/settings.html' },
        ]
      },

      { text: '管理者',  items: [
          { text: '管理者', link: '/admin/' },
          { text: 'ダッシュボード', link: '/admin/dashboard.html' },
          { text: 'シフト管理', link: '/admin/shifts.html' },
          { text: '出退勤', link: '/admin/attendances.html' },
          { text: '個建管理', link: '/admin/delivery_results.html' },
          { text: '支払い', link: '/admin/payment_notifications.html' },
          { text: '通知', link: '/admin/notifications.html' },
          { text: '請求', link: '/admin/contractor_invoices.html' },
          { text: '売上レポート', link: '/admin/report.html' },
          { text: '前年比較レポート', link: '/admin/comparison_report.html' },
          { text: 'ユーザー設定', link: '/admin/users.html' },
          { text: '元請け企業設定', link: '/admin/contractors.html' },
          { text: 'その他設定', link: '/admin/settings.html' },
        ]
      },

      { text: 'ドライバー',  items: [
          { text: 'ドライバー', link: '/driver/' },
          { text: '出退勤', link: '/driver/attendances.html' },
          { text: 'シフト', link: '/driver/shift_preferences.html' },
          { text: '支払通知書', link: '/driver/crew_pns.html' },
          { text: 'レポート', link: '/driver/incomes.html' },
          { text: 'クルー', link: '/driver/crew_pages.html' },
        ]
      },

      { text: '販売代理店', items: [
          { text: '販売代理店', link: '/sales_agent/' },
        ]
      },
    ],

    sidebar: [
      { text: '配送プロバイダー', items: [
          { text: '配送プロバイダー', link: '/service_provider/' },
          { text: 'ダッシュボード', link: '/service_provider/dashboard.html' },
          { text: '出退勤', link: '/service_provider/attendances.html' },
          { text: '個建管理', link: '/service_provider/delivery_results.html' },
          { text: '請求', link: '/service_provider/contractor_invoices.html' },
          { text: '売上レポート', link: '/service_provider/report.html' },
          { text: '前年比較レポート', link: '/service_provider/comparison_report.html' },
          { text: 'ユーザー設定', link: '/service_provider/users.html' },
          { text: '元請け企業設定', link: '/service_provider/contractors.html' },
          { text: 'その他設定', link: '/service_provider/settings.html' },
        ]
      },

      { text: '管理者',  items: [
          { text: '管理者', link: '/admin/' },
          { text: 'ダッシュボード', link: '/admin/dashboard.html' },
          { text: 'シフト管理', link: '/admin/shifts.html' },
          { text: '出退勤', link: '/admin/attendances.html' },
          { text: '個建管理', link: '/admin/delivery_results.html' },
          { text: '支払い', link: '/admin/payment_notifications.html' },
          { text: '通知', link: '/admin/notifications.html' },
          { text: '請求', link: '/admin/contractor_invoices.html' },
          { text: '売上レポート', link: '/admin/report.html' },
          { text: '前年比較レポート', link: '/admin/comparison_report.html' },
          { text: 'ユーザー設定', link: '/admin/users.html' },
          { text: '元請け企業設定', link: '/admin/contractors.html' },
          { text: 'その他設定', link: '/admin/settings.html' },
        ]
      },

      { text: 'ドライバー',  items: [
          { text: 'ドライバー', link: '/driver/' },
          { text: '出退勤', link: '/driver/attendances.html' },
          { text: 'シフト', link: '/driver/shift_preferences.html' },
          { text: '支払通知書', link: '/driver/crew_pns.html' },
          { text: 'レポート', link: '/driver/incomes.html' },
          { text: 'クルー', link: '/driver/crew_pages.html' },
        ]
      },

      { text: '販売代理店', items: [
          { text: '販売代理店', link: '/sales_agent/' },
        ]
      },
    ],
  }
})
