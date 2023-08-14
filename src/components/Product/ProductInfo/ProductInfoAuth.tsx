import React from "react";

const ProductInfoAuth: React.FC = () => {
    return (
        <div className="product-content-info-auth">
            <div className="product-content-info-auth-text">
                <h4 className="product-content-info-auth-text__title">
                    Гарантия подлинности
                </h4>
                <p className="product-content-info-auth-text__subtitle">
                    Подробнее о проверке подлинности
                </p>
            </div>
            <div className="product-content-info-auth-arrow">
                <svg
                    width="61"
                    height="60"
                    viewBox="0 0 61 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_2251_33886)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M35.7323 3.17471L32.9376 1.76775C31.6647 1.1269 30.1634 1.1269 28.8905 1.76775L26.0959 3.17471C25.2994 3.5757 24.4174 3.77701 23.5258 3.76131L20.3975 3.70623C18.9726 3.68114 17.62 4.33251 16.7512 5.4622L14.8438 7.94238C14.3002 8.64922 13.5928 9.2133 12.7827 9.58599L9.9403 10.8937C8.64561 11.4893 7.70959 12.6631 7.41697 14.0579L6.77456 17.12C6.59147 17.9927 6.19893 18.8078 5.63077 19.4951L3.63722 21.9066C2.72918 23.005 2.39512 24.4686 2.73666 25.8522L3.48648 28.8899C3.70018 29.7556 3.70018 30.6603 3.48648 31.526L2.73666 34.5637C2.39512 35.9473 2.72918 37.4109 3.63722 38.5093L5.63077 40.9208C6.19893 41.6081 6.59147 42.4232 6.77456 43.2959L7.41697 46.358C7.70959 47.7528 8.64561 48.9265 9.9403 49.5222L12.7827 50.8299C13.5928 51.2026 14.3002 51.7667 14.8438 52.4735L16.7512 54.9537C17.62 56.0834 18.9726 56.7347 20.3975 56.7097L23.5258 56.6546C24.4174 56.6389 25.2994 56.8402 26.0959 57.2412L28.8905 58.6481C30.1634 59.289 31.6647 59.289 32.9376 58.6481L35.7323 57.2412C36.5287 56.8402 37.4107 56.6389 38.3023 56.6546L41.4306 56.7097C42.8556 56.7347 44.2082 56.0834 45.077 54.9537L46.9844 52.4735C47.528 51.7667 48.2353 51.2026 49.0454 50.8299L51.8878 49.5222C53.1825 48.9265 54.1186 47.7528 54.4112 46.358L55.0536 43.2959C55.2367 42.4232 55.6292 41.6081 56.1974 40.9208L58.1909 38.5093C59.099 37.4109 59.433 35.9473 59.0915 34.5637L58.3417 31.526C58.128 30.6603 58.128 29.7556 58.3417 28.8899L59.0915 25.8522C59.433 24.4686 59.099 23.005 58.1909 21.9066L56.1974 19.4951C55.6292 18.8078 55.2367 17.9927 55.0536 17.12L54.4112 14.0579C54.1186 12.6631 53.1825 11.4893 51.8878 10.8937L49.0454 9.58599C48.2353 9.2133 47.528 8.64922 46.9844 7.94238L45.077 5.4622C44.2082 4.33251 42.8556 3.68114 41.4306 3.70623L38.3023 3.76131C37.4107 3.77701 36.5287 3.5757 35.7323 3.17471ZM33.1625 1.32116C31.7481 0.609094 30.08 0.609094 28.6657 1.32116L25.871 2.72812C25.147 3.09265 24.3451 3.27566 23.5346 3.26139L20.4063 3.20631C18.823 3.17843 17.3202 3.90217 16.3548 5.15739L14.4474 7.63756C13.9532 8.28015 13.3102 8.79294 12.5738 9.13176L9.73133 10.4395C8.29277 11.1013 7.25275 12.4054 6.92763 13.9552L6.28521 17.0173C6.11877 17.8107 5.76192 18.5517 5.24541 19.1765L3.25186 21.588C2.24292 22.8085 1.87174 24.4347 2.25123 25.972L3.00105 29.0097C3.19532 29.7967 3.19532 30.6192 3.00105 31.4062L2.25123 34.4438C1.87174 35.9812 2.24292 37.6074 3.25186 38.8279L5.24541 41.2394C5.76192 41.8642 6.11877 42.6052 6.28521 43.3985L6.92763 46.4607C7.25275 48.0104 8.29277 49.3146 9.73133 49.9764L12.5738 51.2841C13.3102 51.6229 13.9532 52.1357 14.4474 52.7783L16.3548 55.2585C17.3202 56.5137 18.823 57.2375 20.4063 57.2096L23.5346 57.1545C24.3451 57.1402 25.147 57.3232 25.871 57.6878L28.6657 59.0947C30.08 59.8068 31.7481 59.8068 33.1625 59.0947L35.9571 57.6878C36.6812 57.3232 37.483 57.1402 38.2935 57.1545L41.4218 57.2096C43.0051 57.2375 44.508 56.5137 45.4733 55.2585L47.3807 52.7783C47.8749 52.1357 48.5179 51.6229 49.2544 51.2841L52.0968 49.9764C53.5354 49.3146 54.5754 48.0104 54.9005 46.4607L55.5429 43.3985C55.7094 42.6052 56.0662 41.8642 56.5827 41.2394L58.5763 38.8279C59.5852 37.6074 59.9564 35.9812 59.5769 34.4438L58.8271 31.4062C58.6328 30.6192 58.6328 29.7967 58.8271 29.0097L59.5769 25.972C59.9564 24.4347 59.5852 22.8085 58.5763 21.588L56.5827 19.1765C56.0662 18.5517 55.7094 17.8107 55.5429 17.0173L54.9005 13.9552C54.5754 12.4054 53.5354 11.1013 52.0968 10.4395L49.2544 9.13176C48.5179 8.79294 47.8749 8.28015 47.3807 7.63756L45.4733 5.15739C44.508 3.90217 43.0051 3.17843 41.4218 3.20631L38.2935 3.26139C37.483 3.27566 36.6812 3.09265 35.9571 2.72812L33.1625 1.32116Z"
                            fill="#285141"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M33.0467 14.9399L32.9375 14.8849C31.6646 14.2441 30.1634 14.2441 28.8904 14.8849L28.7813 14.9399C27.9849 15.3409 27.1028 15.5422 26.2113 15.5265L26.0891 15.5243C24.6642 15.4992 23.3116 16.1506 22.4428 17.2803L22.3683 17.3771C21.8247 18.084 21.1174 18.6481 20.3073 19.0207L20.1963 19.0718C18.9016 19.6675 17.9656 20.8412 17.673 22.236L17.6479 22.3555C17.4648 23.2282 17.0723 24.0433 16.5041 24.7306L16.4263 24.8248C15.5182 25.9232 15.1842 27.3868 15.5257 28.7704L15.555 28.889C15.7687 29.7547 15.7687 30.6594 15.555 31.5252L15.5257 31.6438C15.1842 33.0274 15.5182 34.491 16.4263 35.5894L16.5041 35.6836C17.0723 36.3708 17.4648 37.1859 17.6479 38.0586L17.673 38.1782C17.9656 39.573 18.9016 40.7467 20.1963 41.3424L20.3073 41.3934C21.1174 41.7661 21.8247 42.3302 22.3683 43.037L22.4428 43.1339C23.3116 44.2636 24.6642 44.9149 26.0891 44.8898L26.2113 44.8877C27.1028 44.872 27.9849 45.0733 28.7813 45.4743L28.8904 45.5292C30.1634 46.1701 31.6646 46.1701 32.9375 45.5292L33.0467 45.4743C33.8431 45.0733 34.7251 44.872 35.6167 44.8877L35.7389 44.8898C37.1638 44.9149 38.5164 44.2636 39.3852 43.1339L39.4597 43.037C40.0033 42.3302 40.7106 41.7661 41.5207 41.3934L41.6317 41.3424C42.9264 40.7467 43.8624 39.573 44.155 38.1782L44.1801 38.0586C44.3632 37.1859 44.7557 36.3708 45.3239 35.6836L45.4017 35.5894C46.3097 34.491 46.6438 33.0274 46.3023 31.6438L46.273 31.5252C46.0593 30.6594 46.0593 29.7547 46.273 28.889L46.3023 28.7704C46.6438 27.3868 46.3097 25.9232 45.4017 24.8248L45.3239 24.7306C44.7557 24.0433 44.3632 23.2282 44.1801 22.3555L44.155 22.236C43.8624 20.8412 42.9264 19.6675 41.6317 19.0718L41.5207 19.0207C40.7106 18.6481 40.0033 18.084 39.4597 17.3771L39.3852 17.2803C38.5164 16.1506 37.1638 15.4992 35.7389 15.5243L35.6167 15.5265C34.7251 15.5422 33.8431 15.3409 33.0467 14.9399ZM33.1624 14.4383C31.748 13.7263 30.08 13.7263 28.6656 14.4383L28.5565 14.4933C27.8324 14.8578 27.0306 15.0408 26.2201 15.0266L26.0979 15.0244C24.5147 14.9965 23.0118 15.7203 22.0465 16.9755L21.972 17.0723C21.4778 17.7149 20.8348 18.2277 20.0983 18.5665L19.9873 18.6176C18.5488 19.2794 17.5088 20.5835 17.1836 22.1333L17.1586 22.2529C16.9921 23.0462 16.6353 23.7872 16.1188 24.412L16.0409 24.5062C15.032 25.7266 14.6608 27.3529 15.0403 28.8902L15.0696 29.0088C15.2638 29.7959 15.2638 30.6183 15.0696 31.4053L15.0403 31.5239C14.6608 33.0613 15.032 34.6875 16.0409 35.908L16.1188 36.0021C16.6353 36.6269 16.9921 37.3679 17.1586 38.1613L17.1836 38.2809C17.5088 39.8306 18.5488 41.1348 19.9873 41.7966L20.0983 41.8477C20.8348 42.1865 21.4778 42.6993 21.972 43.3418L22.0465 43.4387C23.0118 44.6939 24.5147 45.4176 26.0979 45.3898L26.2201 45.3876C27.0306 45.3733 27.8324 45.5564 28.5565 45.9209L28.6656 45.9758C30.08 46.6879 31.748 46.6879 33.1624 45.9758L33.2715 45.9209C33.9956 45.5564 34.7974 45.3733 35.6079 45.3876L35.7301 45.3898C37.3133 45.4176 38.8162 44.6939 39.7815 43.4387L39.856 43.3418C40.3502 42.6993 40.9932 42.1865 41.7297 41.8477L41.8406 41.7966C43.2792 41.1348 44.3192 39.8306 44.6443 38.2809L44.6694 38.1613C44.8359 37.3679 45.1927 36.6269 45.7092 36.0021L45.7871 35.908C46.796 34.6875 47.1672 33.0613 46.7877 31.5239L46.7584 31.4053C46.5641 30.6183 46.5641 29.7959 46.7584 29.0088L46.7877 28.8902C47.1672 27.3529 46.796 25.7266 45.7871 24.5062L45.7092 24.412C45.1927 23.7872 44.8359 23.0462 44.6694 22.2529L44.6443 22.1333C44.3192 20.5835 43.2792 19.2794 41.8406 18.6176L41.7297 18.5665C40.9932 18.2277 40.3502 17.7149 39.856 17.0723L39.7815 16.9755C38.8162 15.7203 37.3133 14.9965 35.7301 15.0244L35.6079 15.0266C34.7974 15.0408 33.9956 14.8578 33.2715 14.4933L33.1624 14.4383Z"
                            fill="#285141"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M36.9041 25.6065C37.0632 25.739 37.0847 25.9755 36.9521 26.1346L29.7646 34.7596C29.6972 34.8405 29.5988 34.8894 29.4936 34.8942C29.3883 34.8989 29.2859 34.8592 29.2114 34.7847L24.8989 30.4722C24.7525 30.3258 24.7525 30.0883 24.8989 29.9419C25.0453 29.7954 25.2828 29.7954 25.4292 29.9419L29.4514 33.964L36.376 25.6545C36.5086 25.4954 36.745 25.4739 36.9041 25.6065Z"
                            fill="#285141"
                        />
                        <path
                            d="M8.8133 40.9679L9.31861 40.6838L10.2871 42.4065L13.8014 40.4307L14.1016 40.9648L10.082 43.2246L8.8133 40.9679Z"
                            fill="#285141"
                        />
                        <path
                            d="M11.6453 35.4962L10.7954 36.1949L11.487 38.1514L12.5873 38.1607L12.8046 38.7755L7.88396 38.6915L7.65342 38.0393L11.4279 34.8813L11.6453 35.4962ZM10.8764 38.1436L10.3253 36.5847L8.45919 38.1248L10.8764 38.1436Z"
                            fill="#285141"
                        />
                        <path
                            d="M6.62818 33.7298C6.56534 33.3085 6.65436 32.9378 6.89524 32.6177C7.13112 32.2939 7.45756 32.1009 7.87455 32.0387C8.28719 31.9772 8.65574 32.0665 8.98018 32.3067C9.30398 32.5426 9.4973 32.8712 9.56014 33.2926L9.71659 34.3415L11.3455 34.0986L11.4358 34.7046L6.875 35.3848L6.62818 33.7298ZM8.99329 33.3771C8.95572 33.1252 8.83992 32.9293 8.6459 32.7895C8.44754 32.6504 8.22022 32.5999 7.96395 32.6381C7.70333 32.677 7.50063 32.7916 7.35584 32.9819C7.21106 33.1722 7.15745 33.3934 7.19502 33.6453L7.35147 34.6943L9.14974 34.4261L8.99329 33.3771Z"
                            fill="#285141"
                        />
                        <path
                            d="M11.0702 28.0556L10.0218 28.3896L9.93929 30.4631L10.9578 30.8794L10.9318 31.531L6.39259 29.6297L6.4201 28.9385L11.0961 27.4039L11.0702 28.0556ZM9.37501 30.2296L9.44076 28.5775L7.13685 29.3165L9.37501 30.2296Z"
                            fill="#285141"
                        />
                        <path
                            d="M7.34183 23.4148L7.48583 22.8261L11.965 23.9218L11.821 24.5105L9.80539 24.0175L9.2732 26.1931L11.2888 26.6861L11.1433 27.2812L6.66406 26.1855L6.80963 25.5905L8.7101 26.0553L9.24229 23.8797L7.34183 23.4148Z"
                            fill="#285141"
                        />
                        <path
                            d="M9.25756 18.6523L9.78545 18.8918L9.22194 20.1336L12.8932 21.7996L12.6427 22.3515L8.97149 20.6855L8.4107 21.9212L7.88281 21.6816L9.25756 18.6523Z"
                            fill="#285141"
                        />
                        <path
                            d="M15.2817 17.9113L12.4807 15.9164L13.9059 19.8429L13.6193 20.2454L9.86328 17.5703L10.2187 17.0713L13.025 19.0699L11.5944 15.1396L11.881 14.7372L15.6371 17.4122L15.2817 17.9113Z"
                            fill="#285141"
                        />
                        <path
                            d="M15.2162 11.4183L18.3628 14.7892L17.9197 15.2027L16.7151 13.9122L16.0457 14.537L16.3787 16.6412L15.8731 17.1131L15.5371 14.9576C15.2551 15.1188 14.9502 15.1751 14.6225 15.1265C14.2948 15.0779 14.02 14.9349 13.7983 14.6973C13.5286 14.4083 13.4005 14.0683 13.4139 13.6773C13.4276 13.28 13.5789 12.9466 13.8679 12.6769L15.2162 11.4183ZM15.4321 14.3527L16.3375 13.5076L15.1643 12.2508L14.2589 13.0958C14.0952 13.2487 14.0109 13.4415 14.006 13.6744C14.0011 13.9073 14.0795 14.1104 14.2413 14.2837C14.4032 14.4571 14.6019 14.5509 14.8375 14.5653C15.0702 14.5764 15.2684 14.5055 15.4321 14.3527Z"
                            fill="#285141"
                        />
                        <path
                            d="M19.7602 11.6228C19.6579 11.6829 19.5497 11.6981 19.4355 11.6685C19.3213 11.6389 19.2341 11.5729 19.174 11.4707C19.1139 11.3685 19.0987 11.2603 19.1284 11.146C19.158 11.0318 19.2239 10.9447 19.3262 10.8846C19.4322 10.8222 19.5404 10.807 19.6508 10.8389C19.765 10.8685 19.8522 10.9345 19.9123 11.0367C19.9724 11.1389 19.9876 11.2471 19.958 11.3614C19.9321 11.4734 19.8662 11.5605 19.7602 11.6228Z"
                            fill="#285141"
                        />
                        <path
                            d="M24.8946 6.52155L26.3155 10.9084L25.7327 11.0972L24.4904 7.26182L22.4724 7.91545L23.7147 11.7508L23.1319 11.9396L21.7109 7.55273L24.8946 6.52155Z"
                            fill="#285141"
                        />
                        <path
                            d="M30.6463 9.79466C30.2282 10.2992 29.6868 10.5811 29.0219 10.6402C28.3569 10.6994 27.7742 10.5176 27.2736 10.0948C26.7731 9.67196 26.4934 9.13029 26.4346 8.46975C26.3754 7.80484 26.5551 7.2223 26.9735 6.72211C27.3916 6.21755 27.933 5.93569 28.598 5.87652C29.2629 5.81736 29.8456 5.99918 30.3462 6.42199C30.8507 6.84004 31.1326 7.38152 31.1918 8.04643C31.2505 8.70697 31.0687 9.28971 30.6463 9.79466ZM27.6568 9.64403C28.0284 9.95487 28.4657 10.0879 28.9687 10.0431C29.4718 9.99838 29.8765 9.79041 30.183 9.41923C30.4935 9.04329 30.6263 8.60379 30.5815 8.10074C30.5364 7.5933 30.328 7.18417 29.9565 6.87333C29.5889 6.55772 29.1536 6.4223 28.6505 6.46707C28.1474 6.51183 27.7407 6.72218 27.4302 7.09812C27.1238 7.4693 26.9931 7.9086 27.0383 8.41603C27.083 8.91909 27.2892 9.32842 27.6568 9.64403Z"
                            fill="#285141"
                        />
                        <path
                            d="M35.1022 10.3002L35.5918 10.3665L35.3957 11.8157L34.7886 11.7335L34.907 10.8588L31.891 10.4506L31.7726 11.3254L31.1655 11.2432L31.3617 9.79398L31.7599 9.84787C32.0905 9.53364 32.3043 9.01748 32.4015 8.2994L32.7249 5.91015L35.6429 6.30506L35.1022 10.3002ZM32.4453 9.94063L34.4951 10.218L34.9589 6.79083L33.2551 6.56025L33.0069 8.39462C32.9132 9.08659 32.726 9.60193 32.4453 9.94063Z"
                            fill="#285141"
                        />
                        <path
                            d="M35.3839 10.9031L35.5694 10.3817C35.8402 10.5247 36.0812 10.5219 36.2926 10.3733C36.5095 10.2221 36.7152 9.87343 36.9095 9.32727L37.7862 6.86334L40.6535 7.88356L39.1077 12.228L38.5305 12.0227L39.882 8.22435L38.169 7.61487L37.4867 9.53264C37.3483 9.92157 37.1947 10.2352 37.026 10.4735C36.863 10.7091 36.6896 10.8689 36.5059 10.9527C36.3264 11.038 36.1451 11.076 35.9619 11.0668C35.7844 11.0549 35.5917 11.0003 35.3839 10.9031Z"
                            fill="#285141"
                        />
                        <path
                            d="M42.0824 13.9838L43.8846 11.0551L40.0627 12.7409L39.6419 12.4819L42.0586 8.55469L42.5804 8.87577L40.7747 11.81L44.6001 10.1186L45.0209 10.3776L42.6041 14.3048L42.0824 13.9838Z"
                            fill="#285141"
                        />
                        <path
                            d="M48.379 13.3355L48.8172 13.7541L45.632 17.0885L45.1938 16.6699L46.6271 15.1694L45.0075 13.6223L43.5742 15.1228L43.1312 14.6996L46.3164 11.3652L46.7594 11.7884L45.408 13.2032L47.0275 14.7503L48.379 13.3355Z"
                            fill="#285141"
                        />
                        <path
                            d="M51.4877 17.3313L51.8304 17.8311L48.0269 20.4383L47.6842 19.9384L49.3958 18.7652L48.1295 16.9178L46.4179 18.091L46.0715 17.5857L49.875 14.9785L50.2214 15.4838L48.6076 16.59L49.8739 18.4374L51.4877 17.3313Z"
                            fill="#285141"
                        />
                        <path
                            d="M50.3835 24.378C49.7817 24.1189 49.3588 23.6786 49.1149 23.0572C48.871 22.4359 48.8814 21.8255 49.1462 21.2262C49.4111 20.6268 49.8521 20.206 50.4694 19.9636C51.0908 19.7197 51.7003 19.7281 52.2981 19.9889C52.8999 20.248 53.3228 20.6882 53.5667 21.3096C53.8106 21.931 53.8002 22.5413 53.5354 23.1407C53.2762 23.7425 52.836 24.1654 52.2146 24.4093C51.5973 24.6516 50.987 24.6412 50.3835 24.378ZM49.6866 21.4669C49.4929 21.911 49.4884 22.3681 49.6729 22.8382C49.8575 23.3083 50.171 23.6382 50.6134 23.8278C51.0615 24.0198 51.5206 24.0236 51.9907 23.8391C52.4649 23.6529 52.7989 23.3378 52.9926 22.8938C53.192 22.4522 53.1994 21.9964 53.0148 21.5263C52.8303 21.0561 52.5139 20.725 52.0658 20.533C51.6234 20.3434 51.1651 20.3416 50.6909 20.5278C50.2208 20.7123 49.886 21.0254 49.6866 21.4669Z"
                            fill="#285141"
                        />
                        <path
                            d="M50.3178 27.7424C50.2225 27.0506 50.3721 26.447 50.7666 25.9316C51.1617 25.4206 51.692 25.1192 52.3577 25.0275C53.0233 24.9358 53.6154 25.0826 54.1339 25.4677C54.6531 25.8573 54.9603 26.3979 55.0556 27.0896C55.1131 27.5073 55.0658 27.9039 54.9137 28.2796C54.7621 28.6595 54.5301 28.9708 54.2177 29.2133L53.8382 28.727C54.0725 28.5617 54.2457 28.3383 54.3576 28.0569C54.4746 27.7793 54.5114 27.4838 54.4683 27.1706C54.3958 26.6441 54.1667 26.2368 53.7813 25.9486C53.3964 25.6647 52.9494 25.5578 52.4404 25.6279C51.9357 25.6974 51.5365 25.9209 51.2427 26.2983C50.9495 26.68 50.8391 27.1341 50.9117 27.6605C50.9548 27.9738 51.068 28.2486 51.2513 28.4849C51.4396 28.7249 51.6667 28.8931 51.9326 28.9895L51.7053 29.5594C51.3395 29.4148 51.0302 29.1803 50.7771 28.8561C50.5285 28.5313 50.3754 28.16 50.3178 27.7424Z"
                            fill="#285141"
                        />
                        <path
                            d="M55.0414 33.2195L54.4627 33.1859L54.5418 31.8246L50.517 31.5908L50.5522 30.9857L54.5769 31.2196L54.6556 29.8648L55.2344 29.8984L55.0414 33.2195Z"
                            fill="#285141"
                        />
                        <path
                            d="M49.6989 36.1268L53.033 36.9682L50.2791 33.8274L50.4 33.3483L54.8711 34.4766L54.7212 35.0706L51.3806 34.2276L54.141 37.37L54.0201 37.8491L49.549 36.7208L49.6989 36.1268Z"
                            fill="#285141"
                        />
                        <path
                            d="M50.1285 39.9801C50.1822 39.8744 50.2652 39.8032 50.3774 39.7666C50.4896 39.7301 50.5985 39.7386 50.7042 39.7923C50.8099 39.8461 50.8811 39.929 50.9177 40.0412C50.9542 40.1534 50.9457 40.2623 50.892 40.3681C50.8362 40.4777 50.7533 40.5488 50.6431 40.5815C50.5309 40.6181 50.4219 40.6095 50.3162 40.5558C50.2105 40.5021 50.1394 40.4191 50.1028 40.3069C50.0642 40.1987 50.0728 40.0897 50.1285 39.9801Z"
                            fill="#285141"
                        />
                        <path
                            d="M48.8657 46.7059L48.4132 46.3436L49.2657 45.2792L46.1189 42.759L46.4978 42.2859L49.6445 44.8062L50.4928 43.747L50.9453 44.1094L48.8657 46.7059Z"
                            fill="#285141"
                        />
                        <path
                            d="M45.8392 49.4772L45.3776 49.8699L42.3895 46.3577L42.8511 45.965L44.1958 47.5455L45.9017 46.0942L44.5571 44.5137L45.0237 44.1167L48.0117 47.6289L47.5451 48.0259L46.2773 46.5357L44.5714 47.987L45.8392 49.4772Z"
                            fill="#285141"
                        />
                        <path
                            d="M41.5085 47.5789L39.6504 48.6424L39.3624 48.1393L41.7522 46.7714L44.043 50.7734L41.6818 52.125L41.3938 51.6219L43.2233 50.5747L42.5197 49.3455L40.8331 50.3109L40.5484 49.8135L42.235 48.8481L41.5085 47.5789Z"
                            fill="#285141"
                        />
                        <path
                            d="M37.6309 50.8042C37.7435 50.7672 37.8525 50.7753 37.9578 50.8286C38.0631 50.8819 38.1342 50.9649 38.1712 51.0775C38.2082 51.1902 38.2 51.2992 38.1467 51.4045C38.0935 51.5098 38.0105 51.5809 37.8978 51.6179C37.781 51.6562 37.672 51.648 37.5709 51.5934C37.4656 51.5401 37.3945 51.4572 37.3575 51.3445C37.3205 51.2318 37.3287 51.1228 37.382 51.0176C37.4311 50.9136 37.514 50.8425 37.6309 50.8042Z"
                            fill="#285141"
                        />
                        <path
                            d="M32.216 49.9078C32.912 49.851 33.5064 50.0339 33.9991 50.4563C34.4874 50.8792 34.7588 51.4254 34.8135 52.0952C34.8681 52.7649 34.6887 53.3479 34.2753 53.8443C33.8576 54.341 33.3007 54.6177 32.6048 54.6745C32.1845 54.7087 31.7911 54.6395 31.4246 54.4667C31.0536 54.2942 30.7557 54.0453 30.5309 53.72L31.0375 53.368C31.1896 53.6112 31.403 53.7965 31.6777 53.9239C31.9485 54.056 32.2414 54.1093 32.5566 54.0836C33.0862 54.0404 33.5056 53.8343 33.8148 53.4654C34.1196 53.0969 34.2512 52.6565 34.2094 52.1444C34.168 51.6367 33.9671 51.2256 33.6065 50.9113C33.2417 50.5974 32.7944 50.462 32.2648 50.5052C31.9496 50.5309 31.669 50.6287 31.4229 50.7986C31.1727 50.9732 30.9922 51.1906 30.8812 51.4508L30.3247 51.1922C30.4895 50.8351 30.7408 50.5392 31.0785 50.3045C31.4167 50.0743 31.7958 49.942 32.216 49.9078Z"
                            fill="#285141"
                        />
                        <path
                            d="M26.9705 50.07C27.3267 49.8201 27.7574 49.7284 28.2625 49.7949C28.7676 49.8614 29.162 50.0617 29.4458 50.3958C29.7247 50.7337 29.8317 51.1487 29.767 51.6407L29.3672 54.6777L28.7598 54.5978L29.1561 51.5869C29.1985 51.2647 29.1366 50.9952 28.9702 50.7784C28.8033 50.5659 28.5413 50.4362 28.1842 50.3892C27.8272 50.3422 27.5406 50.3997 27.3243 50.5617C27.1075 50.7281 26.9779 50.9724 26.9355 51.2946L26.5392 54.3055L25.9383 54.2264L26.3381 51.1894C26.4029 50.6974 26.6137 50.3242 26.9705 50.07Z"
                            fill="#285141"
                        />
                        <path
                            d="M25.2099 49.8536L23.3125 49.2554L23.4868 48.7026L25.9685 49.4849L24.582 53.8828L23.9977 53.6986L25.2099 49.8536Z"
                            fill="#285141"
                        />
                        <path
                            d="M18.3764 51.328L18.6371 50.8103L19.855 51.4236L21.6682 47.8227L22.2095 48.0953L20.3963 51.6961L21.6084 52.3065L21.3477 52.8242L18.3764 51.328Z"
                            fill="#285141"
                        />
                        <path
                            d="M15.0617 48.9887L15.4051 48.5216L16.5038 49.3292L18.8916 46.0808L19.3799 46.4398L16.9921 49.6882L18.0855 50.4919L17.7422 50.959L15.0617 48.9887Z"
                            fill="#285141"
                        />
                        <path
                            d="M14.6903 44.7531C14.7692 44.8416 14.8053 44.9448 14.7985 45.0626C14.7918 45.1804 14.7441 45.2788 14.6556 45.3577C14.5671 45.4366 14.4639 45.4726 14.3461 45.4659C14.2283 45.4591 14.1299 45.4114 14.051 45.3229C13.9692 45.2311 13.9332 45.128 13.9429 45.0134C13.9496 44.8956 13.9973 44.7973 14.0858 44.7184C14.1743 44.6395 14.2775 44.6034 14.3953 44.6102C14.5102 44.6137 14.6085 44.6613 14.6903 44.7531Z"
                            fill="#285141"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2251_33886">
                            <rect
                                width="60"
                                height="60"
                                fill="white"
                                transform="translate(0.75)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default ProductInfoAuth;
