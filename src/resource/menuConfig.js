const mainNavList = [
    {
        'id': 1,
        'name': 'setting',
        'title': '设置',
        'icon': 'setting',
        'key': '/setting',
        'children': [
            {
                'id': 1,
                'name': 'system',
                'title': '系统配置',
                'icon': 'tool',
                'key': '/setting/system',
                'children': [
                    {
                        'id': 1,
                        'name': 'config',
                        'title': '配置管理',
                        'icon': 'smile',
                        'key': '/setting/system/',
                    },
                    {
                        'id': 2,
                        'name': 'network',
                        'title': '网站设置',
                        'icon': 'setting',
                    },
                    {
                        'id': 3,
                        'name': 'menu',
                        'title': '菜单管理',
                        'icon': 'bars',
                    },
                    {
                        'id': 4,
                        'name': 'annex',
                        'title': '附件管理',
                        'icon': 'tag',
                    }
                ]
            },
            {
                'id': 2,
                'name': 'power',
                'title': '权限管理',
                'icon': 'team',
                'children': [
                    {
                        'id': 1,
                        'name': 'admin',
                        'title': '管理员管理',
                        'icon': 'team',
                    },
                    {
                        'id': 2,
                        'name': 'user',
                        'title': '角色管理',
                        'icon': 'user',
                    },
                    {
                        'id': 3,
                        'name': 'journal',
                        'title': '日志管理',
                        'icon': 'solution',
                    }
                ]
            },
        ]
    },
    {
        'id': 2,
        'name': 'emanu',
        'title': '电子说明书',
        'icon': 'file-protect',
        'children': [
            {
                'id': 1,
                'name': 'emanu_ma',
                'title': '电子说明书管理',
                'icon': 'file-protect',
                'children': [
                    {
                        'id': 1,
                        'name': 'emenu_li',
                        'title': '电子说明书列表',
                        'icon': 'bars',
                    },
                    {
                        'id': 2,
                        'name': 'emenu_ex',
                        'title': '列表示例',
                        'icon': 'exception',
                    },
                    {
                        'id': 3,
                        'name': 'emenu_post',
                        'title': '后台请求示例',
                        'icon': 'book',
                    },
                    {
                        'id': 4,
                        'name': 'emenu_img',
                        'title': '后台图片',
                        'icon': 'picture',
                    },
                    {
                        'id': 5,
                        'name': 'emenu_up',
                        'title': '上传图片',
                        'icon': 'upload',
                    }
                ]
            }
        ]
    },
    {
        'id': 3,
        'name': 'connect',
        'title': '内容',
        'icon': 'read',
        'children': [
            {
                'id': 1,
                'name': 'connect_ma',
                'title': '内容管理',
                'icon': 'read',
                'children': [
                    {
                        'id': 1,
                        'name': 'connect_ma_ma',
                        'title': '管理内容',
                        'icon': 'read',
                    },
                    {
                        'id': 2,
                        'name': 'tags_ma',
                        'title': 'Tags管理',
                        'icon': 'tag',
                    }
                ]
            },
            {
                'id': 2,
                'name': 'connect_other',
                'title': '相关设置',
                'icon': 'cluster',
                'children': [
                    {
                        'id': 1,
                        'name': 'connect_cms',
                        'title': 'CMS配置',
                        'icon': 'setting',
                    },
                    {
                        'id': 2,
                        'name': 'connect_li',
                        'title': '栏目列表',
                        'icon': 'bars',
                    },
                    {
                        'id': 3,
                        'name': 'connect_modal',
                        'title': '模型管理',
                        'icon': 'apartment',
                    }
                ]
            },
        ]
    },
    {
        'id': 4,
        'name': 'member',
        'title': '会员',
        'icon': 'user',
        'children': [
            {
                'id': 1,
                'name': 'member_ma',
                'title': '会员管理',
                'icon': 'user',
                'children': [
                    {
                        'id': 1,
                        'name': 'member_set',
                        'title': '会员设置',
                        'icon': 'setting',
                    },
                    {
                        'id': 2,
                        'name': 'member_ma_ma',
                        'title': '会员管理',
                        'icon': 'user',
                    },
                    {
                        'id': 3,
                        'name': 'member_verify',
                        'title': '审核会员',
                        'icon': 'schedule',
                    }
                ]
            },
            {
                'id': 2,
                'name': 'member_group',
                'title': '会员组',
                'icon': 'team',
                'children': [
                    {
                        'id': 1,
                        'name': 'setting',
                        'title': '会员组管理',
                        'icon': 'team',
                    }
                ]
            },
        ]
    },
    {
        'id': 5,
        'name': 'modal',
        'title': '模块',
        'icon': 'switcher',
        'children': [
            {
                'id': 1,
                'name': 'modal_link',
                'title': '在线云平台',
                'icon': 'cloud-download',
                'children': [
                    {
                        'id': 1,
                        'name': 'modal_shop',
                        'title': '模块商店',
                        'icon': 'shopping-cart',
                    },
                    {
                        'id': 2,
                        'name': 'unit_shop',
                        'title': '插件商店',
                        'icon': 'shopping-cart',
                    }
                ]
            },
            {
                'id': 2,
                'name': 'modal_local',
                'title': '本地模块',
                'icon': 'desktop',
                'children': [
                    {
                        'id': 1,
                        'name': 'modal_ma',
                        'title': '模块管理',
                        'icon': 'desktop',
                    }
                ]
            },
            {
                'id': 3,
                'name': 'modal_back',
                'title': '后台模块',
                'icon': 'robot',
                'children': [
                    {
                        'id': 1,
                        'name': 'nodal_backgrounk',
                        'title': '后台模块',
                        'icon': 'robot',
                    }
                ]
            }
        ]
    },
    {
        'id': 6,
        'name': 'extend',
        'title': '扩展',
        'icon': 'share-alt',
        'children': [
            {
                'id': 1,
                'name': 'extend_unit',
                'title': '插件扩展',
                'icon': 'share-alt',
                'children': [
                    {
                        'id': 1,
                        'name': 'extend_ma',
                        'title': '插件管理',
                        'icon': 'share-alt',
                    },
                    {
                        'id': 2,
                        'name': 'extend_behavior',
                        'title': '行为管理',
                        'icon': 'fork',
                    }
                ]
            }
        ]
    },
]

export default mainNavList